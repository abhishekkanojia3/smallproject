import { useEffect, useState } from 'react';

const LINES = [
  { prompt: '$ ', cmd: 'terraform init', out: '✔ Terraform initialized successfully.' },
  { prompt: '$ ', cmd: 'nmap -sV -sC 10.10.10.5', out: '✔ Open ports: 22/tcp, 80/tcp, 445/tcp' },
  { prompt: '$ ', cmd: 'docker build -t app:latest .', out: '✔ Successfully built 3f2a1c9d8e7b' },
  { prompt: '$ ', cmd: 'gobuster dir -u http://target.com -w wordlist.txt', out: '✔ Found: /admin, /backup, /uploads' },
  { prompt: '$ ', cmd: 'aws configure --profile prod', out: '✔ AWS credentials configured.' },
  { prompt: '$ ', cmd: 'sqlmap -u "http://target.com?id=1" --dbs', out: '✔ Available databases: users, admin, logs' },
  { prompt: '$ ', cmd: 'kubectl apply -f deployment.yaml', out: '✔ deployment.apps/app created' },
  { prompt: '$ ', cmd: 'msfconsole -q -x "use exploit/multi/handler"', out: '✔ Metasploit handler started' },
  { prompt: '$ ', cmd: 'ansible-playbook site.yml', out: '✔ PLAY RECAP — ok=12 changed=4' },
  { prompt: '$ ', cmd: 'hydra -l admin -P passwords.txt ssh://10.10.10.5', out: '✔ Valid credentials found: admin:password123' },
];

const TYPE_SPEED = 48;
const PAUSE_AFTER_CMD = 420;
const PAUSE_AFTER_OUT = 900;

export default function Terminal() {
  const [lines, setLines] = useState<{ prompt: string; cmd: string; out: string; done: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'output' | 'pause'>('typing');

  useEffect(() => {
    if (currentLine >= LINES.length) {
      // restart loop
      const t = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setPhase('typing');
      }, 2200);
      return () => clearTimeout(t);
    }

    const line = LINES[currentLine];

    if (phase === 'typing') {
      if (currentChar < line.cmd.length) {
        const t = setTimeout(() => setCurrentChar((c) => c + 1), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('output'), PAUSE_AFTER_CMD);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'output') {
      setLines((prev) => [...prev, { ...line, cmd: line.cmd, done: true }]);
      setPhase('pause');
    }

    if (phase === 'pause') {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setPhase('typing');
      }, PAUSE_AFTER_OUT);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, phase]);

  const activeLine = currentLine < LINES.length ? LINES[currentLine] : null;

  return (
    <div className="rounded-2xl border border-accent/30 bg-[#0d1117] shadow-2xl shadow-accent/20 overflow-hidden font-mono text-xs md:text-sm glowing-border">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#161b22] border-b border-accent/20">
        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57] animate-pulse" style={{ animationDuration: '2s' }} />
        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840] animate-pulse" style={{ animationDuration: '3s' }} />
        <span className="ml-2 md:ml-3 text-[10px] md:text-xs text-accent/60 tracking-[0.2em] uppercase font-bold">LIVE_TERMINAL — BASH</span>
      </div>
      {/* Body */}
      <div className="px-3 md:px-5 py-3 md:py-4 space-y-2 min-h-[160px] md:min-h-[200px]">
        {lines.map((l, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-[#00AEEF] select-none">{l.prompt}</span>
              <span className="text-[#e6edf3]">{l.cmd}</span>
            </div>
            <div className="text-[#3fb950] pl-4">{l.out}</div>
          </div>
        ))}
        {/* Active typing line */}
        {activeLine && phase !== 'pause' && (
          <div className="flex gap-2">
            <span className="text-[#00AEEF] select-none">{activeLine.prompt}</span>
            <span className="text-[#e6edf3]">{activeLine.cmd.slice(0, currentChar)}</span>
            <span className="animate-blink w-[2px] h-[1.1em] bg-[#00AEEF] inline-block align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
