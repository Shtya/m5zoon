'use client';
import Feature from '@/components/pages/home/Feature';
import { useTranslations } from 'next-intl';
import FAQPage from '@/components/pages/home/FAQs';
import OurLocation from '@/components/pages/home/OurLocation';
import Image from 'next/image';
import Title from '@/components/helpers/Title';
import Button from '@/components/atoms/Button';

const page = () => {
    const t = useTranslations('about-us');

    const whyChooseUs = [
        { title : t("attention_to_detail") , desc : t("financial_security_description") , icon : <svg width="81" height="83" viewBox="0 0 81 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.827 28.2657C75.4546 44.8101 71.4446 63.9272 57.5483 71.1364C43.8264 78.2466 15.9718 75.5174 7.34419 58.973C-1.28344 42.4286 19.8069 30.437 27.6595 16.1698C38.6508 -3.68779 58.1993 11.7213 66.827 28.2657Z" fill="url(#paint0_linear_490_11700)"/><path d="M37.6125 48.936C38.0073 48.936 38.9033 48.7406 39.1247 48.3497C39.3201 48.0084 39.4282 47.5247 39.4503 46.8994C38.9206 47.2903 38.3195 47.4858 37.6467 47.4858C37.0997 47.4858 36.6006 47.3576 36.1492 47.102C35.6977 46.8463 35.3094 46.4781 34.9838 45.998C34.6582 45.5186 34.4052 44.923 34.2253 44.2121C34.045 43.5011 33.9551 42.691 33.9551 41.781C33.9551 40.8711 34.045 40.0943 34.2253 39.3868C34.4052 38.6794 34.6582 38.0825 34.9838 37.5953C35.3094 37.1088 35.6977 36.737 36.1492 36.4807C36.6006 36.225 37.0997 36.0969 37.6467 36.0969C38.1937 36.0969 38.6862 36.2229 39.1377 36.4757C39.5891 36.7278 39.9766 37.0982 40.3 37.5847C40.6235 38.0718 40.8751 38.6667 41.0555 39.3706C41.2358 40.0744 41.3257 40.8775 41.3257 41.7803V46.6537C41.3257 47.3647 41.2574 48.0239 41.1207 48.6315C40.9841 49.2391 40.783 49.7638 40.5184 50.2043C40.2537 50.6447 39.9268 50.9882 39.5385 51.2332C39.1498 51.4782 38.1163 51.605 37.6129 51.6121V48.9353L37.6125 48.936ZM38.3887 44.6284C38.6144 44.479 38.8043 44.2694 38.9586 43.9996C39.1126 43.7298 39.2319 43.4062 39.3167 43.0295C39.4014 42.6528 39.4438 42.2371 39.4438 41.7818C39.4438 41.3264 39.4014 40.8895 39.3167 40.5128C39.2319 40.1361 39.1126 39.816 38.9586 39.5533C38.8047 39.2905 38.6144 39.0859 38.3887 38.94C38.163 38.7941 37.9156 38.7212 37.6462 38.7212C37.3768 38.7212 37.1308 38.7956 36.9072 38.945C36.6837 39.0944 36.4925 39.3061 36.3343 39.5795C36.1756 39.8535 36.0519 40.1764 35.9632 40.5496C35.8742 40.9228 35.8296 41.3335 35.8296 41.781C35.8296 42.2286 35.8742 42.6521 35.9632 43.0288C36.0523 43.4055 36.1769 43.7291 36.3377 43.9989C36.4982 44.2694 36.6893 44.479 36.9107 44.6277C37.1321 44.7772 37.3751 44.8515 37.6402 44.8515C37.9053 44.8515 38.1634 44.7772 38.3891 44.6277L38.3887 44.6284Z" fill="white"/><path d="M45.3112 47.155C45.2895 47.6882 45.2264 48.1896 45.1222 48.6583C44.9877 49.2624 44.7858 49.785 44.5168 50.2261C44.2522 50.6666 43.9244 51.0115 43.5335 51.2607C43.1516 51.5022 42.7088 51.6268 42.2051 51.6339V49.011C42.5956 49.011 42.9017 48.8155 43.1231 48.4247C43.3445 48.0408 43.4552 47.4758 43.4552 46.7294V40.8427H42.8105V38.7204H45.3237V42.5698C45.3237 43.3162 45.4344 43.8848 45.6558 44.2757C45.8772 44.6666 46.1834 44.862 46.5738 44.862C46.7952 44.862 46.9851 44.9902 47.1438 45.2458C47.302 45.5015 47.3816 45.8109 47.3816 46.1735C47.3816 46.5361 47.3025 46.8455 47.1438 47.1012C46.9851 47.3568 46.7952 47.485 46.5738 47.485H46.5544C46.09 47.4779 45.6753 47.3674 45.3107 47.1543L45.3112 47.155Z" fill="white"/><path d="M51.0541 46.0672C50.7415 46.5148 50.3705 46.8603 49.9406 47.1018C49.4849 47.3574 48.9854 47.4856 48.4431 47.4856H46.5742V44.8521H48.4431C48.7164 44.8521 48.9642 44.7777 49.1856 44.6283C49.4113 44.4789 49.6025 44.2693 49.7586 43.9995C49.9147 43.7297 50.034 43.4061 50.1166 43.0293C50.2035 42.6526 50.2468 42.2369 50.2468 41.7816C50.2468 41.3263 50.2035 40.8894 50.1166 40.5126C50.034 40.1359 49.9147 39.8158 49.7586 39.5531C49.6025 39.2904 49.4113 39.0836 49.1856 38.9349C48.9642 38.7926 48.7169 38.7218 48.4431 38.7218V39.3895H46.5742V36.7369C46.6957 36.6448 46.8216 36.5591 46.9517 36.4812C47.4032 36.2256 47.9 36.0974 48.4427 36.0974C48.9854 36.0974 49.4844 36.222 49.9402 36.4706C50.3916 36.7262 50.7778 37.0966 51.0991 37.5795C51.4204 38.0703 51.672 38.6672 51.8545 39.3711C52.0327 40.075 52.1213 40.878 52.1213 41.7809V42.5698C52.1213 43.3161 52.232 43.8848 52.4534 44.2756C52.6748 44.6595 52.9831 44.8514 53.3779 44.8514C53.5993 44.8514 53.7883 44.9809 53.9444 45.2408C54.1005 45.5007 54.1788 45.8116 54.1788 46.1741C54.1788 46.5367 54.1005 46.8462 53.9444 47.1018C53.7883 47.3574 53.5993 47.4856 53.3779 47.4856H53.3585C52.8638 47.4785 52.4275 47.3539 52.0495 47.1124C51.6543 46.8639 51.3244 46.519 51.0597 46.0778L51.0532 46.0672H51.0541Z" fill="white"/><path d="M54.6285 41.7809C54.6285 40.8922 54.7197 40.0962 54.9018 39.3924C55.0799 38.6885 55.3316 38.0915 55.6572 37.6008C55.9872 37.1171 56.3776 36.7439 56.8291 36.4812C57.2805 36.2256 57.7774 36.0974 58.3201 36.0974C58.8628 36.0974 59.3596 36.2256 59.8111 36.4812C60.2668 36.7305 60.6552 37.0994 60.9765 37.5902C61.2977 38.0738 61.5494 38.6672 61.7319 39.3711C61.9101 40.0821 61.9987 40.8851 61.9987 41.7809C61.9987 42.6767 61.9096 43.5017 61.7319 44.2119C61.5494 44.9229 61.2977 45.5198 60.9765 46.0035C60.6552 46.4801 60.2668 46.8462 59.8111 47.1018C59.3596 47.3574 58.8623 47.4856 58.3201 47.4856C57.7778 47.4856 57.2805 47.3574 56.8291 47.1018C56.3949 46.8603 56.0196 46.5155 55.7026 46.0672L55.6961 46.0778C55.4267 46.519 55.0972 46.8632 54.7063 47.1124C54.3245 47.3539 53.8817 47.4785 53.3779 47.4856V44.8627C53.7684 44.8627 54.0746 44.6672 54.296 44.2764C54.5174 43.8925 54.6281 43.3275 54.6281 42.5811V41.7816L54.6285 41.7809ZM59.066 44.6283C59.2896 44.4789 59.4794 44.2693 59.6359 43.9995C59.792 43.7297 59.9127 43.4061 59.9974 43.0293C60.0822 42.6526 60.1246 42.2369 60.1246 41.7816C60.1246 41.3263 60.0813 40.8986 59.9944 40.5183C59.9075 40.138 59.7869 39.8165 59.6329 39.5531C59.4785 39.2904 59.29 39.0857 59.0664 38.9399C58.8429 38.794 58.5942 38.721 58.3209 38.721C58.0477 38.721 57.8107 38.7954 57.585 38.9448C57.3592 39.0942 57.1681 39.3074 57.012 39.5843C56.8559 39.8618 56.7331 40.1848 56.644 40.5544C56.5549 40.924 56.5104 41.3326 56.5104 41.7809C56.5104 42.2291 56.5549 42.6519 56.644 43.0286C56.7331 43.4053 56.8576 43.729 57.0185 43.9988C57.1789 44.2693 57.3701 44.4789 57.5915 44.6276C57.8129 44.7763 58.0559 44.8514 58.3209 44.8514C58.586 44.8514 58.8429 44.777 59.0664 44.6276L59.066 44.6283Z" fill="white"/><path d="M27.1218 51.8465C27.1278 51.8465 27.1343 51.8465 27.1404 51.8479L27.1516 51.8493H27.1629C27.1629 51.8493 27.1672 51.8486 27.1693 51.8486C27.2545 51.8486 27.3505 51.9477 27.4028 52.0901C27.4258 52.1531 27.4586 52.277 27.4188 52.4002L27.4119 52.4222L27.4072 52.4455C27.37 52.6318 27.2554 52.716 27.1642 52.716C27.1192 52.716 27.0543 52.6976 27.0003 52.6084L26.9903 52.5921L26.9791 52.5787C26.8913 52.4746 26.8922 52.277 26.9194 52.1396C26.9462 52.0044 27.0154 51.8465 27.1222 51.8465M27.1222 51.5632C26.759 51.5632 26.586 52.4618 26.8779 52.8081C26.9575 52.9391 27.0612 52.9993 27.1646 52.9993C27.3388 52.9993 27.5131 52.8279 27.5719 52.5326C27.7133 52.0964 27.4465 51.5653 27.1698 51.5653C27.1654 51.5653 27.1616 51.5653 27.1572 51.5653C27.1456 51.5632 27.1339 51.5625 27.1222 51.5625V51.5632Z" fill="#FBB03B"/><path d="M28.9712 51.8443C29.046 51.8443 29.1252 51.8988 29.1779 51.9866C29.2047 52.0319 29.2367 52.1063 29.2354 52.2069V52.2316L29.2376 52.2564C29.2471 52.3541 29.2246 52.4625 29.1766 52.5545C29.1247 52.6544 29.0503 52.716 28.9833 52.716C28.9725 52.716 28.9621 52.7146 28.9517 52.7118L28.9435 52.7096L28.9353 52.7082C28.8108 52.6919 28.7433 52.5149 28.7234 52.369C28.7139 52.2989 28.6932 52.061 28.8259 51.9356L28.838 51.9243L28.8488 51.9101C28.8895 51.8556 28.9379 51.8443 28.9712 51.8443ZM28.9712 51.561C28.8886 51.561 28.8069 51.6007 28.7399 51.6899C28.3918 52.0178 28.5384 52.9398 28.921 52.9908C28.9418 52.9971 28.9626 53 28.9833 53C29.222 53 29.4464 52.6091 29.4084 52.2132C29.4131 51.8351 29.1879 51.5617 28.9712 51.5617V51.561Z" fill="#FBB03B"/><path d="M43.9225 35.3179C44.4068 34.6742 45.2708 35.3179 45.2574 36.3617C45.3395 37.22 44.8042 38.0676 44.2844 37.9146C43.5203 37.8127 43.2272 35.9722 43.9225 35.3179Z" fill="white"/><path d="M48.3297 32.4697C48.814 31.826 49.678 32.4697 49.6646 33.5135C49.7468 34.3718 49.2114 35.2194 48.6917 35.0664C47.9276 34.9645 47.6344 33.124 48.3297 32.4697Z" fill="white"/><path d="M28.554 38.4293C28.647 39.1091 28.9704 39.602 29.3596 39.6572C29.4037 39.67 29.4495 39.6763 29.4945 39.6763C29.7553 39.6763 30.0225 39.4632 30.2089 39.1063C30.3853 38.7685 30.4657 38.3493 30.4303 37.9534C30.4324 37.61 30.3481 37.2779 30.1916 37.0166C30.0056 36.7057 29.7358 36.5195 29.4703 36.5195C29.277 36.5195 29.1006 36.6172 28.9592 36.8013C28.6214 37.1249 28.4627 37.763 28.5535 38.43L28.554 38.4293Z" fill="white"/><path d="M33.7034 33.1331C33.1901 33.1331 32.6149 33.2861 32.1397 33.7329C31.3514 34.4092 30.8204 35.7879 30.7473 37.2318C30.6297 39.5155 30.8161 41.8184 30.6608 44.0985C30.4987 46.492 28.7884 48.1901 27.4272 47.2412C26.4633 46.6882 25.7814 45.0666 25.8346 43.3932C25.819 41.7242 26.5541 40.1854 27.5067 39.6727C27.8657 39.5176 28.2371 39.5183 28.6068 39.5268C28.3975 39.2889 28.241 38.9129 28.1792 38.4604C28.0801 37.7353 28.2531 37.0399 28.6202 36.683C28.6328 36.6667 28.6462 36.6518 28.6596 36.6369C28.1558 36.6129 27.6481 36.6093 27.1625 36.8543C25.4856 37.5816 24.1421 40.1712 24.0889 43.037C23.989 44.954 24.4422 46.885 25.2417 48.2779C26.2168 49.9293 27.7204 50.7146 29.0972 50.2274C30.6652 49.7254 32.0044 47.6194 32.3378 45.0517C32.5756 42.4805 32.2357 39.8434 32.5177 37.2792C32.6331 36.3516 33.1844 35.8169 33.7124 35.8169L34.4562 35.7801V33.1218L33.7038 33.1331H33.7034Z" fill="#F9A51A"/><path d="M24.1052 40.0375C23.2486 39.9016 22.0494 39.8647 20.8711 40.3441C20.8711 40.3441 22.5329 40.1452 24.0148 40.393C24.0308 40.2655 24.0606 40.143 24.1056 40.0368L24.1052 40.0375Z" fill="#F9A51A"/><path d="M23.4981 42.7588C22.6048 42.6526 21.432 42.659 20.2783 43.098C20.2783 43.098 21.9207 42.9146 23.4566 43.12C23.4575 42.996 23.4713 42.8728 23.4986 42.7588H23.4981Z" fill="#F9A51A"/><path d="M23.4853 45.4803C22.5305 45.3649 21.2549 45.3599 20 45.8103C20 45.8103 21.833 45.617 23.4948 45.8499C23.4784 45.7289 23.4754 45.6035 23.4853 45.4803Z" fill="#F9A51A"/><path d="M48.1157 49.4202H48.3176L48.5701 50.5723C48.6017 50.7196 48.632 50.8718 48.6635 51.022H48.6718C48.7033 50.8718 48.731 50.7203 48.763 50.5723L49.0125 49.4202H49.2145V51.5771H49.0588V50.3896C49.0588 50.2019 49.0718 49.9428 49.08 49.7516H49.0718L48.9671 50.2437L48.7189 51.359H48.6078L48.3583 50.2437L48.254 49.7516H48.2458C48.2545 49.9421 48.267 50.2012 48.267 50.3896V51.5771H48.1152V49.4202H48.1157Z" fill="#F9A51A"/><path d="M50.6274 51.3285L50.7087 51.1521C50.7848 51.2761 50.8808 51.3908 51.0313 51.3908C51.1817 51.3908 51.311 51.2059 51.311 50.9135C51.311 50.621 51.2034 50.4532 51.0395 50.4532C50.9508 50.4532 50.8959 50.4978 50.8198 50.5807L50.732 50.4893L50.7744 49.4802H51.4148V49.7125H50.9193L50.8855 50.3349C50.9448 50.2818 51.0032 50.2478 51.0819 50.2478C51.3002 50.2478 51.4784 50.4518 51.4784 50.9043C51.4784 51.3568 51.2695 51.6152 51.0477 51.6152C50.8414 51.6152 50.716 51.4736 50.627 51.3277L50.6274 51.3285Z" fill="#F9A51A"/><path d="M52.8496 51.4136L53.5432 49.6524H52.9119V49.4202H53.7503V49.583L53.0567 51.3442H53.7568V51.5764H52.8496V51.4136Z" fill="#F9A51A"/><path d="M55.0898 50.4907C55.0898 49.8003 55.3221 49.3804 55.6529 49.3804C55.9837 49.3804 56.2159 49.801 56.2159 50.4907C56.2159 51.1804 55.9837 51.6159 55.6529 51.6159C55.3221 51.6159 55.0898 51.1812 55.0898 50.4907ZM56.0425 50.4907C56.0425 49.9533 55.8877 49.6218 55.6529 49.6218C55.4181 49.6218 55.2628 49.9533 55.2628 50.4907C55.2628 51.0282 55.4176 51.3752 55.6529 51.3752C55.8881 51.3752 56.0425 51.0282 56.0425 50.4907Z" fill="#F9A51A"/><path d="M57.6826 49.4202H57.8556L58.3321 50.7762L58.4744 51.2231H58.4826C58.4744 51.0057 58.4614 50.7621 58.4614 50.5369V49.4209H58.6205V51.5778H58.4476L57.971 50.2211L57.8288 49.7756H57.8206C57.8292 49.9938 57.8417 50.2239 57.8417 50.4491V51.5778H57.6826V49.4209V49.4202Z" fill="#F9A51A"/><defs><linearGradient id="paint0_linear_490_11700" x1="49.5259" y1="8.62003" x2="31.6758" y2="74.3799" gradientUnits="userSpaceOnUse"><stop stop-color="#0B3B72"/><stop offset="1" stop-color="#09396F"/></linearGradient></defs></svg>  },
        { title : t("trust_and_security")  , desc : t("technical_support_description") , icon : <svg width="81" height="83" viewBox="0 0 81 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.827 28.2657C75.4546 44.8101 71.4446 63.9272 57.5483 71.1364C43.8264 78.2466 15.9718 75.5174 7.34419 58.973C-1.28344 42.4286 19.8069 30.437 27.6595 16.1698C38.6508 -3.68778 58.1993 11.7213 66.827 28.2657Z" fill="white"/><path d="M37.6125 48.936C38.0073 48.936 38.9033 48.7406 39.1247 48.3497C39.3201 48.0084 39.4282 47.5247 39.4503 46.8994C38.9206 47.2903 38.3195 47.4858 37.6467 47.4858C37.0997 47.4858 36.6006 47.3576 36.1492 47.102C35.6977 46.8463 35.3094 46.4781 34.9838 45.998C34.6582 45.5186 34.4052 44.923 34.2253 44.2121C34.045 43.5011 33.9551 42.691 33.9551 41.781C33.9551 40.8711 34.045 40.0943 34.2253 39.3868C34.4052 38.6794 34.6582 38.0825 34.9838 37.5953C35.3094 37.1088 35.6977 36.737 36.1492 36.4807C36.6006 36.225 37.0997 36.0969 37.6467 36.0969C38.1937 36.0969 38.6862 36.2229 39.1377 36.4757C39.5891 36.7278 39.9766 37.0982 40.3 37.5847C40.6235 38.0718 40.8751 38.6667 41.0555 39.3706C41.2358 40.0744 41.3257 40.8775 41.3257 41.7803V46.6537C41.3257 47.3647 41.2574 48.0239 41.1207 48.6315C40.9841 49.2391 40.783 49.7638 40.5184 50.2043C40.2537 50.6447 39.9268 50.9882 39.5385 51.2332C39.1498 51.4782 38.1163 51.605 37.6129 51.6121V48.9353L37.6125 48.936ZM38.3887 44.6284C38.6144 44.479 38.8043 44.2694 38.9586 43.9996C39.1126 43.7298 39.2319 43.4062 39.3167 43.0295C39.4014 42.6528 39.4438 42.2371 39.4438 41.7818C39.4438 41.3264 39.4014 40.8895 39.3167 40.5128C39.2319 40.1361 39.1126 39.816 38.9586 39.5533C38.8047 39.2905 38.6144 39.0859 38.3887 38.94C38.163 38.7941 37.9156 38.7212 37.6462 38.7212C37.3768 38.7212 37.1308 38.7956 36.9072 38.945C36.6837 39.0944 36.4925 39.3061 36.3343 39.5795C36.1756 39.8535 36.0519 40.1764 35.9632 40.5496C35.8742 40.9228 35.8296 41.3335 35.8296 41.781C35.8296 42.2286 35.8742 42.6521 35.9632 43.0288C36.0523 43.4055 36.1769 43.7291 36.3377 43.9989C36.4982 44.2694 36.6893 44.479 36.9107 44.6277C37.1321 44.7772 37.3751 44.8515 37.6402 44.8515C37.9053 44.8515 38.1634 44.7772 38.3891 44.6277L38.3887 44.6284Z" fill="#09396F"/><path d="M45.3112 47.155C45.2895 47.6882 45.2264 48.1896 45.1222 48.6583C44.9877 49.2624 44.7858 49.785 44.5168 50.2261C44.2522 50.6666 43.9244 51.0115 43.5335 51.2607C43.1516 51.5022 42.7088 51.6268 42.2051 51.6339V49.011C42.5956 49.011 42.9017 48.8155 43.1231 48.4247C43.3445 48.0408 43.4552 47.4758 43.4552 46.7294V40.8427H42.8105V38.7204H45.3237V42.5698C45.3237 43.3162 45.4344 43.8848 45.6558 44.2757C45.8772 44.6666 46.1834 44.862 46.5738 44.862C46.7952 44.862 46.9851 44.9902 47.1438 45.2458C47.302 45.5015 47.3816 45.8109 47.3816 46.1735C47.3816 46.5361 47.3025 46.8455 47.1438 47.1012C46.9851 47.3568 46.7952 47.485 46.5738 47.485H46.5544C46.09 47.4779 45.6753 47.3674 45.3107 47.1543L45.3112 47.155Z" fill="#09396F"/><path d="M51.0541 46.0672C50.7415 46.5148 50.3705 46.8603 49.9406 47.1018C49.4849 47.3574 48.9854 47.4856 48.4431 47.4856H46.5742V44.8521H48.4431C48.7164 44.8521 48.9642 44.7777 49.1856 44.6283C49.4113 44.4789 49.6025 44.2693 49.7586 43.9995C49.9147 43.7297 50.034 43.4061 50.1166 43.0293C50.2035 42.6526 50.2468 42.2369 50.2468 41.7816C50.2468 41.3263 50.2035 40.8894 50.1166 40.5126C50.034 40.1359 49.9147 39.8158 49.7586 39.5531C49.6025 39.2904 49.4113 39.0836 49.1856 38.9349C48.9642 38.7926 48.7169 38.7218 48.4431 38.7218V39.3895H46.5742V36.7369C46.6957 36.6448 46.8216 36.5591 46.9517 36.4812C47.4032 36.2256 47.9 36.0974 48.4427 36.0974C48.9854 36.0974 49.4844 36.222 49.9402 36.4706C50.3916 36.7262 50.7778 37.0966 51.0991 37.5795C51.4204 38.0703 51.672 38.6672 51.8545 39.3711C52.0327 40.075 52.1213 40.878 52.1213 41.7809V42.5698C52.1213 43.3161 52.232 43.8848 52.4534 44.2756C52.6748 44.6595 52.9831 44.8514 53.3779 44.8514C53.5993 44.8514 53.7883 44.9809 53.9444 45.2408C54.1005 45.5007 54.1788 45.8116 54.1788 46.1741C54.1788 46.5367 54.1005 46.8462 53.9444 47.1018C53.7883 47.3574 53.5993 47.4856 53.3779 47.4856H53.3585C52.8638 47.4785 52.4275 47.3539 52.0495 47.1124C51.6543 46.8639 51.3244 46.519 51.0597 46.0778L51.0532 46.0672H51.0541Z" fill="#09396F"/><path d="M54.6285 41.7809C54.6285 40.8922 54.7197 40.0962 54.9018 39.3924C55.0799 38.6885 55.3316 38.0915 55.6572 37.6008C55.9872 37.1171 56.3776 36.7439 56.8291 36.4812C57.2805 36.2256 57.7774 36.0974 58.3201 36.0974C58.8628 36.0974 59.3596 36.2256 59.8111 36.4812C60.2668 36.7305 60.6552 37.0994 60.9765 37.5902C61.2977 38.0738 61.5494 38.6672 61.7319 39.3711C61.9101 40.0821 61.9987 40.8851 61.9987 41.7809C61.9987 42.6767 61.9096 43.5017 61.7319 44.2119C61.5494 44.9229 61.2977 45.5198 60.9765 46.0035C60.6552 46.4801 60.2668 46.8462 59.8111 47.1018C59.3596 47.3574 58.8623 47.4856 58.3201 47.4856C57.7778 47.4856 57.2805 47.3574 56.8291 47.1018C56.3949 46.8603 56.0196 46.5155 55.7026 46.0672L55.6961 46.0778C55.4267 46.519 55.0972 46.8632 54.7063 47.1124C54.3245 47.3539 53.8817 47.4785 53.3779 47.4856V44.8627C53.7684 44.8627 54.0746 44.6672 54.296 44.2764C54.5174 43.8925 54.6281 43.3275 54.6281 42.5811V41.7816L54.6285 41.7809ZM59.066 44.6283C59.2896 44.4789 59.4794 44.2693 59.6359 43.9995C59.792 43.7297 59.9127 43.4061 59.9974 43.0293C60.0822 42.6526 60.1246 42.2369 60.1246 41.7816C60.1246 41.3263 60.0813 40.8986 59.9944 40.5183C59.9075 40.138 59.7869 39.8165 59.6329 39.5531C59.4785 39.2904 59.29 39.0857 59.0664 38.9399C58.8429 38.794 58.5942 38.721 58.3209 38.721C58.0477 38.721 57.8107 38.7954 57.585 38.9448C57.3592 39.0942 57.1681 39.3074 57.012 39.5843C56.8559 39.8618 56.7331 40.1848 56.644 40.5544C56.5549 40.924 56.5104 41.3326 56.5104 41.7809C56.5104 42.2291 56.5549 42.6519 56.644 43.0286C56.7331 43.4053 56.8576 43.729 57.0185 43.9988C57.1789 44.2693 57.3701 44.4789 57.5915 44.6276C57.8129 44.7763 58.0559 44.8514 58.3209 44.8514C58.586 44.8514 58.8429 44.777 59.0664 44.6276L59.066 44.6283Z" fill="#09396F"/><path d="M27.1218 51.8465C27.1278 51.8465 27.1343 51.8465 27.1404 51.8479L27.1516 51.8493H27.1629C27.1629 51.8493 27.1672 51.8486 27.1693 51.8486C27.2545 51.8486 27.3505 51.9477 27.4028 52.0901C27.4258 52.1531 27.4586 52.277 27.4188 52.4002L27.4119 52.4222L27.4072 52.4455C27.37 52.6318 27.2554 52.716 27.1642 52.716C27.1192 52.716 27.0543 52.6976 27.0003 52.6084L26.9903 52.5921L26.9791 52.5787C26.8913 52.4746 26.8922 52.277 26.9194 52.1396C26.9462 52.0044 27.0154 51.8465 27.1222 51.8465M27.1222 51.5632C26.759 51.5632 26.586 52.4618 26.8779 52.8081C26.9575 52.9391 27.0612 52.9993 27.1646 52.9993C27.3388 52.9993 27.5131 52.8279 27.5719 52.5326C27.7133 52.0964 27.4465 51.5653 27.1698 51.5653C27.1654 51.5653 27.1616 51.5653 27.1572 51.5653C27.1456 51.5632 27.1339 51.5625 27.1222 51.5625V51.5632Z" fill="#FBB03B"/><path d="M28.9712 51.8443C29.046 51.8443 29.1252 51.8988 29.1779 51.9866C29.2047 52.0319 29.2367 52.1063 29.2354 52.2069V52.2316L29.2376 52.2564C29.2471 52.3541 29.2246 52.4625 29.1766 52.5545C29.1247 52.6544 29.0503 52.716 28.9833 52.716C28.9725 52.716 28.9621 52.7146 28.9517 52.7118L28.9435 52.7096L28.9353 52.7082C28.8108 52.6919 28.7433 52.5149 28.7234 52.369C28.7139 52.2989 28.6932 52.061 28.8259 51.9356L28.838 51.9243L28.8488 51.9101C28.8895 51.8556 28.9379 51.8443 28.9712 51.8443ZM28.9712 51.561C28.8886 51.561 28.8069 51.6007 28.7399 51.6899C28.3918 52.0178 28.5384 52.9398 28.921 52.9908C28.9418 52.9971 28.9626 53 28.9833 53C29.222 53 29.4464 52.6091 29.4084 52.2132C29.4131 51.8351 29.1879 51.5617 28.9712 51.5617V51.561Z" fill="#FBB03B"/><path d="M43.9225 35.3179C44.4068 34.6742 45.2708 35.3179 45.2574 36.3617C45.3395 37.22 44.8042 38.0676 44.2844 37.9146C43.5203 37.8127 43.2272 35.9722 43.9225 35.3179Z" fill="#09396F"/><path d="M48.3297 32.4697C48.814 31.826 49.678 32.4697 49.6646 33.5135C49.7468 34.3718 49.2114 35.2194 48.6917 35.0664C47.9276 34.9645 47.6344 33.124 48.3297 32.4697Z" fill="#09396F"/><path d="M28.554 38.4293C28.647 39.1091 28.9704 39.602 29.3596 39.6572C29.4037 39.67 29.4495 39.6763 29.4945 39.6763C29.7553 39.6763 30.0225 39.4632 30.2089 39.1063C30.3853 38.7685 30.4657 38.3493 30.4303 37.9534C30.4324 37.61 30.3481 37.2779 30.1916 37.0166C30.0056 36.7057 29.7358 36.5195 29.4703 36.5195C29.277 36.5195 29.1006 36.6172 28.9592 36.8013C28.6214 37.1249 28.4627 37.763 28.5535 38.43L28.554 38.4293Z" fill="#09396F"/><path d="M33.7034 33.1331C33.1901 33.1331 32.6149 33.2861 32.1397 33.7329C31.3514 34.4092 30.8204 35.7879 30.7473 37.2318C30.6297 39.5155 30.8161 41.8184 30.6608 44.0985C30.4987 46.492 28.7884 48.1901 27.4272 47.2412C26.4633 46.6882 25.7814 45.0666 25.8346 43.3932C25.819 41.7242 26.5541 40.1854 27.5067 39.6727C27.8657 39.5176 28.2371 39.5183 28.6068 39.5268C28.3975 39.2889 28.241 38.9129 28.1792 38.4604C28.0801 37.7353 28.2531 37.0399 28.6202 36.683C28.6328 36.6667 28.6462 36.6518 28.6596 36.6369C28.1558 36.6129 27.6481 36.6093 27.1625 36.8543C25.4856 37.5816 24.1421 40.1712 24.0889 43.037C23.989 44.954 24.4422 46.885 25.2417 48.2779C26.2168 49.9293 27.7204 50.7146 29.0972 50.2274C30.6652 49.7254 32.0044 47.6194 32.3378 45.0517C32.5756 42.4805 32.2357 39.8434 32.5177 37.2792C32.6331 36.3516 33.1844 35.8169 33.7124 35.8169L34.4562 35.7801V33.1218L33.7038 33.1331H33.7034Z" fill="#F9A51A"/><path d="M24.1052 40.0375C23.2486 39.9016 22.0494 39.8647 20.8711 40.3441C20.8711 40.3441 22.5329 40.1452 24.0148 40.393C24.0308 40.2655 24.0606 40.143 24.1056 40.0368L24.1052 40.0375Z" fill="#F9A51A"/><path d="M23.4981 42.7588C22.6048 42.6526 21.432 42.659 20.2783 43.098C20.2783 43.098 21.9207 42.9146 23.4566 43.12C23.4575 42.996 23.4713 42.8728 23.4986 42.7588H23.4981Z" fill="#F9A51A"/><path d="M23.4853 45.4803C22.5305 45.3649 21.2549 45.3599 20 45.8103C20 45.8103 21.833 45.617 23.4948 45.8499C23.4784 45.7289 23.4754 45.6035 23.4853 45.4803Z" fill="#F9A51A"/><path d="M48.1157 49.4202H48.3176L48.5701 50.5723C48.6017 50.7196 48.632 50.8718 48.6635 51.022H48.6718C48.7033 50.8718 48.731 50.7203 48.763 50.5723L49.0125 49.4202H49.2145V51.5771H49.0588V50.3896C49.0588 50.2019 49.0718 49.9428 49.08 49.7516H49.0718L48.9671 50.2437L48.7189 51.359H48.6078L48.3583 50.2437L48.254 49.7516H48.2458C48.2545 49.9421 48.267 50.2012 48.267 50.3896V51.5771H48.1152V49.4202H48.1157Z" fill="#F9A51A"/><path d="M50.6274 51.3285L50.7087 51.1521C50.7848 51.2761 50.8808 51.3908 51.0313 51.3908C51.1817 51.3908 51.311 51.2059 51.311 50.9135C51.311 50.621 51.2034 50.4532 51.0395 50.4532C50.9508 50.4532 50.8959 50.4978 50.8198 50.5807L50.732 50.4893L50.7744 49.4802H51.4148V49.7125H50.9193L50.8855 50.3349C50.9448 50.2818 51.0032 50.2478 51.0819 50.2478C51.3002 50.2478 51.4784 50.4518 51.4784 50.9043C51.4784 51.3568 51.2695 51.6152 51.0477 51.6152C50.8414 51.6152 50.716 51.4736 50.627 51.3277L50.6274 51.3285Z" fill="#F9A51A"/><path d="M52.8496 51.4136L53.5432 49.6524H52.9119V49.4202H53.7503V49.583L53.0567 51.3442H53.7568V51.5764H52.8496V51.4136Z" fill="#F9A51A"/><path d="M55.0898 50.4907C55.0898 49.8003 55.3221 49.3804 55.6529 49.3804C55.9837 49.3804 56.2159 49.801 56.2159 50.4907C56.2159 51.1804 55.9837 51.6159 55.6529 51.6159C55.3221 51.6159 55.0898 51.1812 55.0898 50.4907ZM56.0425 50.4907C56.0425 49.9533 55.8877 49.6218 55.6529 49.6218C55.4181 49.6218 55.2628 49.9533 55.2628 50.4907C55.2628 51.0282 55.4176 51.3752 55.6529 51.3752C55.8881 51.3752 56.0425 51.0282 56.0425 50.4907Z" fill="#F9A51A"/><path d="M57.6826 49.4202H57.8556L58.3321 50.7762L58.4744 51.2231H58.4826C58.4744 51.0057 58.4614 50.7621 58.4614 50.5369V49.4209H58.6205V51.5778H58.4476L57.971 50.2211L57.8288 49.7756H57.8206C57.8292 49.9938 57.8417 50.2239 57.8417 50.4491V51.5778H57.6826V49.4209V49.4202Z" fill="#F9A51A"/></svg>  },
        { title : t("technical_support")   , desc : t("comprehensive_services") , icon : <svg width="81" height="83" viewBox="0 0 81 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.827 28.2657C75.4546 44.8101 71.4446 63.9272 57.5483 71.1364C43.8264 78.2466 15.9718 75.5174 7.34419 58.973C-1.28344 42.4286 19.8069 30.437 27.6595 16.1698C38.6508 -3.68779 58.1993 11.7213 66.827 28.2657Z" fill="url(#paint0_linear_490_11700)"/><path d="M37.6125 48.936C38.0073 48.936 38.9033 48.7406 39.1247 48.3497C39.3201 48.0084 39.4282 47.5247 39.4503 46.8994C38.9206 47.2903 38.3195 47.4858 37.6467 47.4858C37.0997 47.4858 36.6006 47.3576 36.1492 47.102C35.6977 46.8463 35.3094 46.4781 34.9838 45.998C34.6582 45.5186 34.4052 44.923 34.2253 44.2121C34.045 43.5011 33.9551 42.691 33.9551 41.781C33.9551 40.8711 34.045 40.0943 34.2253 39.3868C34.4052 38.6794 34.6582 38.0825 34.9838 37.5953C35.3094 37.1088 35.6977 36.737 36.1492 36.4807C36.6006 36.225 37.0997 36.0969 37.6467 36.0969C38.1937 36.0969 38.6862 36.2229 39.1377 36.4757C39.5891 36.7278 39.9766 37.0982 40.3 37.5847C40.6235 38.0718 40.8751 38.6667 41.0555 39.3706C41.2358 40.0744 41.3257 40.8775 41.3257 41.7803V46.6537C41.3257 47.3647 41.2574 48.0239 41.1207 48.6315C40.9841 49.2391 40.783 49.7638 40.5184 50.2043C40.2537 50.6447 39.9268 50.9882 39.5385 51.2332C39.1498 51.4782 38.1163 51.605 37.6129 51.6121V48.9353L37.6125 48.936ZM38.3887 44.6284C38.6144 44.479 38.8043 44.2694 38.9586 43.9996C39.1126 43.7298 39.2319 43.4062 39.3167 43.0295C39.4014 42.6528 39.4438 42.2371 39.4438 41.7818C39.4438 41.3264 39.4014 40.8895 39.3167 40.5128C39.2319 40.1361 39.1126 39.816 38.9586 39.5533C38.8047 39.2905 38.6144 39.0859 38.3887 38.94C38.163 38.7941 37.9156 38.7212 37.6462 38.7212C37.3768 38.7212 37.1308 38.7956 36.9072 38.945C36.6837 39.0944 36.4925 39.3061 36.3343 39.5795C36.1756 39.8535 36.0519 40.1764 35.9632 40.5496C35.8742 40.9228 35.8296 41.3335 35.8296 41.781C35.8296 42.2286 35.8742 42.6521 35.9632 43.0288C36.0523 43.4055 36.1769 43.7291 36.3377 43.9989C36.4982 44.2694 36.6893 44.479 36.9107 44.6277C37.1321 44.7772 37.3751 44.8515 37.6402 44.8515C37.9053 44.8515 38.1634 44.7772 38.3891 44.6277L38.3887 44.6284Z" fill="white"/><path d="M45.3112 47.155C45.2895 47.6882 45.2264 48.1896 45.1222 48.6583C44.9877 49.2624 44.7858 49.785 44.5168 50.2261C44.2522 50.6666 43.9244 51.0115 43.5335 51.2607C43.1516 51.5022 42.7088 51.6268 42.2051 51.6339V49.011C42.5956 49.011 42.9017 48.8155 43.1231 48.4247C43.3445 48.0408 43.4552 47.4758 43.4552 46.7294V40.8427H42.8105V38.7204H45.3237V42.5698C45.3237 43.3162 45.4344 43.8848 45.6558 44.2757C45.8772 44.6666 46.1834 44.862 46.5738 44.862C46.7952 44.862 46.9851 44.9902 47.1438 45.2458C47.302 45.5015 47.3816 45.8109 47.3816 46.1735C47.3816 46.5361 47.3025 46.8455 47.1438 47.1012C46.9851 47.3568 46.7952 47.485 46.5738 47.485H46.5544C46.09 47.4779 45.6753 47.3674 45.3107 47.1543L45.3112 47.155Z" fill="white"/><path d="M51.0541 46.0672C50.7415 46.5148 50.3705 46.8603 49.9406 47.1018C49.4849 47.3574 48.9854 47.4856 48.4431 47.4856H46.5742V44.8521H48.4431C48.7164 44.8521 48.9642 44.7777 49.1856 44.6283C49.4113 44.4789 49.6025 44.2693 49.7586 43.9995C49.9147 43.7297 50.034 43.4061 50.1166 43.0293C50.2035 42.6526 50.2468 42.2369 50.2468 41.7816C50.2468 41.3263 50.2035 40.8894 50.1166 40.5126C50.034 40.1359 49.9147 39.8158 49.7586 39.5531C49.6025 39.2904 49.4113 39.0836 49.1856 38.9349C48.9642 38.7926 48.7169 38.7218 48.4431 38.7218V39.3895H46.5742V36.7369C46.6957 36.6448 46.8216 36.5591 46.9517 36.4812C47.4032 36.2256 47.9 36.0974 48.4427 36.0974C48.9854 36.0974 49.4844 36.222 49.9402 36.4706C50.3916 36.7262 50.7778 37.0966 51.0991 37.5795C51.4204 38.0703 51.672 38.6672 51.8545 39.3711C52.0327 40.075 52.1213 40.878 52.1213 41.7809V42.5698C52.1213 43.3161 52.232 43.8848 52.4534 44.2756C52.6748 44.6595 52.9831 44.8514 53.3779 44.8514C53.5993 44.8514 53.7883 44.9809 53.9444 45.2408C54.1005 45.5007 54.1788 45.8116 54.1788 46.1741C54.1788 46.5367 54.1005 46.8462 53.9444 47.1018C53.7883 47.3574 53.5993 47.4856 53.3779 47.4856H53.3585C52.8638 47.4785 52.4275 47.3539 52.0495 47.1124C51.6543 46.8639 51.3244 46.519 51.0597 46.0778L51.0532 46.0672H51.0541Z" fill="white"/><path d="M54.6285 41.7809C54.6285 40.8922 54.7197 40.0962 54.9018 39.3924C55.0799 38.6885 55.3316 38.0915 55.6572 37.6008C55.9872 37.1171 56.3776 36.7439 56.8291 36.4812C57.2805 36.2256 57.7774 36.0974 58.3201 36.0974C58.8628 36.0974 59.3596 36.2256 59.8111 36.4812C60.2668 36.7305 60.6552 37.0994 60.9765 37.5902C61.2977 38.0738 61.5494 38.6672 61.7319 39.3711C61.9101 40.0821 61.9987 40.8851 61.9987 41.7809C61.9987 42.6767 61.9096 43.5017 61.7319 44.2119C61.5494 44.9229 61.2977 45.5198 60.9765 46.0035C60.6552 46.4801 60.2668 46.8462 59.8111 47.1018C59.3596 47.3574 58.8623 47.4856 58.3201 47.4856C57.7778 47.4856 57.2805 47.3574 56.8291 47.1018C56.3949 46.8603 56.0196 46.5155 55.7026 46.0672L55.6961 46.0778C55.4267 46.519 55.0972 46.8632 54.7063 47.1124C54.3245 47.3539 53.8817 47.4785 53.3779 47.4856V44.8627C53.7684 44.8627 54.0746 44.6672 54.296 44.2764C54.5174 43.8925 54.6281 43.3275 54.6281 42.5811V41.7816L54.6285 41.7809ZM59.066 44.6283C59.2896 44.4789 59.4794 44.2693 59.6359 43.9995C59.792 43.7297 59.9127 43.4061 59.9974 43.0293C60.0822 42.6526 60.1246 42.2369 60.1246 41.7816C60.1246 41.3263 60.0813 40.8986 59.9944 40.5183C59.9075 40.138 59.7869 39.8165 59.6329 39.5531C59.4785 39.2904 59.29 39.0857 59.0664 38.9399C58.8429 38.794 58.5942 38.721 58.3209 38.721C58.0477 38.721 57.8107 38.7954 57.585 38.9448C57.3592 39.0942 57.1681 39.3074 57.012 39.5843C56.8559 39.8618 56.7331 40.1848 56.644 40.5544C56.5549 40.924 56.5104 41.3326 56.5104 41.7809C56.5104 42.2291 56.5549 42.6519 56.644 43.0286C56.7331 43.4053 56.8576 43.729 57.0185 43.9988C57.1789 44.2693 57.3701 44.4789 57.5915 44.6276C57.8129 44.7763 58.0559 44.8514 58.3209 44.8514C58.586 44.8514 58.8429 44.777 59.0664 44.6276L59.066 44.6283Z" fill="white"/><path d="M27.1218 51.8465C27.1278 51.8465 27.1343 51.8465 27.1404 51.8479L27.1516 51.8493H27.1629C27.1629 51.8493 27.1672 51.8486 27.1693 51.8486C27.2545 51.8486 27.3505 51.9477 27.4028 52.0901C27.4258 52.1531 27.4586 52.277 27.4188 52.4002L27.4119 52.4222L27.4072 52.4455C27.37 52.6318 27.2554 52.716 27.1642 52.716C27.1192 52.716 27.0543 52.6976 27.0003 52.6084L26.9903 52.5921L26.9791 52.5787C26.8913 52.4746 26.8922 52.277 26.9194 52.1396C26.9462 52.0044 27.0154 51.8465 27.1222 51.8465M27.1222 51.5632C26.759 51.5632 26.586 52.4618 26.8779 52.8081C26.9575 52.9391 27.0612 52.9993 27.1646 52.9993C27.3388 52.9993 27.5131 52.8279 27.5719 52.5326C27.7133 52.0964 27.4465 51.5653 27.1698 51.5653C27.1654 51.5653 27.1616 51.5653 27.1572 51.5653C27.1456 51.5632 27.1339 51.5625 27.1222 51.5625V51.5632Z" fill="#FBB03B"/><path d="M28.9712 51.8443C29.046 51.8443 29.1252 51.8988 29.1779 51.9866C29.2047 52.0319 29.2367 52.1063 29.2354 52.2069V52.2316L29.2376 52.2564C29.2471 52.3541 29.2246 52.4625 29.1766 52.5545C29.1247 52.6544 29.0503 52.716 28.9833 52.716C28.9725 52.716 28.9621 52.7146 28.9517 52.7118L28.9435 52.7096L28.9353 52.7082C28.8108 52.6919 28.7433 52.5149 28.7234 52.369C28.7139 52.2989 28.6932 52.061 28.8259 51.9356L28.838 51.9243L28.8488 51.9101C28.8895 51.8556 28.9379 51.8443 28.9712 51.8443ZM28.9712 51.561C28.8886 51.561 28.8069 51.6007 28.7399 51.6899C28.3918 52.0178 28.5384 52.9398 28.921 52.9908C28.9418 52.9971 28.9626 53 28.9833 53C29.222 53 29.4464 52.6091 29.4084 52.2132C29.4131 51.8351 29.1879 51.5617 28.9712 51.5617V51.561Z" fill="#FBB03B"/><path d="M43.9225 35.3179C44.4068 34.6742 45.2708 35.3179 45.2574 36.3617C45.3395 37.22 44.8042 38.0676 44.2844 37.9146C43.5203 37.8127 43.2272 35.9722 43.9225 35.3179Z" fill="white"/><path d="M48.3297 32.4697C48.814 31.826 49.678 32.4697 49.6646 33.5135C49.7468 34.3718 49.2114 35.2194 48.6917 35.0664C47.9276 34.9645 47.6344 33.124 48.3297 32.4697Z" fill="white"/><path d="M28.554 38.4293C28.647 39.1091 28.9704 39.602 29.3596 39.6572C29.4037 39.67 29.4495 39.6763 29.4945 39.6763C29.7553 39.6763 30.0225 39.4632 30.2089 39.1063C30.3853 38.7685 30.4657 38.3493 30.4303 37.9534C30.4324 37.61 30.3481 37.2779 30.1916 37.0166C30.0056 36.7057 29.7358 36.5195 29.4703 36.5195C29.277 36.5195 29.1006 36.6172 28.9592 36.8013C28.6214 37.1249 28.4627 37.763 28.5535 38.43L28.554 38.4293Z" fill="white"/><path d="M33.7034 33.1331C33.1901 33.1331 32.6149 33.2861 32.1397 33.7329C31.3514 34.4092 30.8204 35.7879 30.7473 37.2318C30.6297 39.5155 30.8161 41.8184 30.6608 44.0985C30.4987 46.492 28.7884 48.1901 27.4272 47.2412C26.4633 46.6882 25.7814 45.0666 25.8346 43.3932C25.819 41.7242 26.5541 40.1854 27.5067 39.6727C27.8657 39.5176 28.2371 39.5183 28.6068 39.5268C28.3975 39.2889 28.241 38.9129 28.1792 38.4604C28.0801 37.7353 28.2531 37.0399 28.6202 36.683C28.6328 36.6667 28.6462 36.6518 28.6596 36.6369C28.1558 36.6129 27.6481 36.6093 27.1625 36.8543C25.4856 37.5816 24.1421 40.1712 24.0889 43.037C23.989 44.954 24.4422 46.885 25.2417 48.2779C26.2168 49.9293 27.7204 50.7146 29.0972 50.2274C30.6652 49.7254 32.0044 47.6194 32.3378 45.0517C32.5756 42.4805 32.2357 39.8434 32.5177 37.2792C32.6331 36.3516 33.1844 35.8169 33.7124 35.8169L34.4562 35.7801V33.1218L33.7038 33.1331H33.7034Z" fill="#F9A51A"/><path d="M24.1052 40.0375C23.2486 39.9016 22.0494 39.8647 20.8711 40.3441C20.8711 40.3441 22.5329 40.1452 24.0148 40.393C24.0308 40.2655 24.0606 40.143 24.1056 40.0368L24.1052 40.0375Z" fill="#F9A51A"/><path d="M23.4981 42.7588C22.6048 42.6526 21.432 42.659 20.2783 43.098C20.2783 43.098 21.9207 42.9146 23.4566 43.12C23.4575 42.996 23.4713 42.8728 23.4986 42.7588H23.4981Z" fill="#F9A51A"/><path d="M23.4853 45.4803C22.5305 45.3649 21.2549 45.3599 20 45.8103C20 45.8103 21.833 45.617 23.4948 45.8499C23.4784 45.7289 23.4754 45.6035 23.4853 45.4803Z" fill="#F9A51A"/><path d="M48.1157 49.4202H48.3176L48.5701 50.5723C48.6017 50.7196 48.632 50.8718 48.6635 51.022H48.6718C48.7033 50.8718 48.731 50.7203 48.763 50.5723L49.0125 49.4202H49.2145V51.5771H49.0588V50.3896C49.0588 50.2019 49.0718 49.9428 49.08 49.7516H49.0718L48.9671 50.2437L48.7189 51.359H48.6078L48.3583 50.2437L48.254 49.7516H48.2458C48.2545 49.9421 48.267 50.2012 48.267 50.3896V51.5771H48.1152V49.4202H48.1157Z" fill="#F9A51A"/><path d="M50.6274 51.3285L50.7087 51.1521C50.7848 51.2761 50.8808 51.3908 51.0313 51.3908C51.1817 51.3908 51.311 51.2059 51.311 50.9135C51.311 50.621 51.2034 50.4532 51.0395 50.4532C50.9508 50.4532 50.8959 50.4978 50.8198 50.5807L50.732 50.4893L50.7744 49.4802H51.4148V49.7125H50.9193L50.8855 50.3349C50.9448 50.2818 51.0032 50.2478 51.0819 50.2478C51.3002 50.2478 51.4784 50.4518 51.4784 50.9043C51.4784 51.3568 51.2695 51.6152 51.0477 51.6152C50.8414 51.6152 50.716 51.4736 50.627 51.3277L50.6274 51.3285Z" fill="#F9A51A"/><path d="M52.8496 51.4136L53.5432 49.6524H52.9119V49.4202H53.7503V49.583L53.0567 51.3442H53.7568V51.5764H52.8496V51.4136Z" fill="#F9A51A"/><path d="M55.0898 50.4907C55.0898 49.8003 55.3221 49.3804 55.6529 49.3804C55.9837 49.3804 56.2159 49.801 56.2159 50.4907C56.2159 51.1804 55.9837 51.6159 55.6529 51.6159C55.3221 51.6159 55.0898 51.1812 55.0898 50.4907ZM56.0425 50.4907C56.0425 49.9533 55.8877 49.6218 55.6529 49.6218C55.4181 49.6218 55.2628 49.9533 55.2628 50.4907C55.2628 51.0282 55.4176 51.3752 55.6529 51.3752C55.8881 51.3752 56.0425 51.0282 56.0425 50.4907Z" fill="#F9A51A"/><path d="M57.6826 49.4202H57.8556L58.3321 50.7762L58.4744 51.2231H58.4826C58.4744 51.0057 58.4614 50.7621 58.4614 50.5369V49.4209H58.6205V51.5778H58.4476L57.971 50.2211L57.8288 49.7756H57.8206C57.8292 49.9938 57.8417 50.2239 57.8417 50.4491V51.5778H57.6826V49.4209V49.4202Z" fill="#F9A51A"/><defs><linearGradient id="paint0_linear_490_11700" x1="49.5259" y1="8.62003" x2="31.6758" y2="74.3799" gradientUnits="userSpaceOnUse"><stop stop-color="#0B3B72"/><stop offset="1" stop-color="#09396F"/></linearGradient></defs></svg>  },
    ]



    return (
        <div className=''>

            <div className=' relative w-full h-[300px]'>
                <Image data-aos='fade-down' className=' w-full h-full object-cover ' src={'/imgs/frame-left.png'} alt='' width={1500} height={300} />
                <h1 data-aos='zoom-in' className='absolute left-[50%] top-[50%] !translate-x-[-50%]   text-[35px] font-[600] text-white '> {t('title')}</h1>
            </div>

            <div className=" min-h-[60vh] items-center justify-center container grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-2 max-md:justify-center max-xl:grid-cols-[1fr,500px] max-xl:gap-[30px] gap-[100px] my-[40px] py-[30px] ">
                <div className="flex flex-col gap-[10px] ">
                    <Title dataAos="fade-up" delay="100"  cn={"max-md:!text-center ltr:md:!text-left rtl:md:!text-right text-[20px] "} title={t("about_platform")} title2={t("m5zoon")} />
                    <Title dataAos="fade-up" delay="200"  cn={"max-md:!text-center ltr:md:!text-left rtl:md:!text-right text-[27px]"} title={t("success_message")} title2={t("eccomerce")} />
                    <div data-aos="fade-up" data-aos-delay="300"  className="p max-md:text-center text-[#A0A7C0] my-[30px] text-[17px] font-[400] ">{t("platform_description")} </div>
                    <Button cn={"max-md:!mx-auto"} dataAos="fade-up" delay="400"  name={t("subscribe_now")} />
                </div>
                <Image data-aos='fade-up' className='max-md:order-[-1] max-md:mx-auto rounded-[8px] max-w-[500px] max-h-[400px] rtl:mr-auto ltr:ml-auto w-full  object-cover ' src={'/imgs/about-us-vedio.png'} alt='' width={500} height={350} />
            </div>

            <div className="container my-[40px] py-[30px] ">
                <Title  cn={"text-center mb-[40px] "}  title={t("why_choose_us")} title2={t("m5zoon2")} />

                <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  gap-[40px] max-xl:gap-[20px] ">
                    {whyChooseUs.map((item, index) => (
                        <div className={`flex p-[30px] max-xl:py-[15px] flex-col gap-[10px] rounded-[15px] ${index == 1 ? "bg-secondery text-white " : ""} `} key={index} data-aos="fade-up" data-aos-delay={`${index}00`} style={{boxShadow : "0px 10px 60px 0px #262D7614"}} >
                            <div className="mb-[20px]"> {item.icon}</div>
                            <h3 className='text-[24px] font-[500] ' >{item.title}</h3>
                            <p className='text-[20px] font-[400] ' >{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>

            <Feature cn={"my-[40px] py-[30px]"} title={<Title  cn={"text-center "}  title={t("numbers_and_statistics")} title2={t("statics")} />} />
            <FAQPage />
            <OurLocation />
        </div>
    );
};

export default page;
