export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen font-sans text-gray-300 bg-zinc-900">
      <div className="flex flex-col items-center w-5/6">
        <h1 className="flex text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-300">
          Hello, I'm Julien.
        </h1>
        <hr className="w-4/6 h-1 my-4 bg-gradient-to-r from-blue-300 to-emerald-500"></hr>
        <div className="flex flex-col items-center w-4/6">
          <div className="flex flex-row justify-around w-full my-4">
            <div className="">
              <a href="https://github.com/jsenopati" target="_blank">
                <svg
                  className="w-12 h-12 transition duration-300 border-2 border-transparent hover:border-teal-200 rounded-3xl hover:animate-pulse hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" style={{ stopColor: "#9333EA" }} />
                      <stop offset="100%" style={{ stopColor: "#F9A8D4" }} />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient)"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>

            <div className="">
              <a href="mailto:jasenopati@gmail.com">
                <svg
                  className="w-12 h-12 transition duration-300 border-2 border-transparent hover:border-teal-200 rounded-3xl hover:animate-pulse hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <defs>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" style={{ stopColor: "#F9A8D4" }} />
                      <stop offset="100%" style={{ stopColor: "#D8B4FE" }} />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient2)"
                    d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"
                  />
                </svg>
              </a>
            </div>

            <div className="">
              <a
                href="https://www.linkedin.com/in/julien-senopati/"
                target="_blank"
              >
                <svg
                  className="w-12 h-12 transition duration-300 border-2 border-transparent hover:border-teal-200 rounded-3xl hover:animate-pulse hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id="gradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" style={{ stopColor: "#D8B4FE" }} />
                      <stop offset="100%" style={{ stopColor: "#DB2777" }} />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient3)"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="w-4/6 h-1 my-4 bg-gradient-to-r from-purple-300 to-pink-300"></hr>

        {/* //keep for later
        <div id="content" className="flex justify-center">
          <button hx-get="/about" hx-target="#content" className="">
            <svg
              className="w-12 h-12 transition duration-300 border-2 border-transparent hover:border-teal-200 rounded-3xl hover:animate-pulse hover:scale-125"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient5"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#10B981" }} />
                  <stop offset="100%" style={{ stopColor: "#93C5FD" }} />
                </linearGradient>
              </defs>
              <path
                fill="url(#gradient5)"
                d="M12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071C4.68342 13.0976 5.31658 13.0976 5.70711 12.7071L12 6.41421L18.2929 12.7071C18.6834 13.0976 19.3166 13.0976 19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289ZM12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 19.0976 19.3166 19.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L12.7071 11.2929Z"
              />
            </svg>
          </button>
        </div> */}

        <section className="flex flex-col w-4/6 items-center space-y-4 text-center">
          <p>
            I'm a full stack developer at
            <span className="font-bold border-2 border-transparent rounded-md hover:border-teal-200 hover:animate-pulse ml-1">
              <a
                href="https://www.s01ve.io/"
                target="_blank"
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"
              >
                s01ve Cyber Solutions
              </a>
            </span>
            , a cybersecurity/IT service and consultation company. Some of the
            projects I work on include a
            <span className="font-bold border-2 border-transparent rounded-md hover:border-teal-200 hover:animate-pulse ml-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.s01ve.aodAuth&pcampaignid=web_share"
                target="_blank"
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-300"
              >
                mobile app
              </a>
            </span>
            , and a
            <span className="font-bold border-2 border-transparent rounded-md hover:border-teal-200 hover:animate-pulse mx-1">
              <a
                href="https://www.authondemand.com/"
                target="_blank"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-500"
              >
                website
              </a>
            </span>
            powered by Next.js, with many more interesting projects to come.
          </p>
          <p>
            I also do web dev for
            <span className="font-bold border-2 border-transparent rounded-md hover:border-teal-200 hover:animate-pulse ml-1">
              <a
                href="https://treemansion.com/"
                target="_blank"
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"
              >
                Treemansion.com
              </a>
            </span>
            , an e-commerce platform and community for all things AI art,
            working primarily with Next.js and TypeScript.
          </p>

          <p>Right now, my interests are Go, React, and Svelte.</p>

          {/* <div className="mt-4">
          <a href="/" hx-boost="true">

            //keep this for later heheh
            <svg
              className="w-12 h-12 transition duration-300 border-2 border-transparent hover:border-teal-200 rounded-3xl hover:animate-pulse hover:scale-125"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient5"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#10B981" }} />
                  <stop offset="100%" style={{ stopColor: "#93C5FD" }} />
                </linearGradient>
              </defs>
              <path
                fill="url(#gradient5)"
                d="M12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071C4.68342 13.0976 5.31658 13.0976 5.70711 12.7071L12 6.41421L18.2929 12.7071C18.6834 13.0976 19.3166 13.0976 19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289ZM12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 19.0976 19.3166 19.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L12.7071 11.2929Z"
              />
            </svg>
          </a>
        </div> */}
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex items-end justify-center text-xs">
        Currently under construction. 🛠️
      </div>
    </main>
  );
}
