"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible")

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), 2600)
    const goneTimer = setTimeout(() => setPhase("gone"), 3300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.history.replaceState(null, "", "/")
    window.scrollTo({ top: 0, behavior: "instant" })
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  if (phase === "gone") return null

  return (
    <div
      className="loader-root"
      style={{ opacity: phase === "fading" ? 0 : 1 }}
    >
      {/* Ambient background glow */}
      <div className="loader-glow" />

      {/* Horizontal rule — draws in from center */}
      <div className="loader-line loader-line-top" />
      <div className="loader-line loader-line-bottom" />

      {/* Name reveal */}
      <div className="loader-name">
        <span className="loader-first">Ulrich</span>
        <span className="loader-divider">·</span>
        <span className="loader-last">Ziemes</span>
      </div>

      {/* Credential */}
      <p className="loader-credential">VR LL.M.</p>

      {/* Progress bar */}
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>

      <style>{`
        .loader-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0c0a08;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        /* Ambient golden glow behind centre */
        .loader-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(194,151,78,0.12) 0%, transparent 70%);
          animation: glowPulse 2.4s ease-in-out forwards;
          pointer-events: none;
        }

        @keyframes glowPulse {
          0%   { opacity: 0; transform: scale(0.6); }
          40%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.1); }
        }

        /* Horizontal lines */
        .loader-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, transparent, rgba(194,151,78,0.6), transparent);
          animation: lineExpand 0.9s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .loader-line-top    { top: calc(50% - 72px); animation-delay: 0.2s; }
        .loader-line-bottom { top: calc(50% + 72px); animation-delay: 0.3s; }

        @keyframes lineExpand {
          from { width: 0; opacity: 0; }
          to   { width: min(340px, 80vw); opacity: 1; }
        }

        /* Monogram */
        .loader-monogram {
          margin-bottom: 18px;
          opacity: 0;
          animation: riseIn 0.8s cubic-bezier(0.4,0,0.2,1) 0.5s forwards;
        }
        .loader-uz {
          font-family: var(--font-playfair, 'Playfair Display', serif);
          font-size: clamp(13px, 2.5vw, 15px);
          font-weight: 700;
          letter-spacing: 0.35em;
          color: #c2974e;
          display: block;
          padding: 10px 22px;
          border: 1px solid rgba(194,151,78,0.35);
          border-radius: 6px;
          background: rgba(194,151,78,0.06);
        }

        /* Name */
        .loader-name {
          display: flex;
          align-items: baseline;
          gap: 14px;
          opacity: 0;
          animation: riseIn 0.9s cubic-bezier(0.4,0,0.2,1) 0.75s forwards;
        }
        .loader-first,
        .loader-last {
          font-family: var(--font-playfair, 'Playfair Display', serif);
          font-size: clamp(28px, 7vw, 52px);
          font-weight: 400;
          color: #f0ebe3;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .loader-divider {
          font-family: var(--font-playfair, 'Playfair Display', serif);
          font-size: clamp(20px, 4vw, 36px);
          color: #c2974e;
          opacity: 0.7;
          line-height: 1;
        }

        /* Credential */
        .loader-credential {
          margin-top: 10px;
          font-family: var(--font-inter, sans-serif);
          font-size: clamp(10px, 1.8vw, 12px);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(194,151,78,0.65);
          opacity: 0;
          animation: riseIn 0.8s cubic-bezier(0.4,0,0.2,1) 1.0s forwards;
        }

        /* Progress bar */
        .loader-bar-track {
          position: absolute;
          bottom: 48px;
          left: 50%;
          transform: translateX(-50%);
          width: min(200px, 50vw);
          height: 1px;
          background: rgba(194,151,78,0.15);
          border-radius: 1px;
          overflow: hidden;
          opacity: 0;
          animation: fadeUp 0.5s ease 1.1s forwards;
        }
        .loader-bar-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #c2974e, #e8c97a);
          border-radius: 1px;
          animation: barFill 1.3s cubic-bezier(0.4,0,0.2,1) 1.2s forwards;
        }

        @keyframes riseIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes barFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}