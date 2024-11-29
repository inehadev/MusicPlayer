import React from "react";
import { Link, Links } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen  ">
        <div className=" ml-[-40px] ">
          <div className="flex  w-[231px] h-[50px]    ">
            <svg
              width="35"
              height="35"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M48 20.84V41.072C46.4749 40.1915 44.7018 39.8388 42.9558 40.0686C41.2098 40.2985 39.5884 41.0981 38.3431 42.3434C37.0979 43.5887 36.2983 45.2101 36.0684 46.9561C35.8386 48.7021 36.1913 50.4752 37.0719 52.0003C37.9524 53.5254 39.3116 54.7174 40.9387 55.3913C42.5657 56.0652 44.3696 56.1834 46.0707 55.7276C47.7718 55.2717 49.2749 54.2673 50.3469 52.8702C51.419 51.473 52.0001 49.7611 52 48V7.704C52.0006 7.19055 51.8777 6.68449 51.6415 6.22856C51.4054 5.77263 51.063 5.38022 50.6433 5.08446C50.2236 4.7887 49.7389 4.59828 49.2301 4.52927C48.7213 4.46027 48.2033 4.51471 47.72 4.688L22.12 13.832C21.4994 14.0545 20.9627 14.4633 20.5832 15.0024C20.2037 15.5415 20.0001 16.1847 20 16.844V45.068C18.475 44.1875 16.7021 43.8348 14.9563 44.0646C13.2104 44.2943 11.5891 45.0937 10.3438 46.3387C9.09853 47.5837 8.29879 49.2048 8.06864 50.9506C7.83848 52.6964 8.19077 54.4694 9.07086 55.9946C9.95095 57.5198 11.3097 58.712 12.9364 59.3863C14.563 60.0607 16.3667 60.1795 18.0678 59.7243C19.7689 59.2692 21.2723 58.2655 22.3448 56.8689C23.4174 55.4724 23.9992 53.7609 24 52V29.412L48 20.844V20.84Z"
                fill="url(#paint0_linear_1_8)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_8"
                  x1="30"
                  y1="4.50024"
                  x2="69.8199"
                  y2="24.4789"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF5353" />
                  <stop offset="1" stop-color="#E91E1E" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="170"
              height="20"
              viewBox="0 0 227 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M9.268 2.872C11.908 2.872 14.224 3.388 16.216 4.42C18.232 5.452 19.78 6.928 20.86 8.848C21.964 10.744 22.516 12.952 22.516 15.472C22.516 17.992 21.964 20.2 20.86 22.096C19.78 23.968 18.232 25.42 16.216 26.452C14.224 27.484 11.908 28 9.268 28H0.484V2.872H9.268ZM9.088 23.716C11.728 23.716 13.768 22.996 15.208 21.556C16.648 20.116 17.368 18.088 17.368 15.472C17.368 12.856 16.648 10.816 15.208 9.352C13.768 7.864 11.728 7.12 9.088 7.12H5.524V23.716H9.088ZM31.3287 11.152C31.9767 10.096 32.8167 9.268 33.8487 8.668C34.9047 8.068 36.1047 7.768 37.4487 7.768V13.06H36.1167C34.5327 13.06 33.3327 13.432 32.5167 14.176C31.7247 14.92 31.3287 16.216 31.3287 18.064V28H26.2887V8.056H31.3287V11.152ZM59.3834 17.596C59.3834 18.316 59.3354 18.964 59.2394 19.54H44.6594C44.7794 20.98 45.2834 22.108 46.1714 22.924C47.0594 23.74 48.1514 24.148 49.4474 24.148C51.3194 24.148 52.6514 23.344 53.4434 21.736H58.8794C58.3034 23.656 57.1994 25.24 55.5674 26.488C53.9354 27.712 51.9314 28.324 49.5554 28.324C47.6354 28.324 45.9074 27.904 44.3714 27.064C42.8594 26.2 41.6714 24.988 40.8074 23.428C39.9674 21.868 39.5474 20.068 39.5474 18.028C39.5474 15.964 39.9674 14.152 40.8074 12.592C41.6474 11.032 42.8234 9.832 44.3354 8.992C45.8474 8.152 47.5874 7.732 49.5554 7.732C51.4514 7.732 53.1434 8.14 54.6314 8.956C56.1434 9.772 57.3074 10.936 58.1234 12.448C58.9634 13.936 59.3834 15.652 59.3834 17.596ZM54.1634 16.156C54.1394 14.86 53.6714 13.828 52.7594 13.06C51.8474 12.268 50.7314 11.872 49.4114 11.872C48.1634 11.872 47.1074 12.256 46.2434 13.024C45.4034 13.768 44.8874 14.812 44.6954 16.156H54.1634ZM61.7661 17.956C61.7661 15.94 62.1621 14.152 62.9541 12.592C63.7701 11.032 64.8621 9.832 66.2301 8.992C67.6221 8.152 69.1701 7.732 70.8741 7.732C72.3621 7.732 73.6581 8.032 74.7621 8.632C75.8901 9.232 76.7901 9.988 77.4621 10.9V8.056H82.5381V28H77.4621V25.084C76.8141 26.02 75.9141 26.8 74.7621 27.424C73.6341 28.024 72.3261 28.324 70.8381 28.324C69.1581 28.324 67.6221 27.892 66.2301 27.028C64.8621 26.164 63.7701 24.952 62.9541 23.392C62.1621 21.808 61.7661 19.996 61.7661 17.956ZM77.4621 18.028C77.4621 16.804 77.2221 15.76 76.7421 14.896C76.2621 14.008 75.6141 13.336 74.7981 12.88C73.9821 12.4 73.1061 12.16 72.1701 12.16C71.2341 12.16 70.3701 12.388 69.5781 12.844C68.7861 13.3 68.1381 13.972 67.6341 14.86C67.1541 15.724 66.9141 16.756 66.9141 17.956C66.9141 19.156 67.1541 20.212 67.6341 21.124C68.1381 22.012 68.7861 22.696 69.5781 23.176C70.3941 23.656 71.2581 23.896 72.1701 23.896C73.1061 23.896 73.9821 23.668 74.7981 23.212C75.6141 22.732 76.2621 22.06 76.7421 21.196C77.2221 20.308 77.4621 19.252 77.4621 18.028ZM112.229 7.768C114.677 7.768 116.645 8.524 118.133 10.036C119.645 11.524 120.401 13.612 120.401 16.3V28H115.361V16.984C115.361 15.424 114.965 14.236 114.173 13.42C113.381 12.58 112.301 12.16 110.933 12.16C109.565 12.16 108.473 12.58 107.657 13.42C106.865 14.236 106.469 15.424 106.469 16.984V28H101.429V16.984C101.429 15.424 101.033 14.236 100.241 13.42C99.4486 12.58 98.3686 12.16 97.0006 12.16C95.6086 12.16 94.5046 12.58 93.6886 13.42C92.8966 14.236 92.5006 15.424 92.5006 16.984V28H87.4606V8.056H92.5006V10.468C93.1486 9.628 93.9766 8.968 94.9846 8.488C96.0166 8.008 97.1446 7.768 98.3686 7.768C99.9286 7.768 101.321 8.104 102.545 8.776C103.769 9.424 104.717 10.36 105.389 11.584C106.037 10.432 106.973 9.508 108.197 8.812C109.445 8.116 110.789 7.768 112.229 7.768Z"
                fill="#FF5656"
              />
              <path
                d="M151.751 2.98V28H147.647V10.864L140.015 28H137.171L129.503 10.864V28H125.399V2.98H129.827L138.611 22.6L147.359 2.98H151.751ZM175.109 8.164V28H171.005V25.66C170.357 26.476 169.505 27.124 168.449 27.604C167.417 28.06 166.313 28.288 165.137 28.288C163.577 28.288 162.173 27.964 160.925 27.316C159.701 26.668 158.729 25.708 158.009 24.436C157.313 23.164 156.965 21.628 156.965 19.828V8.164H161.033V19.216C161.033 20.992 161.477 22.36 162.365 23.32C163.253 24.256 164.465 24.724 166.001 24.724C167.537 24.724 168.749 24.256 169.637 23.32C170.549 22.36 171.005 20.992 171.005 19.216V8.164H175.109ZM187.724 28.324C186.164 28.324 184.76 28.048 183.512 27.496C182.288 26.92 181.316 26.152 180.596 25.192C179.876 24.208 179.492 23.116 179.444 21.916H183.692C183.764 22.756 184.16 23.464 184.88 24.04C185.624 24.592 186.548 24.868 187.652 24.868C188.804 24.868 189.692 24.652 190.316 24.22C190.964 23.764 191.288 23.188 191.288 22.492C191.288 21.748 190.928 21.196 190.208 20.836C189.512 20.476 188.396 20.08 186.86 19.648C185.372 19.24 184.16 18.844 183.224 18.46C182.288 18.076 181.472 17.488 180.776 16.696C180.104 15.904 179.768 14.86 179.768 13.564C179.768 12.508 180.08 11.548 180.704 10.684C181.328 9.796 182.216 9.1 183.368 8.596C184.544 8.092 185.888 7.84 187.4 7.84C189.656 7.84 191.468 8.416 192.836 9.568C194.228 10.696 194.972 12.244 195.068 14.212H190.964C190.892 13.324 190.532 12.616 189.884 12.088C189.236 11.56 188.36 11.296 187.256 11.296C186.176 11.296 185.348 11.5 184.772 11.908C184.196 12.316 183.908 12.856 183.908 13.528C183.908 14.056 184.1 14.5 184.484 14.86C184.868 15.22 185.336 15.508 185.888 15.724C186.44 15.916 187.256 16.168 188.336 16.48C189.776 16.864 190.952 17.26 191.864 17.668C192.8 18.052 193.604 18.628 194.276 19.396C194.948 20.164 195.296 21.184 195.32 22.456C195.32 23.584 195.008 24.592 194.384 25.48C193.76 26.368 192.872 27.064 191.72 27.568C190.592 28.072 189.26 28.324 187.724 28.324ZM201.843 5.536C201.099 5.536 200.475 5.284 199.971 4.78C199.467 4.276 199.215 3.652 199.215 2.908C199.215 2.164 199.467 1.54 199.971 1.036C200.475 0.531999 201.099 0.279999 201.843 0.279999C202.563 0.279999 203.175 0.531999 203.679 1.036C204.183 1.54 204.435 2.164 204.435 2.908C204.435 3.652 204.183 4.276 203.679 4.78C203.175 5.284 202.563 5.536 201.843 5.536ZM203.859 8.164V28H199.755V8.164H203.859ZM207.879 18.064C207.879 16.024 208.287 14.236 209.103 12.7C209.943 11.14 211.095 9.94 212.559 9.1C214.023 8.26 215.703 7.84 217.599 7.84C219.999 7.84 221.979 8.416 223.539 9.568C225.123 10.696 226.191 12.316 226.743 14.428H222.315C221.955 13.444 221.379 12.676 220.587 12.124C219.795 11.572 218.799 11.296 217.599 11.296C215.919 11.296 214.575 11.896 213.567 13.096C212.583 14.272 212.091 15.928 212.091 18.064C212.091 20.2 212.583 21.868 213.567 23.068C214.575 24.268 215.919 24.868 217.599 24.868C219.975 24.868 221.547 23.824 222.315 21.736H226.743C226.167 23.752 225.087 25.36 223.503 26.56C221.919 27.736 219.951 28.324 217.599 28.324C215.703 28.324 214.023 27.904 212.559 27.064C211.095 26.2 209.943 25 209.103 23.464C208.287 21.904 207.879 20.104 207.879 18.064Z"
                fill="#F6F6F6"
              />
            </svg>
          </div>

          <div className="  flex-col mt-[40px]">
            <p className="ml-[-180px] text-sm ">MENU</p>
            <div className="flex gap-3 mt-3">
              <svg
                width="18"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8052 12.5432L14.1401 0.886513C14.0561 0.802356 13.9563 0.73559 13.8465 0.690035C13.7366 0.644481 13.6189 0.621033 13.5 0.621033C13.3811 0.621033 13.2634 0.644481 13.1536 0.690035C13.0437 0.73559 12.944 0.802356 12.86 0.886513L1.19484 12.5432C0.854993 12.883 0.662415 13.3446 0.662415 13.8261C0.662415 14.8258 1.47521 15.6386 2.47491 15.6386H3.70402V23.9562C3.70402 24.4575 4.109 24.8625 4.61027 24.8625H11.6875V18.5187H14.8594V24.8625H22.3898C22.891 24.8625 23.296 24.4575 23.296 23.9562V15.6386H24.5251C25.0066 15.6386 25.4682 15.4488 25.808 15.1061C26.5132 14.3981 26.5132 13.2512 25.8052 12.5432Z"
                  fill="url(#paint0_linear_1_18)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_18"
                    x1="13.4995"
                    y1="0.621033"
                    x2="33.5687"
                    y2="14.0717"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5353" />
                    <stop offset="1" stop-color="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>
              <p className=" text-sm">Home</p>
            </div>

            <div className="flex gap-3 mt-1">
              <svg
                width="18"
                height="25"
                viewBox="0 0 27 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6406 1.58514V8.83514C26.6406 9.19567 26.4974 9.54143 26.2425 9.79637C25.9875 10.0513 25.6418 10.1945 25.2812 10.1945C24.9207 10.1945 24.5749 10.0513 24.32 9.79637C24.0651 9.54143 23.9219 9.19567 23.9219 8.83514V4.8703L15.3691 13.423C15.2428 13.5498 15.0928 13.6503 14.9275 13.7189C14.7623 13.7875 14.5851 13.8229 14.4062 13.8229C14.2273 13.8229 14.0502 13.7875 13.8849 13.7189C13.7197 13.6503 13.5696 13.5498 13.4433 13.423L9.87498 9.85467L2.68162 17.048C2.4251 17.3012 2.07917 17.4432 1.71873 17.4432C1.35829 17.4432 1.01236 17.3012 0.75584 17.048C0.62911 16.9217 0.528557 16.7717 0.459946 16.6064C0.391336 16.4412 0.356018 16.2641 0.356018 16.0851C0.356018 15.9062 0.391336 15.7291 0.459946 15.5638C0.528557 15.3986 0.62911 15.2485 0.75584 15.1223L8.91209 6.966C9.03838 6.83927 9.18845 6.73872 9.35368 6.67011C9.51892 6.6015 9.69607 6.56618 9.87498 6.56618C10.0539 6.56618 10.231 6.6015 10.3963 6.67011C10.5615 6.73872 10.7116 6.83927 10.8379 6.966L14.4062 10.5344L21.9961 2.94452H18.0312C17.6707 2.94452 17.3249 2.8013 17.07 2.54637C16.8151 2.29144 16.6719 1.94567 16.6719 1.58514C16.6719 1.22462 16.8151 0.878853 17.07 0.623921C17.3249 0.368988 17.6707 0.225769 18.0312 0.225769H25.2812C25.6418 0.225769 25.9875 0.368988 26.2425 0.623921C26.4974 0.878853 26.6406 1.22462 26.6406 1.58514Z"
                  fill="url(#paint0_linear_1_19)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_19"
                    x1="13.4983"
                    y1="0.225769"
                    x2="28.8998"
                    y2="15.1047"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5353" />
                    <stop offset="1" stop-color="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>

              <p className=" text-sm">Trends</p>
            </div>

            <div className="flex gap-3 mt-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25002 20.6838C7.9156 20.6838 10.0834 18.516 10.0834 15.8504V3.59189L20.9584 7.54556V16.5235C20.2271 16.0878 19.3928 15.8555 18.5417 15.8504C15.8761 15.8504 13.7084 18.0182 13.7084 20.6838C13.7084 23.3493 15.8761 25.5171 18.5417 25.5171C21.2073 25.5171 23.375 23.3493 23.375 20.6838V6.69973C23.3752 6.45181 23.299 6.20987 23.1567 6.00684C23.0144 5.80381 22.813 5.64956 22.5799 5.5651L9.28827 0.731768C9.1058 0.665064 8.90993 0.643386 8.7173 0.668576C8.52466 0.693766 8.34095 0.765079 8.18177 0.876458C8.02259 0.987836 7.89264 1.13599 7.80297 1.30833C7.7133 1.48068 7.66654 1.67212 7.66669 1.86639V11.6901C6.93548 11.2545 6.10115 11.0221 5.25002 11.0171C2.58444 11.0171 0.416687 13.1848 0.416687 15.8504C0.416687 18.516 2.58444 20.6838 5.25002 20.6838Z"
                  fill="url(#paint0_linear_1_20)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_20"
                    x1="11.8959"
                    y1="0.658386"
                    x2="31.2818"
                    y2="11.9882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5353" />
                    <stop offset="1" stop-color="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>

              <p className=" text-sm">Library</p>
            </div>

            <div className="flex gap-3 mt-1">
              <svg
                width="20"
                height="22"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 0.053894C6.49356 0.053894 0.8125 5.73495 0.8125 12.7414C0.8125 19.7478 6.49356 25.4289 13.5 25.4289C20.5064 25.4289 26.1875 19.7478 26.1875 12.7414C26.1875 5.73495 20.5064 0.053894 13.5 0.053894ZM8.26924 18.1336C8.2126 18.1591 8.14463 18.1336 8.11914 18.0741C8.10781 18.0458 8.10781 18.0118 8.11914 17.9835L10.9144 11.5973L14.6555 15.3384L8.26924 18.1336ZM18.8922 7.51063L16.097 13.8969L12.3559 10.1558L18.7421 7.36053C18.7987 7.33505 18.8667 7.36053 18.8922 7.42001C18.9035 7.44833 18.9035 7.47948 18.8922 7.51063Z"
                  fill="url(#paint0_linear_1_21)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_21"
                    x1="13.5"
                    y1="0.053894"
                    x2="34.0256"
                    y2="13.0428"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5353" />
                    <stop offset="1" stop-color="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="text-sm">Discover</p>
            </div>
          </div>

          {/*---------------------------------------------------------------*/}

          <div className="  flex-col mt-[260px]">
            <p className="ml-[-180px] text-sm ">GENERAL</p>
            <div className="flex gap-3 mt-3">
              <svg
                width="18"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8052 12.5432L14.1401 0.886513C14.0561 0.802356 13.9563 0.73559 13.8465 0.690035C13.7366 0.644481 13.6189 0.621033 13.5 0.621033C13.3811 0.621033 13.2634 0.644481 13.1536 0.690035C13.0437 0.73559 12.944 0.802356 12.86 0.886513L1.19484 12.5432C0.854993 12.883 0.662415 13.3446 0.662415 13.8261C0.662415 14.8258 1.47521 15.6386 2.47491 15.6386H3.70402V23.9562C3.70402 24.4575 4.109 24.8625 4.61027 24.8625H11.6875V18.5187H14.8594V24.8625H22.3898C22.891 24.8625 23.296 24.4575 23.296 23.9562V15.6386H24.5251C25.0066 15.6386 25.4682 15.4488 25.808 15.1061C26.5132 14.3981 26.5132 13.2512 25.8052 12.5432Z"
                  fill="url(#paint0_linear_1_18)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_18"
                    x1="13.4995"
                    y1="0.621033"
                    x2="33.5687"
                    y2="14.0717"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5353" />
                    <stop offset="1" stop-color="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>
              <p className=" text-sm">Settings</p>
            </div>

            <div className="flex gap-3 mt-1">
              <svg
                width="18"
                height="25"
                viewBox="0 0 27 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6406 1.58514V8.83514C26.6406 9.19567 26.4974 9.54143 26.2425 9.79637C25.9875 10.0513 25.6418 10.1945 25.2812 10.1945C24.9207 10.1945 24.5749 10.0513 24.32 9.79637C24.0651 9.54143 23.9219 9.19567 23.9219 8.83514V4.8703L15.3691 13.423C15.2428 13.5498 15.0928 13.6503 14.9275 13.7189C14.7623 13.7875 14.5851 13.8229 14.4062 13.8229C14.2273 13.8229 14.0502 13.7875 13.8849 13.7189C13.7197 13.6503 13.5696 13.5498 13.4433 13.423L9.87498 9.85467L2.68162 17.048C2.4251 17.3012 2.07917 17.4432 1.71873 17.4432C1.35829 17.4432 1.01236 17.3012 0.75584 17.048C0.62911 16.9217 0.528557 16.7717 0.459946 16.6064C0.391336 16.4412 0.356018 16.2641 0.356018 16.0851C0.356018 15.9062 0.391336 15.7291 0.459946 15.5638C0.528557 15.3986 0.62911 15.2485 0.75584 15.1223L8.91209 6.966C9.03838 6.83927 9.18845 6.73872 9.35368 6.67011C9.51892 6.6015 9.69607 6.56618 9.87498 6.56618C10.0539 6.56618 10.231 6.6015 10.3963 6.67011C10.5615 6.73872 10.7116 6.83927 10.8379 6.966L14.4062 10.5344L21.9961 2.94452H18.0312C17.6707 2.94452 17.3249 2.8013 17.07 2.54637C16.8151 2.29144 16.6719 1.94567 16.6719 1.58514C16.6719 1.22462 16.8151 0.878853 17.07 0.623921C17.3249 0.368988 17.6707 0.225769 18.0312 0.225769H25.2812C25.6418 0.225769 25.9875 0.368988 26.2425 0.623921C26.4974 0.878853 26.6406 1.22462 26.6406 1.58514Z"
                  fill="url(#paint0_linear_1_19)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_19"
                    x1="13.4983"
                    y1="0.225769"
                    x2="28.8998"
                    y2="15.1047"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5353" />
                    <stop offset="1" stop-color="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>

              <p className=" text-sm">Logout</p>
            </div>
          </div>
        </div>

        <div className="bg-custom-gradient  w-[700px]">
          <div className="flex ">
            <div className="flex">
            <p>Music</p>
            <p>Podcast</p>
            <p>Live</p>
            <p>Radio</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="[500px] bg-custom-gradient mt-[-50px]"></div>
      </div>
    </>
  );
};

export default Dashboard;
