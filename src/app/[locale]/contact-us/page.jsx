"use client"
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import TextArea from '@/components/atoms/TextArea'
import { CountryCode } from '@/constants/CountryCode'
import { hookSignUp } from '@/hooks/hookSignUp'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Page() {

  const t = useTranslations("contact-us")
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
  

  const  contactInfo = [
    { key : "facebook"      , name : t("visit_us_now")     , value : t("facebook_url")        , icon : <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:fill-[#1A4475] duration-300 ' x="0.125" y="0.5" width="70" height="70" rx="35" fill="#F2F7FD"/><path className=' group-hover:stroke-white duration-300 ' d="M43.0417 19.6667H38.2917C36.192 19.6667 34.1784 20.5007 32.6937 21.9854C31.2091 23.4701 30.375 25.4837 30.375 27.5833V32.3333H25.625V38.6667H30.375V51.3333H36.7083V38.6667H41.4583L43.0417 32.3333H36.7083V27.5833C36.7083 27.1634 36.8751 26.7607 37.1721 26.4637C37.469 26.1668 37.8717 26 38.2917 26H43.0417V19.6667Z" stroke="#09396F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>},
    { key : "whatsapp"      , name : t("whatsapp_contact") , value : t("sample_phone_number") , icon : <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:fill-[#1A4475] duration-300 ' x="0.375" width="70" height="70" rx="35" fill="#FFF7EF"/><path className=' group-hover:stroke-white duration-300 ' d="M44.8437 33.0842V39.4175C44.8437 39.8292 44.8278 40.225 44.7803 40.605C44.4162 44.88 41.8987 47.0016 37.2595 47.0016H36.6262C36.2303 47.0016 35.8503 47.1917 35.6128 47.5083L33.7128 50.0417C32.8737 51.1658 31.512 51.1658 30.6728 50.0417L28.7728 47.5083C28.567 47.2392 28.1078 47.0016 27.7595 47.0016H27.1262C22.0753 47.0016 19.542 45.7508 19.542 39.4175V33.0842C19.542 28.445 21.6795 25.9275 25.9387 25.5633C26.3187 25.5158 26.7145 25.5 27.1262 25.5H37.2595C42.3103 25.5 44.8437 28.0333 44.8437 33.0842Z" stroke="#F9A51A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path className=' group-hover:stroke-white duration-300 ' d="M51.1768 26.7508V33.0842C51.1768 37.7392 49.0393 40.2408 44.7801 40.605C44.8276 40.225 44.8435 39.8292 44.8435 39.4175V33.0842C44.8435 28.0333 42.3101 25.5 37.2593 25.5H27.126C26.7143 25.5 26.3185 25.5158 25.9385 25.5633C26.3026 21.3042 28.8201 19.1667 33.4593 19.1667H43.5926C48.6435 19.1667 51.1768 21.7 51.1768 26.7508Z" stroke="#F9A51A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path className=' group-hover:stroke-white duration-300 ' d="M37.7425 36.9792H37.7568" stroke="#F9A51A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path className=' group-hover:stroke-white duration-300 ' d="M32.2015 36.9792H32.2158" stroke="#F9A51A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path className=' group-hover:stroke-white duration-300 ' d="M26.6595 36.9792H26.6738" stroke="#F9A51A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>},
    { key : "email"         , name : t("email_address")    , value : t("company_email")       , icon : <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:fill-[#1A4475] duration-300 ' x="0.125" y="0.5" width="70" height="70" rx="35" fill="#FFF7EF"/><path className=' group-hover:stroke-white duration-300 ' d="M50.9587 37.0517V41.0417C50.9587 46.5834 47.792 48.9584 43.042 48.9584H27.2087C22.4587 48.9584 19.292 46.5834 19.292 41.0417V29.9584C19.292 24.4167 22.4587 22.0417 27.2087 22.0417H43.042C47.792 22.0417 50.9587 24.4167 50.9587 29.9584" stroke="#F9A51A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path className=' group-hover:stroke-white duration-300 ' d="M43.0413 30.75L38.0855 34.7083C36.4547 36.0067 33.7788 36.0067 32.148 34.7083L27.208 30.75" stroke="#F9A51A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>},
    { key : "location"      , name : t("our_location")     , value : t("dubai_uae")           , icon : <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:fill-[#1A4475] duration-300 ' x="0.375" width="70" height="70" rx="35" fill="#F2F7FD"/><path className=' group-hover:stroke-white duration-300 ' d="M35.3746 37.2642C38.1029 37.2642 40.3146 35.0524 40.3146 32.3242C40.3146 29.5959 38.1029 27.3842 35.3746 27.3842C32.6463 27.3842 30.4346 29.5959 30.4346 32.3242C30.4346 35.0524 32.6463 37.2642 35.3746 37.2642Z" stroke="#09396F" stroke-width="1.5"/><path className=' group-hover:stroke-white duration-300 ' d="M22.107 29.4425C25.2262 15.7309 45.5404 15.7467 48.6437 29.4584C50.4645 37.5017 45.4612 44.31 41.0754 48.5217C37.8929 51.5934 32.8579 51.5934 29.6595 48.5217C25.2895 44.31 20.2862 37.4859 22.107 29.4425Z" stroke="#09396F" stroke-width="1.5"/></svg>},
  ]


  const handleClick = (key, value) => {
    switch (key) {
        case "facebook":
            window.open(value, "_blank");
            break;
        case "whatsapp":
            window.open(`https://wa.me/${value.replace(/\D/g, '')}`, "_blank"); // فتح واتساب مع إزالة أي رموز غير رقمية
            break;
        case "email":
            window.location.href = `mailto:${value}`; // فتح تطبيق البريد الإلكتروني
            break;
        case "location":
            window.open(`https://www.google.com/maps/search/?q=${encodeURIComponent(value)}`, "_blank"); // فتح خرائط جوجل بالموقع
            break;
        default:
            console.warn("Unknown contact method");
    }
};



  return (
	<div>
    <div className=' relative w-full h-[300px]' >
      <Image data-aos="fade-down"  className=' w-full h-full object-cover '  src={'/imgs/frame-left.png'} alt='' width={1500} height={300} />
      <h1 data-aos="zoom-in" className='absolute left-[50%] top-[50%] !translate-x-[-50%]   text-[35px] font-[600] text-white ' > {t("contact_us_button")} </h1>
    </div>

    <div className="container my-[40px] py-[30px] lg:px-[50px] grid grid-cols-[1fr,520px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-[30px]  items-start max-xl:gap-[20px] gap-[100px]  ">
      
      <form action="" className='flex flex-col gap-[20px] ' >
        <Input dataAos={"fade-up"} delay="100" required={true}  cnInput={"text-[13px]"} cnLabel={"font-[400] text-[14px] text-[#333333]"}  KEY={"full_name"}       error={errors?.full_name}       type={"text"}     register={register("full_name")}       place={t("full_name")}         label={t("full_name")}  />
        <Input dataAos={"fade-up"} delay="200" required={true}  cnInput={"text-[13px]"} cnLabel={"font-[400] text-[14px] text-[#333333]"}  KEY={"email"}            error={errors?.email}            type={"email"}    register={register("email")}            place={t("email")}        label={t("email")}  />
        
        <div data-aos={"fade-up"} data-aos-delay="300" className='grid grid-cols-[1fr,150px] gap-[20px] max-sm:grid-cols-1 ' >
          <Input required={true}  cnInput={"text-[13px]"} cnLabel={"font-[400] text-[14px] text-[#333333]"}  KEY={"mobile_number"}     error={errors?.mobile_number}     type={"text"}     register={register("mobile_number")}     place={t("phone_number")} label={t("phone_number")}  />
          <Select cnInput={"text-[13px]"} required={true} data={CountryCode} KEY={"countryCode"} cn="" error={errors?.countryCode}  watch={watch} setValue={setValue} trigger={trigger} place={t("phone_code")} label={t("phone_code")}  />
        </div>

        <TextArea dataAos={"fade-up"} delay="400" cnInput={"text-[13px]"} cnLabel={""} required={true} KEY={"message"}     error={errors?.message}    register={register("message")}     place={t("message_text")} label={t("message_content")}  />
        <Button dataAos={"fade-up"} delay="500" name={t("contact_us_button")} cn={"  !max-w-full !w-full mx-auto  hover:bg-opacity-90  bg-secondery "} />
      </form>

      <div className="max-md:mt-[50px] grid max-lg:h-full grid-cols-2 max-lg:grid-cols-1 gap-[20px] lg:mt-[20px] ">
        {
          contactInfo.map((info, index) => (
            <div onClick={()=> handleClick(info.key , info.value) } data-aos={"fade-up"} data-aos-delay={`${index+1}00`} key={index} className=' group hover:bg-secondery duration-300 cursor-pointer  flex flex-col max-lg:flex-row max-lg:gap-[10px] px-[10px] max-sm:justify-start items-center justify-center rounded-[10px] gap-[10px] lg:h-[250px] py-[10px] ' style={{boxShadow : "0px 10px 60px 0px #262D7614"}} >
              <span> {info.icon} </span>
              <div className='flex flex-col gap-[5px]  justify-center max-xl:items-start items-center  ' >
                <h2 className=' group-hover:text-white lg:mt-[25px] text-[20px] font-[400] text-secondery '> {info.name} </h2>
                <a href={ ['face' , "email"].includes(info.key) && info.value} target='_blank' className=' xl:text-center text-[17px] font-[300] text-[#B0B0B0]'> {info.value} </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
  )
}
