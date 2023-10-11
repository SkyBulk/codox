import React from 'react'

export default function SiteFooter() {
    return (
        <div className='md:container md:max-w-6xl px-4'>
            <div className="fixed bottom-8 select-none">
                <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
                    Built by{" "}
                    <a
                        href="https://twitter.com/sujjeeee"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold transition-colors hover:text-foreground"
                    >
                        Sujjeee
                    </a>
                    .
                </div>
            </div>
        </div>
    )
}
