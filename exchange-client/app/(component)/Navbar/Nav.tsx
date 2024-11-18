import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="sticky top-0 z-20 w-full bg-baseBackgroundL0">
      <div>
        <div className="relative flex h-14 w-full flex-col justify-center">
          <div className="grid grid-cols-3">
            <div className="flex items-center flex-row">
              <Link
                className="items-center text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent h-8 text-sm p-0 ml-[21px] mr-6 shrink-0"
                href="/"
              >
                <div className="flex flex-row h-[24px] items-center gap-2.5">
                  <svg
                    width="16.5"
                    height="24"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_803)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.54201 1.25805C7.12356 1.25805 7.66905 1.33601 8.1741 1.48059C7.67963 0.328169 6.65297 0 5.51038 0C4.36555 0 3.3371 0.329459 2.84375 1.48738C3.3451 1.33771 3.88824 1.25805 4.4678 1.25805H6.54201ZM4.33478 2.41504C1.57335 2.41504 0 4.58743 0 7.2672V10.02C0 10.288 0.223858 10.5 0.5 10.5H10.5C10.7761 10.5 11 10.288 11 10.02V7.2672C11 4.58743 9.17041 2.41504 6.40899 2.41504H4.33478ZM5.49609 7.29102C6.46259 7.29102 7.24609 6.50751 7.24609 5.54102C7.24609 4.57452 6.46259 3.79102 5.49609 3.79102C4.5296 3.79102 3.74609 4.57452 3.74609 5.54102C3.74609 6.50751 4.5296 7.29102 5.49609 7.29102ZM0 12.118C0 11.8501 0.223858 11.6328 0.5 11.6328H10.5C10.7761 11.6328 11 11.8501 11 12.118V15.0293C11 15.5653 10.5523 15.9998 10 15.9998H1C0.447715 15.9998 0 15.5653 0 15.0293V12.118Z"
                        fill="#E33E3F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_803">
                        <rect width="11" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className="translate-y-[1.6px]"
                    width="88.5"
                    height="18"
                    viewBox="0 0 118 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.18579 18.5463V0.878334H8.65615C9.87354 0.878334 10.917 1.08387 11.7866 1.49493C12.6561 1.906 13.3202 2.49889 13.7787 3.27359C14.2372 4.03248 14.4664 4.95739 14.4664 6.0483C14.4664 6.823 14.253 7.56608 13.8261 8.27754C13.3992 8.9732 12.6957 9.55818 11.7154 10.0325V8.23011C12.6482 8.59375 13.3676 9.02853 13.8735 9.53446C14.3795 10.0404 14.7273 10.5937 14.917 11.1945C15.1067 11.7795 15.2016 12.3961 15.2016 13.0443C15.2016 14.7835 14.6245 16.1353 13.4704 17.0997C12.3162 18.0641 10.7115 18.5463 8.65615 18.5463H1.18579ZM4.86168 15.3447H9.08302C9.82611 15.3447 10.419 15.1313 10.8617 14.7044C11.3044 14.2775 11.5257 13.7242 11.5257 13.0443C11.5257 12.3487 11.3044 11.7874 10.8617 11.3605C10.419 10.9337 9.82611 10.7202 9.08302 10.7202H4.86168V15.3447ZM4.86168 7.51865H8.91702C9.48619 7.51865 9.93678 7.36055 10.2688 7.04434C10.6166 6.71233 10.7905 6.27754 10.7905 5.73999C10.7905 5.20245 10.6166 4.77557 10.2688 4.45936C9.93678 4.12735 9.48619 3.96134 8.91702 3.96134H4.86168V7.51865Z"
                      fill="white"
                    ></path>
                    <path
                      d="M21.3067 18.8309C20.3738 18.8309 19.5675 18.6807 18.8877 18.3803C18.2078 18.0799 17.6861 17.653 17.3225 17.0997C16.9588 16.5305 16.777 15.8586 16.777 15.0839C16.777 14.3566 16.943 13.7163 17.275 13.1629C17.607 12.5937 18.113 12.1194 18.7928 11.74C19.4885 11.3605 20.3501 11.0918 21.3778 10.9337L25.3383 10.2934V12.902L22.0181 13.4949C21.5122 13.5898 21.1248 13.7558 20.8561 13.993C20.5873 14.2143 20.4529 14.5384 20.4529 14.9653C20.4529 15.3605 20.6031 15.6688 20.9035 15.8902C21.2039 16.1115 21.5754 16.2222 22.0181 16.2222C22.6031 16.2222 23.1169 16.0957 23.5596 15.8428C24.0023 15.5898 24.3422 15.2499 24.5794 14.823C24.8323 14.3803 24.9588 13.8981 24.9588 13.3764V10.0088C24.9588 9.51865 24.7612 9.10758 24.3659 8.77557C23.9865 8.44355 23.4648 8.27754 22.8007 8.27754C22.1683 8.27754 21.607 8.45146 21.1169 8.79928C20.6426 9.14711 20.2948 9.60561 20.0735 10.1748L17.2276 8.823C17.4806 8.09573 17.8837 7.47122 18.4371 6.94948C18.9904 6.42774 19.6545 6.02458 20.4292 5.73999C21.2039 5.45541 22.0497 5.31312 22.9667 5.31312C24.0576 5.31312 25.0221 5.51075 25.86 5.906C26.698 6.30126 27.3462 6.85462 27.8047 7.56608C28.279 8.26173 28.5161 9.07596 28.5161 10.0088V18.5463H25.196V16.4594L26.0023 16.3171C25.6229 16.8862 25.2039 17.3605 24.7454 17.74C24.2869 18.1036 23.7731 18.3724 23.2039 18.5463C22.6347 18.736 22.0023 18.8309 21.3067 18.8309Z"
                      fill="white"
                    ></path>
                    <path
                      d="M37.4808 18.8309C36.1843 18.8309 35.0143 18.5384 33.9709 17.9534C32.9432 17.3526 32.1211 16.5384 31.5045 15.5107C30.9037 14.4831 30.6033 13.3289 30.6033 12.0483C30.6033 10.7677 30.9037 9.62142 31.5045 8.60956C32.1053 7.58189 32.9274 6.77557 33.9709 6.19059C35.0143 5.60561 36.1843 5.31312 37.4808 5.31312C38.4452 5.31312 39.3385 5.47913 40.1606 5.81114C40.9827 6.14316 41.6863 6.60956 42.2713 7.21035C42.8562 7.79533 43.2752 8.49098 43.5282 9.29731L40.4452 10.6254C40.2238 9.97715 39.8444 9.46331 39.3068 9.08387C38.7851 8.70442 38.1764 8.5147 37.4808 8.5147C36.8641 8.5147 36.3108 8.6649 35.8207 8.96529C35.3464 9.26569 34.9669 9.68466 34.6823 10.2222C34.4136 10.7598 34.2792 11.3764 34.2792 12.072C34.2792 12.7677 34.4136 13.3843 34.6823 13.9218C34.9669 14.4594 35.3464 14.8783 35.8207 15.1787C36.3108 15.4791 36.8641 15.6293 37.4808 15.6293C38.1922 15.6293 38.8088 15.4396 39.3306 15.0602C39.8523 14.6807 40.2238 14.1669 40.4452 13.5187L43.5282 14.8704C43.291 15.6293 42.88 16.3092 42.295 16.91C41.71 17.5107 41.0064 17.9851 40.1843 18.3329C39.3622 18.6649 38.461 18.8309 37.4808 18.8309Z"
                      fill="white"
                    ></path>
                    <path
                      d="M45.6229 18.5463V0.59375H49.1802V12.0957L47.8522 11.6688L53.5676 5.5977H57.9549L53.2593 10.8151L57.9312 18.5463H53.8996L49.9865 11.9771L52.0498 11.4554L48.0893 15.7716L49.1802 13.7084V18.5463H45.6229Z"
                      fill="white"
                    ></path>
                    <path
                      d="M59.5187 23.2894V5.5977H62.8388V8.06411L62.5305 7.35264C62.9574 6.70442 63.5345 6.2064 64.2617 5.85857C65.0048 5.49493 65.8507 5.31312 66.7993 5.31312C68.0325 5.31312 69.1471 5.61351 70.1432 6.2143C71.1392 6.81509 71.9297 7.62932 72.5147 8.65699C73.0997 9.66885 73.3922 10.8072 73.3922 12.072C73.3922 13.321 73.0997 14.4594 72.5147 15.487C71.9455 16.5147 71.1629 17.3289 70.1669 17.9297C69.1708 18.5305 68.0404 18.8309 66.7756 18.8309C65.8902 18.8309 65.0681 18.6728 64.3092 18.3566C63.5661 18.0246 62.9653 17.5424 62.5068 16.91L63.076 16.1748V23.2894H59.5187ZM66.3487 15.6293C67.0127 15.6293 67.5977 15.4791 68.1036 15.1787C68.6096 14.8783 69.0048 14.4594 69.2894 13.9218C69.574 13.3843 69.7163 12.7677 69.7163 12.072C69.7163 11.3764 69.574 10.7677 69.2894 10.2459C69.0048 9.70837 68.6096 9.2894 68.1036 8.98901C67.5977 8.6728 67.0127 8.5147 66.3487 8.5147C65.7163 8.5147 65.1471 8.6649 64.6412 8.96529C64.1511 9.26569 63.7637 9.68466 63.4791 10.2222C63.2104 10.7598 63.076 11.3764 63.076 12.072C63.076 12.7677 63.2104 13.3843 63.4791 13.9218C63.7637 14.4594 64.1511 14.8783 64.6412 15.1787C65.1471 15.4791 65.7163 15.6293 66.3487 15.6293Z"
                      fill="white"
                    ></path>
                    <path
                      d="M79.4835 18.8309C78.5507 18.8309 77.7444 18.6807 77.0646 18.3803C76.3847 18.0799 75.863 17.653 75.4993 17.0997C75.1357 16.5305 74.9539 15.8586 74.9539 15.0839C74.9539 14.3566 75.1199 13.7163 75.4519 13.1629C75.7839 12.5937 76.2898 12.1194 76.9697 11.74C77.6653 11.3605 78.527 11.0918 79.5547 10.9337L83.5151 10.2934V12.902L80.195 13.4949C79.6891 13.5898 79.3017 13.7558 79.0329 13.993C78.7642 14.2143 78.6298 14.5384 78.6298 14.9653C78.6298 15.3605 78.78 15.6688 79.0804 15.8902C79.3808 16.1115 79.7523 16.2222 80.195 16.2222C80.78 16.2222 81.2938 16.0957 81.7365 15.8428C82.1792 15.5898 82.5191 15.2499 82.7562 14.823C83.0092 14.3803 83.1357 13.8981 83.1357 13.3764V10.0088C83.1357 9.51865 82.9381 9.10758 82.5428 8.77557C82.1634 8.44355 81.6416 8.27754 80.9776 8.27754C80.3452 8.27754 79.7839 8.45146 79.2938 8.79928C78.8195 9.14711 78.4717 9.60561 78.2503 10.1748L75.4045 8.823C75.6574 8.09573 76.0606 7.47122 76.614 6.94948C77.1673 6.42774 77.8313 6.02458 78.606 5.73999C79.3808 5.45541 80.2266 5.31312 81.1436 5.31312C82.2345 5.31312 83.1989 5.51075 84.0369 5.906C84.8748 6.30126 85.523 6.85462 85.9815 7.56608C86.4559 8.26173 86.693 9.07596 86.693 10.0088V18.5463H83.3729V16.4594L84.1792 16.3171C83.7997 16.8862 83.3808 17.3605 82.9223 17.74C82.4638 18.1036 81.9499 18.3724 81.3808 18.5463C80.8116 18.736 80.1792 18.8309 79.4835 18.8309Z"
                      fill="white"
                    ></path>
                    <path
                      d="M95.6576 18.8309C94.3612 18.8309 93.1912 18.5384 92.1477 17.9534C91.1201 17.3526 90.2979 16.5384 89.6813 15.5107C89.0805 14.4831 88.7802 13.3289 88.7802 12.0483C88.7802 10.7677 89.0805 9.62142 89.6813 8.60956C90.2821 7.58189 91.1043 6.77557 92.1477 6.19059C93.1912 5.60561 94.3612 5.31312 95.6576 5.31312C96.622 5.31312 97.5153 5.47913 98.3375 5.81114C99.1596 6.14316 99.8632 6.60956 100.448 7.21035C101.033 7.79533 101.452 8.49098 101.705 9.29731L98.622 10.6254C98.4007 9.97715 98.0213 9.46331 97.4837 9.08387C96.962 8.70442 96.3533 8.5147 95.6576 8.5147C95.041 8.5147 94.4877 8.6649 93.9975 8.96529C93.5232 9.26569 93.1438 9.68466 92.8592 10.2222C92.5904 10.7598 92.456 11.3764 92.456 12.072C92.456 12.7677 92.5904 13.3843 92.8592 13.9218C93.1438 14.4594 93.5232 14.8783 93.9975 15.1787C94.4877 15.4791 95.041 15.6293 95.6576 15.6293C96.3691 15.6293 96.9857 15.4396 97.5074 15.0602C98.0292 14.6807 98.4007 14.1669 98.622 13.5187L101.705 14.8704C101.468 15.6293 101.057 16.3092 100.472 16.91C99.8869 17.5107 99.1833 17.9851 98.3612 18.3329C97.539 18.6649 96.6379 18.8309 95.6576 18.8309Z"
                      fill="white"
                    ></path>
                    <path
                      d="M103.8 18.5463V0.59375H107.357V12.0957L106.029 11.6688L111.744 5.5977H116.132L111.436 10.8151L116.108 18.5463H112.076L108.163 11.9771L110.227 11.4554L106.266 15.7716L107.357 13.7084V18.5463H103.8Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </Link>
              <div className="mx-4 flex flex-row items-center justify-center">
                <Link
                  className="items-center text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent h-8 text-sm p-0 text-baseTextMedEmphasis"
                  href="/"
                >
                  Markets
                </Link>
              </div>
              <div className="mx-4 flex flex-row items-center justify-center">
                <Link
                  className="items-center text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent h-8 text-sm p-0 text-baseTextHighEmphasis"
                  href="/trade/USDT_USDC"
                >
                  Spot
                </Link>
              </div>
              <div className="mx-4 flex flex-row items-center justify-center">
                <div data-headlessui-state="">
                  <button
                    className="inline-flex py-2 text-sm font-medium text-baseTextMedEmphasis hover:opacity-90"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:Rrpf96:"
                  >
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevron-down my-auto ml-0.5 transition-all duration-150 ui-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden justify-self-center xl:inline-flex">
              <div className="flex items-center justify-between flex-row w-[340px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-baseBackgroundL2 px-1 ring-0 focus-within:ring-2 focus-within:ring-accentBlue">
                <div className="flex items-center flex-row flex-1">
                  <div className="mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-search h-4 w-4 text-baseIcon"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                  <input
                    aria-label="Search markets"
                    type="text"
                    aria-autocomplete="list"
                    autoComplete="off"
                    placeholder="Search markets"
                    id="react-aria-:R2f96H2:"
                    role="combobox"
                    aria-expanded="false"
                    autoCorrect="off"
                    spellCheck="false"
                    className="h-8 w-full border-0 bg-baseBackgroundL2 p-0 text-sm font-normal text-baseTextHighEmphasis placeholder-baseTextLowEmphasis outline-none focus:ring-0"
                    value=""
                  />
                </div>
                <div className="mx-1 select-none rounded-lg border border-baseBorderMed bg-baseBackgroundL2 px-3 text-baseIcon">
                  /
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-row justify-self-end animate-in fade-in xl:col-span-1">
              <Link
                className="my-auto ml-10 text-nowrap rounded-lg bg-greenText/[16%] px-3 py-1.5 text-sm font-semibold text-greenText hover:opacity-90"
                href="/signup"
              >
                Sign up
              </Link>
              <Link
                className="my-auto ml-4 mr-4 text-nowrap rounded-lg bg-accentBlue/[16%] px-3 py-1.5 text-sm font-semibold text-accentBlue hover:opacity-90"
                href="/login"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
