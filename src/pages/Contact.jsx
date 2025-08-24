import React from 'react'

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-lg px-10 py-8 flex flex-col items-center gap-6 w-[420px]">
                <h2 className="text-2xl font-bold text-amber-900 mb-2 tracking-wide">Willkommen auf meiner Kontaktseite</h2>
                <p className="text-amber-900 text-center">Fragen? Ideen? Anmerkungen? Dann schick mir gerne eine Nachricht – per Mail, Discord oder direkt über das Formular.</p>

                <form
                    className="flex flex-col gap-4 w-full"
                    onSubmit={e => {
                        e.preventDefault();
                        alert('Dies ist nur eine Demo – die Nachricht wird nicht versendet.');
                    }}
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-amber-900 font-medium">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="Dein Name"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-amber-900 font-medium">E-Mail</label>
                        <input
                            id="email"
                            type="email"
                            className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="deine@email.de"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-amber-900 font-medium">Nachricht</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="Deine Nachricht..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 bg-amber-600 text-white px-8 py-2 rounded-lg font-semibold shadow hover:bg-lime-700 transition-colors duration-200 text-lg"
                    >
                        Senden (Demo)
                    </button>
                </form>

                <div className="text-xs text-amber-700 mt-2 text-center">
                    Oder per Mail: <a href="mailto:deine@email.de" className="underline hover:text-lime-700">deine@email.de</a><br />
                    Discord: <span className="font-mono">deinDiscord#1234</span>
                </div>
            </div>
        </section>
    )
}
