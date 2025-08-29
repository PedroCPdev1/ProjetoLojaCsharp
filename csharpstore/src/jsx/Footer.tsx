import '../css/App.css';

function Footer() {
    return (
        <div>
            <footer>
                

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src="images/shopping-basket.png" className="h-8 me-3 invert" alt="Home Market logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home Market</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://react.dev/" className="hover:underline">React.JS</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium pt-5">
                      <li className="mb-4">
                          <a href="https://dotnet.microsoft.com/en-us/languages/csharp" className="hover:underline ">C#</a>
                      </li>
                      <li>
                          <a href="https://www.mysql.com/" className="hover:underline">MySql</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/PedroCPdev1" className="hover:underline">GitHub</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/pedrocpdev/" className="hover:underline">Linkedln</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>

            </footer>
        </div>

    )
}

export default Footer;