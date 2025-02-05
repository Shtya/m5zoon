import { useTranslations } from 'next-intl';
import React from 'react'
import CountUp from 'react-countup';


export default function Feature({title , cn}) {
	const t = useTranslations()

	const cards = [
		{
		  id: 1,
		  count: '102',
		  label: t("suppliers_count") ,
		  icon: <svg width="78" height="76" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="78" height="76" rx="35" fill="#F9FCFF"/><path d="M56.8605 25.3333H54.0738V23.94C54.0738 23.7711 54.0105 23.6233 53.8838 23.4967C53.7571 23.37 53.6093 23.3067 53.4405 23.3067C50.6538 23.3067 48.3738 23.4333 46.6005 23.6867C45.1649 23.8556 43.5182 24.1933 41.6605 24.7V24.5733C41.6605 23.8133 41.4071 23.18 40.9005 22.6733C40.3938 22.1667 39.7605 21.9133 39.0005 21.9133C38.2405 21.9133 37.6071 22.1667 37.1005 22.6733C36.5938 23.18 36.3405 23.8133 36.3405 24.5733V24.7C34.4827 24.1933 32.836 23.8556 31.4005 23.6867C29.6271 23.4333 27.3471 23.3067 24.5605 23.3067C24.3916 23.3067 24.2438 23.37 24.1171 23.4967C23.9905 23.6233 23.9271 23.7711 23.9271 23.94V25.3333H21.1405C20.9716 25.3333 20.8449 25.3967 20.7605 25.5233C20.676 25.65 20.6338 25.7978 20.6338 25.9667V51.5533C20.6338 51.7222 20.676 51.87 20.7605 51.9967C20.8449 52.1233 20.9716 52.1867 21.1405 52.1867H35.8338C35.8338 52.7778 36.0238 53.2422 36.4038 53.58C36.7838 53.9178 37.2271 54.0867 37.7338 54.0867H40.2671C40.8582 54.0867 41.3227 53.9178 41.6605 53.58C41.9982 53.2422 42.1671 52.7778 42.1671 52.1867H56.8605C57.0293 52.1867 57.156 52.1233 57.2405 51.9967C57.3249 51.87 57.3671 51.7222 57.3671 51.5533V25.9667C57.3671 25.7978 57.3249 25.65 57.2405 25.5233C57.156 25.3967 57.0293 25.3333 56.8605 25.3333ZM52.9338 24.4467V48.1333C47.1916 48.1333 42.7582 48.8933 39.6338 50.4133V42.56H51.1605C51.4138 42.56 51.5827 42.4967 51.6671 42.37C51.7516 42.2433 51.7938 42.0956 51.7938 41.9267C51.7093 40.9978 51.4138 40.1956 50.9071 39.52C50.4005 38.8444 49.7671 38.3378 49.0071 38C49.5138 37.4933 49.7671 36.8811 49.7671 36.1633C49.7671 35.4456 49.5138 34.8122 49.0071 34.2633C48.5005 33.7144 47.8671 33.44 47.1071 33.44L46.6005 33.5667C46.0938 32.9756 45.5027 32.5533 44.8271 32.3C45.4182 31.7089 45.7138 31.0544 45.7138 30.3367C45.7138 29.6189 45.4393 28.9856 44.8905 28.4367C44.3416 27.8878 43.6871 27.6133 42.9271 27.6133L42.5471 27.74C42.1249 27.1489 41.576 26.7267 40.9005 26.4733L41.2805 25.9667C43.3071 25.46 44.9538 25.08 46.2205 24.8267C47.9938 24.6578 50.2316 24.5311 52.9338 24.4467ZM34.6938 40.0267C34.1871 39.0978 33.4693 38.4222 32.5405 38C32.8782 37.6622 33.0893 37.24 33.1738 36.7333H36.2138C36.2982 37.24 36.5516 37.6622 36.9738 38C35.9605 38.4222 35.2005 39.0978 34.6938 40.0267ZM29.1205 36.1C29.1205 35.6778 29.2682 35.34 29.5638 35.0867C29.8593 34.8333 30.2182 34.7067 30.6405 34.7067C31.0627 34.7067 31.4216 34.8333 31.7171 35.0867C32.0127 35.34 32.1605 35.6778 32.1605 36.1C32.1605 36.5222 32.0127 36.8811 31.7171 37.1767C31.4216 37.4722 31.0627 37.62 30.6405 37.62C30.2182 37.62 29.8593 37.4722 29.5638 37.1767C29.2682 36.8811 29.1205 36.5222 29.1205 36.1ZM33.1738 30.4C33.1738 29.9778 33.3216 29.6189 33.6171 29.3233C33.9127 29.0278 34.2716 28.88 34.6938 28.88C35.116 28.88 35.4749 29.0278 35.7705 29.3233C36.066 29.6189 36.2138 29.9778 36.2138 30.4C36.2138 30.8222 36.066 31.16 35.7705 31.4133C35.4749 31.6667 35.116 31.7933 34.6938 31.7933C34.2716 31.7933 33.9127 31.6667 33.6171 31.4133C33.3216 31.16 33.1738 30.8222 33.1738 30.4ZM39.0005 27.2333C39.9293 27.2333 40.7316 27.5289 41.4071 28.12C40.816 28.5422 40.4782 29.0911 40.3938 29.7667H37.3538C37.1849 29.1756 36.8893 28.6689 36.4671 28.2467C37.1427 27.5711 37.9871 27.2333 39.0005 27.2333ZM42.9271 40.0267C42.4205 39.0978 41.7027 38.4222 40.7738 38C41.1116 37.6622 41.3649 37.24 41.5338 36.7333H44.4471C44.616 37.24 44.8693 37.6622 45.2071 38C44.1938 38.4222 43.4338 39.0978 42.9271 40.0267ZM38.8738 37.62C38.4516 37.62 38.0927 37.4722 37.7971 37.1767C37.5016 36.8811 37.3538 36.5222 37.3538 36.1C37.3538 35.6778 37.5016 35.34 37.7971 35.0867C38.0927 34.8333 38.4516 34.7067 38.8738 34.7067C39.296 34.7067 39.6549 34.8333 39.9505 35.0867C40.246 35.34 40.3938 35.6778 40.3938 36.1C40.3938 36.5222 40.246 36.8811 39.9505 37.1767C39.6549 37.4722 39.296 37.62 38.8738 37.62ZM36.5938 32.3C37.016 31.8778 37.2693 31.4133 37.3538 30.9067H38.3671V33.44V33.5667C37.8605 32.9756 37.2693 32.5533 36.5938 32.3ZM40.3938 30.9067C40.4782 31.4133 40.6893 31.8778 41.0271 32.3C40.5205 32.5533 40.056 32.8911 39.6338 33.3133V30.9067H40.3938ZM47.1071 38.8867C47.8671 38.8867 48.5638 39.1189 49.1971 39.5833C49.8305 40.0478 50.2738 40.6178 50.5271 41.2933H43.6871C43.9405 40.6178 44.3838 40.0478 45.0171 39.5833C45.6505 39.1189 46.3471 38.8867 47.1071 38.8867ZM47.1071 37.62C46.6849 37.62 46.326 37.4722 46.0305 37.1767C45.7349 36.8811 45.5871 36.5222 45.5871 36.1C45.5871 35.6778 45.7349 35.34 46.0305 35.0867C46.326 34.8333 46.6849 34.7067 47.1071 34.7067C47.5293 34.7067 47.8882 34.8333 48.1838 35.0867C48.4793 35.34 48.6271 35.6778 48.6271 36.1C48.6271 36.5222 48.4793 36.8811 48.1838 37.1767C47.8882 37.4722 47.5293 37.62 47.1071 37.62ZM44.4471 35.5933H41.5338C41.3649 34.9178 41.0271 34.4111 40.5205 34.0733C41.196 33.3978 42.0193 33.06 42.9905 33.06C43.9616 33.06 44.7849 33.3978 45.4605 34.0733C44.9538 34.4111 44.616 34.9178 44.4471 35.5933ZM42.9271 31.7933C42.5049 31.7933 42.146 31.6667 41.8505 31.4133C41.5549 31.16 41.4071 30.8222 41.4071 30.4C41.4071 29.9778 41.5549 29.6189 41.8505 29.3233C42.146 29.0278 42.5049 28.88 42.9271 28.88C43.3493 28.88 43.7082 29.0278 44.0038 29.3233C44.2993 29.6189 44.4471 29.9778 44.4471 30.4C44.4471 30.8222 44.2993 31.16 44.0038 31.4133C43.7082 31.6667 43.3493 31.7933 42.9271 31.7933ZM37.2271 34.0733C36.7205 34.4111 36.3827 34.9178 36.2138 35.5933H33.1738C33.0893 34.9178 32.7938 34.4111 32.2871 34.0733C32.9627 33.3978 33.786 33.06 34.7571 33.06C35.7282 33.06 36.5516 33.3978 37.2271 34.0733ZM30.6405 38.8867C31.4005 38.8867 32.0971 39.1189 32.7305 39.5833C33.3638 40.0478 33.8071 40.6178 34.0605 41.2933H27.2205C27.4738 40.6178 27.896 40.0478 28.4871 39.5833C29.0782 39.1189 29.796 38.8867 30.6405 38.8867ZM38.8738 38.8867C39.6338 38.8867 40.3305 39.1189 40.9638 39.5833C41.5971 40.0478 42.0405 40.6178 42.2938 41.2933H35.4538C35.7071 40.6178 36.1293 40.0478 36.7205 39.5833C37.3116 39.1189 38.0293 38.8867 38.8738 38.8867ZM39.0005 23.0533C39.4227 23.0533 39.7816 23.2011 40.0771 23.4967C40.3727 23.7922 40.5205 24.1511 40.5205 24.5733C40.5205 24.9956 40.3727 25.3544 40.0771 25.65C39.7816 25.9456 39.4227 26.0933 39.0005 26.0933C38.5782 26.0933 38.2193 25.9456 37.9238 25.65C37.6282 25.3544 37.4805 24.9956 37.4805 24.5733C37.4805 24.1511 37.6282 23.7922 37.9238 23.4967C38.2193 23.2011 38.5782 23.0533 39.0005 23.0533ZM25.0671 24.4467C27.7693 24.5311 30.0071 24.6578 31.7805 24.8267C33.0471 25.08 34.6938 25.46 36.7205 25.9667L37.1005 26.4733C36.4249 26.7267 35.8338 27.1489 35.3271 27.74C35.1582 27.6556 34.9471 27.6133 34.6938 27.6133C33.9338 27.6133 33.3005 27.8878 32.7938 28.4367C32.2871 28.9856 32.0338 29.6189 32.0338 30.3367C32.0338 31.0544 32.2871 31.7089 32.7938 32.3C32.1182 32.5533 31.5693 32.9756 31.1471 33.5667L30.6405 33.44C29.8805 33.44 29.226 33.7144 28.6771 34.2633C28.1282 34.8122 27.8538 35.4456 27.8538 36.1633C27.8538 36.8811 28.1493 37.4933 28.7405 38C27.9805 38.3378 27.3471 38.8444 26.8405 39.52C26.3338 40.1956 25.996 40.9978 25.8271 41.9267C25.8271 42.0956 25.8905 42.2433 26.0171 42.37C26.1438 42.4967 26.2916 42.56 26.4605 42.56H38.3671V50.4133C35.2427 48.8933 30.8093 48.1333 25.0671 48.1333V24.4467ZM56.2271 51.0467H41.6605C41.4916 51.0467 41.3438 51.11 41.2171 51.2367C41.0905 51.3633 41.0271 51.4689 41.0271 51.5533V52.1867C41.0271 52.44 40.9638 52.63 40.8371 52.7567C40.7105 52.8833 40.5205 52.9467 40.2671 52.9467H37.7338C37.5649 52.9467 37.396 52.8833 37.2271 52.7567C37.0582 52.63 36.9738 52.44 36.9738 52.1867V51.5533C36.9738 51.4689 36.9105 51.3633 36.7838 51.2367C36.6571 51.11 36.5516 51.0467 36.4671 51.0467H21.7738V26.6H23.9271V48.64C23.9271 48.8089 23.9905 48.9567 24.1171 49.0833C24.2438 49.21 24.3916 49.2733 24.5605 49.2733C30.8938 49.2733 35.6227 50.16 38.7471 51.9333C38.8316 52.0178 38.916 52.06 39.0005 52.06C39.0849 52.06 39.1693 52.0178 39.2538 51.9333C42.3782 50.16 47.1071 49.2733 53.4405 49.2733C53.6093 49.2733 53.7571 49.21 53.8838 49.0833C54.0105 48.9567 54.0738 48.8089 54.0738 48.64V26.6H56.2271V51.0467ZM51.0338 44.5867C51.0338 44.7556 50.9705 44.9033 50.8438 45.03C50.7171 45.1567 50.5693 45.22 50.4005 45.22C47.1916 45.3889 44.4893 45.8111 42.2938 46.4867H42.0405C41.7871 46.4867 41.6182 46.3811 41.5338 46.17C41.4493 45.9589 41.4493 45.79 41.5338 45.6633C41.6182 45.5367 41.7449 45.4311 41.9138 45.3467C44.2782 44.6711 47.1071 44.2489 50.4005 44.08C50.5693 44.08 50.696 44.1222 50.7805 44.2067C50.8649 44.2911 50.9493 44.4178 51.0338 44.5867ZM36.4671 46.1067C36.3827 46.36 36.2138 46.4867 35.9605 46.4867H35.7071C33.5116 45.8111 30.8093 45.3889 27.6005 45.22C27.4316 45.22 27.2838 45.1567 27.1571 45.03C27.0305 44.9033 26.9882 44.7556 27.0305 44.5867C27.0727 44.4178 27.136 44.2911 27.2205 44.2067C27.3049 44.1222 27.4316 44.08 27.6005 44.08C30.8938 44.2489 33.7227 44.6711 36.0871 45.3467C36.256 45.4311 36.3827 45.5367 36.4671 45.6633C36.5516 45.79 36.5516 45.9378 36.4671 46.1067Z" fill="#09396F"/></svg>
		  
		},
		{
		  id: 2,
		  count: '102',
		  label: t("shipping_operations") ,
		  icon: <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/209396F/svg"><rect x="0.75" width="70" height="70" rx="35" fill="#F9FCFF"/><g clipPath="url(#clip0_489_10758)"><path opacity="0.838" fillRule="evenodd" clipRule="evenodd" d="M54.6016 36.9297C54.6016 38.3151 54.6016 39.7005 54.6016 41.086C53.9128 42.3711 52.8242 42.9649 51.3359 42.8672C51.5084 44.8151 51.2611 46.6954 50.5938 48.5078C50.3257 48.8644 49.9795 49.112 49.5547 49.25C39.0651 49.448 28.5755 49.448 18.0859 49.25C17.5333 48.8445 17.0385 48.3992 16.6016 47.9141C16.6016 41.3828 16.6016 34.8516 16.6016 28.3203C17.0385 27.8352 17.5333 27.3898 18.0859 26.9844C28.5755 26.7865 39.0651 26.7865 49.5547 26.9844C50.4937 27.4237 51.0379 28.1659 51.1875 29.211C51.3855 32.4766 51.3855 35.7422 51.1875 39.0078C50.7849 39.2692 50.3396 39.3681 49.8516 39.3047C49.9011 35.9387 49.8516 32.5741 49.7031 29.211C49.3427 28.7512 48.8974 28.4048 48.3672 28.1719C38.6693 27.974 28.9714 27.974 19.2734 28.1719C18.6302 28.4193 18.1849 28.8646 17.9375 29.5078C17.7396 35.2474 17.7396 40.987 17.9375 46.7266C18.1849 47.3699 18.6302 47.8152 19.2734 48.0625C29.0703 48.2605 38.8672 48.2605 48.6641 48.0625C49.1094 47.8152 49.4558 47.4688 49.7031 47.0235C49.8516 44.8486 49.9008 42.6715 49.8516 40.4922C50.7312 40.3885 51.4238 40.6854 51.9297 41.3828C52.777 41.1781 53.2719 40.6338 53.4141 39.75C52.7102 34.4663 52.0671 29.172 51.4844 23.8672C51.5485 22.4968 50.9052 21.7051 49.5547 21.4922C40.0621 22.6788 30.5621 23.8168 21.0547 24.9063C20.5894 25.2257 20.0947 25.473 19.5703 25.6485C18.4493 25.2265 18.4493 24.6822 19.5703 24.0157C20.132 23.7267 20.7258 23.5288 21.3516 23.4219C28.9714 22.5313 36.5911 21.6407 44.2109 20.75C46.4779 20.383 48.754 20.2841 51.0391 20.4532C51.7812 20.7995 52.3254 21.3438 52.6719 22.086C53.2647 27.0839 53.9081 32.0318 54.6016 36.9297ZM21.9453 34.5547C23.1369 34.5056 24.3244 34.5551 25.5078 34.7032C26.2995 35.7917 26.2995 36.8802 25.5078 37.9688C24.2046 38.198 22.9182 38.1485 21.6484 37.8203C21.2067 36.6537 21.3057 35.5651 21.9453 34.5547Z" fill="#09396F"/><path opacity="0.763" fillRule="evenodd" clipRule="evenodd" d="M44.5078 30.9922C44.9958 30.9288 45.4412 31.0278 45.8438 31.2891C46.123 32.2731 46.3704 33.2627 46.5859 34.2578C46.3704 35.2529 46.123 36.2425 45.8438 37.2266C45.4412 37.4879 44.9958 37.5868 44.5078 37.5234C44.5804 36.4141 44.7783 35.3256 45.1016 34.2578C44.7783 33.19 44.5804 32.1015 44.5078 30.9922Z" fill="#09396F"/><path opacity="0.737" fillRule="evenodd" clipRule="evenodd" d="M42.4297 31.8828C42.9909 31.8224 43.4362 32.0203 43.7656 32.4765C43.8579 33.0869 44.0063 33.6807 44.2109 34.2578C44.0063 34.8349 43.8579 35.4287 43.7656 36.039C43.4362 36.4953 42.9909 36.6932 42.4297 36.6328C42.8255 35.0495 42.8255 33.4661 42.4297 31.8828Z" fill="#09396F"/><path opacity="0.686" fillRule="evenodd" clipRule="evenodd" d="M40.3516 33.0703C40.7474 33.0703 41.1432 33.0703 41.5391 33.0703C41.5391 33.862 41.5391 34.6536 41.5391 35.4453C41.051 35.5087 40.6057 35.4097 40.2031 35.1484C40.2442 34.4475 40.2937 33.7548 40.3516 33.0703Z" fill="#09396F"/><path opacity="0.863" fillRule="evenodd" clipRule="evenodd" d="M20.7578 33.3672C22.7545 33.2795 24.7337 33.3785 26.6953 33.664C26.9009 33.82 27.0493 34.0179 27.1406 34.2578C27.3725 35.7583 27.323 37.2427 26.9922 38.7109C26.8362 38.9165 26.6383 39.0649 26.3984 39.1562C24.5182 39.3541 22.638 39.3541 20.7578 39.1562C20.6094 39.0078 20.4609 38.8593 20.3125 38.7109C20.1146 37.1276 20.1146 35.5442 20.3125 33.9609C20.5254 33.7993 20.6739 33.6014 20.7578 33.3672ZM21.9453 34.5547C21.3057 35.5651 21.2068 36.6536 21.6484 37.8203C22.9182 38.1485 24.2046 38.198 25.5078 37.9687C26.2995 36.8802 26.2995 35.7916 25.5078 34.7031C24.3244 34.555 23.1369 34.5055 21.9453 34.5547Z" fill="#09396F"/><path opacity="0.805" fillRule="evenodd" clipRule="evenodd" d="M22.5391 35.7422C23.3307 35.7422 24.1224 35.7422 24.9141 35.7422C24.9141 36.138 24.9141 36.5339 24.9141 36.9297C24.1224 36.9297 23.3307 36.9297 22.5391 36.9297C22.5391 36.5339 22.5391 36.138 22.5391 35.7422Z" fill="#09396F"/><path opacity="0.884" fillRule="evenodd" clipRule="evenodd" d="M20.1641 41.0859C22.1432 41.0859 24.1224 41.0859 26.1016 41.0859C26.1016 41.4818 26.1016 41.8776 26.1016 42.2734C24.1224 42.2734 22.1432 42.2734 20.1641 42.2734C20.1641 41.8776 20.1641 41.4818 20.1641 41.0859Z" fill="#09396F"/><path opacity="0.884" fillRule="evenodd" clipRule="evenodd" d="M27.2891 41.0859C29.2682 41.0859 31.2474 41.0859 33.2266 41.0859C33.2266 41.4818 33.2266 41.8776 33.2266 42.2734C31.2474 42.2734 29.2682 42.2734 27.2891 42.2734C27.2891 41.8776 27.2891 41.4818 27.2891 41.0859Z" fill="#09396F"/><path opacity="0.884" fillRule="evenodd" clipRule="evenodd" d="M34.4141 41.0859C36.3932 41.0859 38.3724 41.0859 40.3516 41.0859C40.3516 41.4818 40.3516 41.8776 40.3516 42.2734C38.3724 42.2734 36.3932 42.2734 34.4141 42.2734C34.4141 41.8776 34.4141 41.4818 34.4141 41.0859Z" fill="#09396F"/><path opacity="0.862" fillRule="evenodd" clipRule="evenodd" d="M41.5391 41.086C43.5207 41.0366 45.4999 41.0861 47.4766 41.2344C47.8723 41.5313 47.8723 41.8282 47.4766 42.1251C45.4999 42.2734 43.5207 42.3229 41.5391 42.2735C41.5391 41.8777 41.5391 41.4818 41.5391 41.086Z" fill="#09396F"/><path opacity="0.913" fillRule="evenodd" clipRule="evenodd" d="M20.1641 44.0547C24.5182 44.0547 28.8724 44.0547 33.2266 44.0547C33.2266 44.4505 33.2266 44.8464 33.2266 45.2422C28.8724 45.2422 24.5182 45.2422 20.1641 45.2422C20.1641 44.8464 20.1641 44.4505 20.1641 44.0547Z" fill="#09396F"/></g><defs><clipPath id="clip0_489_10758"><rect width="38" height="38" fill="white" transform="translate(16.75 16)"/></clipPath></defs></svg>,
		},
		{
		  id: 3,
		  count: '102',
		  label: t("success_partners") ,
		  icon : <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/209396F/svg">		  <rect x="0.5" width="70" height="70" rx="35" fill="#F9FCFF"/>		  <path d="M48.0403 39.94C48.4625 39.4334 48.8003 38.8423 49.0536 38.1667C49.3069 37.4911 49.4336 36.8156 49.4336 36.14C49.4336 35.0423 49.0536 34.1134 48.2936 33.3534C47.5336 32.5934 46.6047 32.2134 45.5069 32.2134C44.4092 32.2134 43.4803 32.5934 42.7203 33.3534C41.9603 34.1134 41.5803 35.0634 41.5803 36.2034C41.5803 37.3434 41.8758 38.3778 42.4669 39.3067L42.8469 39.94C41.9181 39.94 41.0736 40.2356 40.3136 40.8267C39.9758 40.7423 39.6381 40.7 39.3003 40.7H38.6669C39.0892 40.3623 39.4269 39.94 39.6803 39.4334C40.5247 38.0823 40.9469 36.52 40.9469 34.7467C40.9469 33.8178 40.7147 32.9311 40.2503 32.0867C39.7858 31.2423 39.1314 30.5667 38.2869 30.06C37.4425 29.5534 36.5136 29.3 35.5003 29.3C34.4869 29.3 33.5581 29.5534 32.7136 30.06C31.8692 30.5667 31.2147 31.2423 30.7503 32.0867C30.2858 32.9311 30.0536 33.8178 30.0536 34.7467C30.0536 36.52 30.4758 38.0823 31.3203 39.4334C31.5736 39.8556 31.9114 40.2778 32.3336 40.7H31.7003C31.3625 40.7 31.0247 40.7423 30.6869 40.8267C29.9269 40.2356 29.0825 39.94 28.1536 39.94L28.5336 39.3067C29.1247 38.3778 29.4203 37.3434 29.4203 36.2034C29.4203 35.0634 29.0403 34.1134 28.2803 33.3534C27.5203 32.5934 26.5914 32.2134 25.4936 32.2134C24.3958 32.2134 23.4669 32.5934 22.7069 33.3534C21.9469 34.1134 21.5669 35.0423 21.5669 36.14C21.5669 36.8156 21.6936 37.4911 21.9469 38.1667C22.2003 38.8423 22.5381 39.4334 22.9603 39.94C21.7781 39.94 20.7858 40.32 19.9836 41.08C19.1814 41.84 18.7803 42.7689 18.7803 43.8667V48.4267C18.7803 48.5956 18.8225 48.7434 18.9069 48.87C18.9914 48.9967 19.1181 49.06 19.2869 49.06H25.8736V52.86C25.8736 53.0289 25.9369 53.1556 26.0636 53.24C26.1903 53.3245 26.3381 53.3667 26.5069 53.3667H44.4936C44.6625 53.3667 44.8103 53.3245 44.9369 53.24C45.0636 53.1556 45.1269 53.0289 45.1269 52.86V49.06H51.7136C51.8825 49.06 52.0092 48.9967 52.0936 48.87C52.1781 48.7434 52.2203 48.5956 52.2203 48.4267V43.8667C52.2203 42.7689 51.8192 41.84 51.0169 41.08C50.2147 40.32 49.2225 39.94 48.0403 39.94ZM42.7203 36.14C42.7203 35.38 42.9947 34.7256 43.5436 34.1767C44.0925 33.6278 44.7469 33.3534 45.5069 33.3534C46.2669 33.3534 46.9214 33.6278 47.4703 34.1767C48.0192 34.7256 48.2936 35.4223 48.2936 36.2667C48.2936 37.1111 48.0825 37.8711 47.6603 38.5467C47.1536 39.4756 46.4358 39.94 45.5069 39.94C44.5781 39.94 43.8603 39.4756 43.3536 38.5467C42.9314 37.8711 42.7203 37.0689 42.7203 36.14ZM35.5003 30.5667C36.6825 30.5667 37.6958 30.9678 38.5403 31.77C39.3847 32.5723 39.8069 33.5645 39.8069 34.7467V34.8734C38.8781 34.7889 38.0758 34.62 37.4003 34.3667C36.5558 34.0289 35.6692 33.5223 34.7403 32.8467C34.5714 32.6778 34.3603 32.6778 34.1069 32.8467L31.1936 34.4934C31.2781 33.3956 31.7425 32.4667 32.5869 31.7067C33.4314 30.9467 34.4025 30.5667 35.5003 30.5667ZM32.3336 38.8C31.8269 37.9556 31.4892 36.9845 31.3203 35.8867L34.3603 33.9867C35.2892 34.6623 36.2181 35.1689 37.1469 35.5067C37.8225 35.76 38.6669 35.9711 39.6803 36.14C39.5114 37.1534 39.1736 38.04 38.6669 38.8C37.9069 40.0667 36.8514 40.7 35.5003 40.7C34.1492 40.7 33.0936 40.0667 32.3336 38.8ZM22.7069 36.14C22.7069 35.38 22.9814 34.7256 23.5303 34.1767C24.0792 33.6278 24.7336 33.3534 25.4936 33.3534C26.2536 33.3534 26.9081 33.6278 27.4569 34.1767C28.0058 34.7256 28.2803 35.4223 28.2803 36.2667C28.2803 37.1111 28.0692 37.8711 27.6469 38.5467C27.1403 39.4756 26.4225 39.94 25.4936 39.94C24.5647 39.94 23.8469 39.4756 23.3403 38.5467C22.9181 37.8711 22.7069 37.0689 22.7069 36.14ZM19.9203 47.92V43.8667C19.9203 43.1067 20.2158 42.4734 20.8069 41.9667C21.3981 41.46 22.1158 41.2067 22.9603 41.2067H28.1536C28.4914 41.2067 28.7869 41.2489 29.0403 41.3334C28.1114 41.7556 27.3514 42.41 26.7603 43.2967C26.1692 44.1834 25.8736 45.1334 25.8736 46.1467V47.92H19.9203ZM43.9869 52.2267H40.9469V48.5534C40.9469 48.3845 40.8836 48.2367 40.7569 48.11C40.6303 47.9834 40.4825 47.92 40.3136 47.92C40.1447 47.92 40.0181 47.9834 39.9336 48.11C39.8492 48.2367 39.8069 48.3845 39.8069 48.5534V52.2267H31.1936V48.5534C31.1936 48.3845 31.1514 48.2367 31.0669 48.11C30.9825 47.9834 30.8558 47.92 30.6869 47.92C30.5181 47.92 30.3703 47.9834 30.2436 48.11C30.1169 48.2367 30.0536 48.3845 30.0536 48.5534V52.2267H27.0136V46.1467C27.0136 44.9645 27.4781 43.9511 28.4069 43.1067C29.3358 42.2623 30.4336 41.84 31.7003 41.84H39.3003C40.5669 41.84 41.6647 42.2623 42.5936 43.1067C43.5225 43.9511 43.9869 44.9645 43.9869 46.1467V52.2267ZM51.0803 47.92H45.1269V46.1467C45.1269 45.1334 44.8314 44.1834 44.2403 43.2967C43.6492 42.41 42.8892 41.7556 41.9603 41.3334C42.2136 41.2489 42.5092 41.2067 42.8469 41.2067H48.0403C48.8847 41.2067 49.6025 41.46 50.1936 41.9667C50.7847 42.4734 51.0803 43.1067 51.0803 43.8667V47.92ZM32.2069 23.7267L31.7003 26.8934C31.7003 27.1467 31.7847 27.3367 31.9536 27.4634C32.1225 27.59 32.3336 27.6111 32.5869 27.5267L35.5003 26.0067L38.4136 27.5267C38.6669 27.6111 38.8781 27.59 39.0469 27.4634C39.2158 27.3367 39.3003 27.1467 39.3003 26.8934L38.7936 23.7267L41.0736 21.32C41.2425 21.1511 41.2847 20.9611 41.2003 20.75C41.1158 20.5389 40.9469 20.3911 40.6936 20.3067L37.5269 19.8L36.0069 16.8867C35.9225 16.7178 35.7536 16.6334 35.5003 16.6334C35.2469 16.6334 35.0781 16.7178 34.9936 16.8867L33.4736 19.8L30.3069 20.3067C30.0536 20.3911 29.8847 20.5389 29.8003 20.75C29.7158 20.9611 29.7581 21.1511 29.9269 21.32L32.2069 23.7267ZM33.9803 20.94C34.1492 20.8556 34.2758 20.7289 34.3603 20.56L35.5003 18.4067L36.6403 20.56C36.7247 20.7289 36.8514 20.8556 37.0203 20.94L39.4269 21.32L37.7803 23.0934C37.6114 23.1778 37.5269 23.3467 37.5269 23.6L37.9069 25.88L35.7536 24.8667C35.5847 24.7823 35.4158 24.7823 35.2469 24.8667L33.0936 25.88L33.4736 23.6C33.4736 23.3467 33.3892 23.1778 33.2203 23.0934L31.5736 21.32L33.9803 20.94ZM21.1869 24.6134L20.8069 26.8934C20.8069 27.1467 20.9125 27.3367 21.1236 27.4634C21.3347 27.59 21.5247 27.6111 21.6936 27.5267L23.7203 26.5134L25.7469 27.5267C25.9158 27.6111 26.1058 27.59 26.3169 27.4634C26.5281 27.3367 26.6336 27.1467 26.6336 26.8934L26.2536 24.6134L27.7736 23.0934C27.9425 22.9245 28.0058 22.7134 27.9636 22.46C27.9214 22.2067 27.7736 22.08 27.5203 22.08L25.2403 21.7L24.2269 19.6734C24.1425 19.5045 23.9736 19.42 23.7203 19.42C23.4669 19.42 23.2981 19.5045 23.2136 19.6734L22.2003 21.7L19.9203 22.08C19.6669 22.08 19.5192 22.2067 19.4769 22.46C19.4347 22.7134 19.4981 22.9245 19.6669 23.0934L21.1869 24.6134ZM22.5803 22.84C22.8336 22.7556 23.0025 22.6289 23.0869 22.46L23.7203 21.1934L24.3536 22.46C24.4381 22.6289 24.5647 22.7556 24.7336 22.84L26.1269 23.0934L25.2403 24.1067C25.0714 24.1911 24.9869 24.3178 24.9869 24.4867L25.2403 25.88L23.9736 25.3734C23.8047 25.2889 23.6358 25.2889 23.4669 25.3734L22.2003 25.88L22.4536 24.4867C22.4536 24.3178 22.3692 24.1911 22.2003 24.1067L21.3136 23.0934L22.5803 22.84ZM44.7469 24.6134L44.3669 26.8934C44.3669 27.1467 44.4725 27.3367 44.6836 27.4634C44.8947 27.59 45.0847 27.6111 45.2536 27.5267L47.2803 26.5134L49.3069 27.5267C49.4758 27.6111 49.6658 27.59 49.8769 27.4634C50.0881 27.3367 50.1936 27.1467 50.1936 26.8934L49.8136 24.6134L51.3336 23.0934C51.5025 22.9245 51.5658 22.7134 51.5236 22.46C51.4814 22.2067 51.3336 22.08 51.0803 22.08L48.8003 21.7L47.7869 19.6734C47.7025 19.5045 47.5336 19.42 47.2803 19.42C47.0269 19.42 46.8581 19.5045 46.7736 19.6734L45.7603 21.7L43.4803 22.08C43.2269 22.08 43.0792 22.2067 43.0369 22.46C42.9947 22.7134 43.0581 22.9245 43.2269 23.0934L44.7469 24.6134ZM46.2669 22.84C46.4358 22.7556 46.5625 22.6289 46.6469 22.46L47.2803 21.1934L47.9136 22.46C47.9981 22.6289 48.1669 22.7556 48.4203 22.84L49.6869 23.0934L48.8003 24.1067C48.6314 24.1911 48.5469 24.3178 48.5469 24.4867L48.8003 25.88L47.5336 25.3734C47.3647 25.2889 47.1958 25.2889 47.0269 25.3734L45.7603 25.88L46.0136 24.4867C46.0136 24.3178 45.9292 24.1911 45.7603 24.1067L44.8736 23.0934L46.2669 22.84Z" fill="#09396F"/>		  </svg>		  
		},
		{
		  id: 4,
		  count: '102',
		  label: t("products_count") ,
		  icon : <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/209396F/svg"><rect x="0.25" width="70" height="70" rx="35" fill="#F9FCFF"/><g clipPath="url(#clip0_489_10793)"><mask id="mask0_489_10793"  style={{maskType : "luminance"}} maskUnits="userSpaceOnUse" x="20" y="18" width="30" height="34"><path d="M20.3809 18.478H49.2942V51.5214H20.3809V18.478Z" fill="white"/></mask><g mask="url(#mask0_489_10793)"><path d="M49.0113 26.5021L35.3133 18.5648C35.2157 18.5082 35.1048 18.4784 34.992 18.4784C34.8791 18.4784 34.7683 18.5082 34.6706 18.5648L20.9726 26.5021C20.8754 26.5594 20.7948 26.6412 20.7391 26.7394C20.6834 26.8375 20.6545 26.9486 20.6553 27.0615V42.9381C20.6549 43.0508 20.684 43.1617 20.7397 43.2597C20.7953 43.3577 20.8756 43.4394 20.9726 43.4968L34.6706 51.4361C34.7682 51.4928 34.8791 51.5227 34.992 51.5227C35.1048 51.5227 35.2157 51.4928 35.3133 51.4361L49.0113 43.4981C49.1087 43.441 49.1893 43.3592 49.2451 43.261C49.301 43.1629 49.33 43.0517 49.3293 42.9388V27.0615C49.3297 26.9486 49.3006 26.8376 49.2448 26.7394C49.189 26.6413 49.1085 26.5595 49.0113 26.5021ZM34.9886 19.8688L47.4046 27.0615L34.9886 34.2548L22.58 27.0615L34.9886 19.8688ZM21.9366 28.1781L34.3526 35.3735V49.7581L21.9373 42.5655V28.1788L21.9366 28.1781ZM35.6346 49.7581V35.3741L48.0466 28.1788V42.5655L35.6346 49.7581Z" fill="#09396F"/><path d="M27.0506 42.3026L24.116 40.6026C24.0244 40.5494 23.921 40.5197 23.8151 40.5161C23.7092 40.5126 23.604 40.5353 23.5091 40.5823C23.4141 40.6294 23.3323 40.6992 23.2709 40.7856C23.2095 40.8719 23.1705 40.9722 23.1573 41.0773C23.1408 41.2036 23.162 41.332 23.2182 41.4464C23.2744 41.5607 23.3632 41.6559 23.4733 41.72L26.408 43.42C26.5183 43.4845 26.6453 43.5146 26.7728 43.5065C26.9003 43.4984 27.0225 43.4524 27.1238 43.3744C27.225 43.2964 27.3007 43.19 27.3411 43.0688C27.3815 42.9476 27.3848 42.8171 27.3506 42.694C27.3062 42.529 27.1984 42.3883 27.0506 42.3026ZM23.4733 38.8146L25.088 39.75C25.1983 39.8146 25.3255 39.8447 25.4531 39.8366C25.5807 39.8285 25.703 39.7824 25.8042 39.7044C25.9055 39.6263 25.9812 39.5198 26.0215 39.3984C26.0618 39.2771 26.065 39.1465 26.0306 39.0233C25.9862 38.8584 25.8784 38.7177 25.7306 38.632L24.116 37.6966C24.0429 37.6542 23.9621 37.6267 23.8783 37.6156C23.7945 37.6046 23.7093 37.6102 23.6277 37.6322C23.5461 37.6542 23.4696 37.6921 23.4027 37.7438C23.3359 37.7955 23.2799 37.8599 23.238 37.9333C23.1529 38.0815 23.1299 38.2574 23.174 38.4225C23.2181 38.5876 23.3257 38.7285 23.4733 38.8146Z" fill="#09396F"/><path fillRule="evenodd" clipRule="evenodd" d="M39.2087 32.556V38.3047L41.9674 34.9487L44.1654 35.4327V29.684L29.8234 21.3727L24.8667 24.242L26.566 25.2273L39.2087 32.556Z" fill="#09396F"/></g></g><defs><clipPath id="clip0_489_10793"><rect width="38" height="38" fill="white" transform="translate(16.25 16)"/></clipPath></defs></svg> 		  
		},
	  ];

	  

  return (
	<div className={cn} >
		{title}
		<div className={`${title ? "" : "max-md:hidden"} container grid grid-cols-4 max-xl:grid-cols-2 py-[40px] gap-[20px] my-[40px]`} >
			
			{cards.map((card, index) => (
				<div key={index} className='min-h-[118px] cursor-default px-[30px] !bg-white rounded-[10px] justify-between items-center inline-flex' style={{boxShadow : "0px 10px 60px 0px #262D7614"}} > 
					<div>
						<h4  className='text-secondery2 t25 capitalize font-semibold rtl:text-right  ' style={{direction : "ltr"}} > + <CountUp  start={0}  end={Number(card.count)}  duration={2}  suffix="k"  enableScrollSpy scrollSpyOnce /></h4>
						<span className='text-secondery2 rtl:t20 ltr:t16 capitalize font-normal almarai' > {card.label} </span>
					</div>
					<div> {card.icon} </div>
				</div>
			))}

		</div>
	</div>
  )
}


