import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Copy, MessageCircle, Ticket, Users } from "lucide-react";
import { formatVnd, site, vietQrUrl, zaloLink } from "@/config/site";
import { useCountdown } from "@/hooks/useCountdown";
import { Footer } from "@/components/FinalCta";

const tabIcons = [Ticket, Users];

export default function Register() {
  const r = site.register;
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [qrError, setQrError] = useState(false);
  const ticket = r.tickets[active];
  const { ended } = useCountdown(site.eventDate);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${r.title} – ${site.name}`;
  }, [r.title]);

  useEffect(() => setQrError(false), [active]);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(site.bank.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* trình duyệt chặn clipboard: bỏ qua */
    }
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-hero-gradient pb-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 py-6 text-sm font-semibold hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Quay lại trang chủ
          </Link>

          <header className="text-center">
            <h1 className="text-3xl font-extrabold text-primary md:text-4xl">{r.title}</h1>
            <p className="mt-2 text-muted-foreground">{r.subtitle}</p>
          </header>

          {ended && (
            <div className="mt-8 rounded-2xl border border-destructive/20 bg-destructive/10 p-6 text-center">
              <p className="text-lg font-bold text-destructive">🚫 Đã hết thời gian đăng ký!</p>
              <p className="mt-1 text-sm text-muted-foreground">Cổng đăng ký đã đóng.</p>
            </div>
          )}

          {/* Hướng dẫn 3 bước */}
          <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <CheckCircle2 className="h-5 w-5 text-primary" /> Hướng dẫn đăng ký
            </h2>
            <ol className="mt-4 space-y-3">
              {r.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm md:text-base">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    {i + 1}
                  </span>
                  {i === 1 ? `${s}: ${site.zalo}` : s}
                </li>
              ))}
            </ol>
          </section>

          {/* Tab chọn vé */}
          <div className="mt-6 grid grid-cols-2 gap-3" role="tablist">
            {r.tickets.map((t, i) => {
              const Icon = tabIcons[i] ?? Ticket;
              const on = i === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-center gap-1 rounded-2xl border-2 px-3 py-4 text-sm font-semibold transition-all duration-300 ${
                    on
                      ? "border-primary bg-secondary text-secondary-foreground shadow-glow"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {t.tab}
                </button>
              );
            })}
          </div>

          {ticket.highlight && (
            <div className="mt-6 rounded-2xl border-2 border-accent/60 bg-gradient-to-br from-secondary to-white p-5 animate-fade-in">
              <p className="flex items-center gap-2 font-bold">
                <Users className="h-5 w-5 text-accent" /> {ticket.priceNote}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{ticket.highlight}</p>
            </div>
          )}

          {/* Thẻ vé */}
          <section key={ticket.id} className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft animate-fade-in">
            <div className="bg-cta-gradient px-6 py-5 text-white">
              <h2 className="text-lg font-bold md:text-xl">{ticket.name}</h2>
              <p className="mt-1 text-sm text-white/90">{ticket.tagline}</p>
            </div>

            <div className="p-6">
              <p className="font-semibold">Bạn sẽ nhận được:</p>
              <ul className="mt-3 space-y-2">
                {ticket.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">Số tiền chuyển khoản</p>
                <p className="mt-1 text-4xl font-black text-gradient">{formatVnd(ticket.price)}</p>
                {ticket.priceNote && <p className="mt-1 text-sm text-muted-foreground">{ticket.priceNote}</p>}
              </div>

              <div className="mx-auto mt-6 w-full max-w-[260px] rounded-2xl bg-secondary/60 p-3 shadow-glow">
                {qrError ? (
                  <div className="flex aspect-square items-center justify-center rounded-xl bg-white p-4 text-center text-sm text-muted-foreground">
                    Không tải được mã QR. Vui lòng chuyển khoản theo thông tin bên dưới.
                  </div>
                ) : (
                  <img
                    src={vietQrUrl(ticket.price, ticket.transferNote)}
                    alt={`Mã QR chuyển khoản ${formatVnd(ticket.price)}`}
                    className="w-full rounded-xl bg-white"
                    onError={() => setQrError(true)}
                  />
                )}
              </div>

              <div className="mt-4 space-y-1 text-center text-sm">
                <p className="text-muted-foreground">
                  Quét mã QR để chuyển khoản • {site.bank.bankName} • {site.bank.accountName}
                </p>
                <p>
                  Số tài khoản: <b>{site.bank.accountNumber}</b>{" "}
                  <button onClick={copyAccount} className="ml-1 inline-flex items-center gap-1 text-primary hover:underline">
                    <Copy className="h-3.5 w-3.5" /> {copied ? "Đã chép" : "Chép"}
                  </button>
                </p>
                <p>
                  Nội dung chuyển khoản: <b>{ticket.transferNote}</b>
                </p>
              </div>
            </div>
          </section>

          {/* Zalo */}
          <section className="mt-6 rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <MessageCircle className="mx-auto h-7 w-7 text-primary" />
            <h2 className="mt-2 font-bold">Liên hệ xác nhận qua Zalo</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Sau khi chuyển khoản, nhắn Zalo để xác nhận đăng ký và nhận link Zoom
            </p>
            <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="btn-cta mt-5 normal-case">
              Nhắn Zalo: {site.zalo}
            </a>
          </section>

          <div className="mt-8 text-center">
            <Link to="/" className="btn-outline">
              <ArrowLeft className="h-4 w-4" /> Quay lại trang chủ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
