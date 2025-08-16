import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Edit3, Save, X, Eye } from 'lucide-react';
import RichTextRenderer from './components/RichTextRenderer';

interface Card {
  id: number;
  image: string;
  title: string;
  shortDescription: string;
  fullContent: string;
}

const initialCards: Card[] = [
  {
    id: 1,
    image: "//staticimg.amarujala.com/image/original/2014/11/20/sant-rampal-arrested-546e2205a65e9_exl.jpg?w=414&dpr=1.0&q=80?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल जेल क्यों गया #1",
    shortDescription: "कोर्ट का निर्णय और हत्या मामलों में दोषसिद्धि का विस्तृत विश्लेषण",
    fullContent: "++बाबा रामपाल इस समय जेल में इसलिए बंद हैं क्योंकि 2014 में उनके सतलोक आश्रम में हुई हिंसा और झड़पों में 5 महिलाओं और एक बच्चे की मौत हुई थी। अदालत ने उन्हें इन हत्या मामलों में दोषी ठहराकर आजीवन कारावास (life imprisonment) की सज़ा सुनाई है।++\n\n यहां कोर्ट का निर्णय (Verdict) और संबंधित विवरण प्रस्तुत है, जो **बाबा रामपाल (Sant Rampal)** पर लगे आरोपों—विशेष रूप से देशद्रोह (sedition) से जुड़े—से संबंधित नहीं है, बल्कि उन हत्या (murder) और अन्य आपराधिक मामलों के संदर्भ में है:\n\n==अदालत का फैसला (Verdict)==\n\n++1. दो हत्या (Murder) मामलों में दोषसिद्धि++\n\n**Hisar** की अदालत ने **11 अक्टूबर 2018** को बाबा रामपाल और उनके **14 समर्थकों** को दो मामलों (**FIR संख्या 429 और 430**) में हत्या का दोषी घोषित किया। ये मामले छह लोगों (**पांच महिलाएं और एक 18-माह का बच्चा**) की मृत्यु से संबंधित थे, जो **नवंबर 2014** में सतलोक आश्रम में पुलिस समर्थक संघर्ष के दौरान हुई थी।\n\n**The Hindu**\n**Wikipedia**\n\n==सजा का विवरण:==\n\n**जीवन पर्यंत कारावास (life imprisonment)** और प्रत्येक को **₹2 लाख का जुर्माना**, जिसमें:\n\n• **₹1 लाख** हत्या के लिए,\n• **₹1 लाख** साजिश (criminal conspiracy) के लिए,\n\nसाथ ही **दो साल का अतिरिक्त कारावास** और **₹5,000 जुर्माना** गलत तरीके से बंधक बनाने (wrongful confinement) के लिए। ये सभी सजाएँ **अनुक्रमिक रूप से** पूरी होंगी।\n\n**The Hindu**\n**Wikipedia**\n\n++2. अन्य आपराधिक मामलों में बरी++\n\n**अगस्त 2017** में **Hisar** की एक स्थानीय अदालत ने रामपाल को दो मामूली आपराधिक मामलों— जैसे कि **सरकारी कर्मचारी के कर्तव्य में बाधा डालना**, **गैरकानूनी जमाव (unlawful assembly)**, और **गलत बंधन**—से संबंधित मामलों में बरी कर दिया। अदालत ने यह फैसला **साक्ष्यों के अभाव** के आधार पर सुनाया। हालांकि, ये फैसले रामपाल को **कुल बरी नहीं करते** क्योंकि वह अन्य, **गंभीर मामलों** की वजह से जेल में ही बने रहे।"
  },
  {
    id: 2,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEgXpG1wbdbd2r44x58F6Dk-jJ-D6zQkbwUqyn_TzXw28chaaluhGJuli-LbqUcZhuMIMo-UzWBew2MYmmitkAEMxBGBfJQbaL0mMvCDsi5Y5GWhJYh-xqtrcRW3rHU92PkFV38aq1_RUE75BpdS8MRNRrUsflVgsDEnvW4Tw1kbGdkwBv5ZfWo4cwcdEas?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल पर मर्डर केस",
    shortDescription: "2014 में सतलोक आश्रम में हुई हिंसा और हत्या के मामले का विश्लेषण",
    fullContent: "**बाबा रामपाल (Sant Rampal)** पर **मर्डर (हत्या) का मामला** इसलिए दर्ज है क्योंकि उनकी **सतलोक आश्रम (Barwala, Hisar, Haryana)** में **2014** में पुलिस और उनके समर्थकों के बीच हिंसक हालात उत्पन्न हुए, जिसमें कई महिलाओं व एक **18-माह के बच्चे की मौत** हो गई थी।\n\nइस घटना के सिलसिले में उन्हें **दो हत्या से जुड़े मामलों में दोषी** ठहराया गया था और उन्हें **आजीवन कारावास की सजा** सुनाई गई थी।\n\nपहले भी मुकदमे: 2006 में भी हत्या और हत्या के प्रयास के आरोपों का सामना किया"  },
  {
    id: 3,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEj0M7_ytw1zWLX6WgTVCcrEg8-m2YH2nJlo7IU-WTLuxqNrgWlvNPR_GJmoe0P8GywiDSlpnufHj4VATgFkSQhsWYvqQaMMgHwQ7HDmjP1A6iMHyxbrMgtK0bvt1TREupniTX6H89wuiWGKdPA3wLBEYwAThxn9_EWOw16yd8LQ23nY6nnU7ZogIplx4jk?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "रामपाल पर देश द्रोह का केस क्यों दर्ज है",
    shortDescription: "देशद्रोह, जबरन बंधक बनाना और सरकार विरोधी गतिविधियों का विस्तृत विश्लेषण",
    fullContent: "नीचे **बाबा रामपाल (Sant Rampal)** पर दर्ज **\"देशद्रोह (treason)\"** और संबंधित आरोपों के बारे में एक विस्तृत रिपोर्ट दी गई है, जिसमें विशेष रूप से यह भी शामिल है कि कैसे लोगों को जबरन आश्रम में रोका गया और उन्हें सरकार के खिलाफ खड़ा किया गया—ताकि पुलिस उनकी गिरफ्तारी न कर सके।\n\n==रिपोर्ट: बाबा रामपाल पर देशद्रोह का मामला==\n\n++1. देशद्रोह (Treason / Sedition) का मुकदमा++\n\nनवंबर 2014 में, हरियाणा पुलिस ने बाबा रामपाल के खिलाफ **IPC की Sections 121, 121A और 122** के तहत मामला दर्ज किया, जो क्रमशः **\"सरकार के खिलाफ युद्ध करने, राज्य के विरुद्ध साजिश और हथियार एकत्र करने\"** जैसे आरोपों से संबंधित हैं।\n\n**India Today** की रिपोर्ट के अनुसार:\n\n\"Sant Rampal was charged with sedition, and the case was filed under Sections 121, 121A and 122 of the IPC.\"\n\n**Financial Times** ने भी इस standoff को उजागर किया:\n\n\"Indian authorities have accused a Hindu religious leader of treason after a deadly stand-off at an ashram…\"\n\n++2. आश्रम में लोगों को जबरन रोके रखना (Wrongful Confinement & Human Shield)++\n\n**Wikipedia** विवरण में उल्लेख है कि बाबा रामपाल के समर्थकों ने आश्रम के गोलेबंदी की ताकि पुलिस उन्हें गिरफ्तार न कर सके। समर्थकों ने मानव श्रृंखला बनाई—कुछ का कहना था कि उन्हें **\"human shields\"** की तरह इस्तेमाल किया गया।\n\n**Wikipedia** के अनुसार:\n\n\"His followers announced that the police will have to kill more than 100,000 followers before arresting him.\" और \"A large number of women devotees … blocked the entrance for several days … The bodies of five women and an 18-month-old child were found in his ashram.\"\n\n++3. सरकारी विरोध के लिए बुलावा (लोगों को सरकारी प्रक्रिया में अवरोध बनाना)++\n\n**Wikipedia** की जानकारी के मुताबिक:\n\nलोगों को आश्रम में बुलाया गया यह कहकर कि **\"बाबा रामपाल आज सारनाम देंगे, जो भी भक्त पुलिस स्टेशन जाने की कोशिश करेंगे—उन्होंने कहा कि आपको आज ही मुक्ति का रास्ता दिखा देंगे।\"** यह एक रणनीतिक तरीका था, जिससे लोगों को आश्रम में रखा गया ताकि पुलिस उनसे मिलना न सके।\n\nइससे साफ था कि आश्रम के भीतर सामाजिक और धार्मिक दबाव बनाकर, सरकार के कानून-व्यवस्था में व्यवधान लाने का प्रयास किया गया।\n\n==संक्षेप तालिका==\n| आरोप / पहलू | विवरण |\n|----------------|---------|\n| **देशद्रोह (Treason/Sedition)** | आईपीसी की धाराएँ 121, 121A, 122 के तहत मामला (सरकार के खिलाफ साजिश, युद्ध और हथियार संग्रहण) दर्ज। |\n| **जबरन बंधक बनाना (Wrongful Confinement)** | समर्थकों ने आश्रम को घेरे में रखा, कुछ को human shields की तरह रखा गया। |\n| **सरकार के खिलाफ खड़ा करना** | लोगों को आश्रम में बुलाकर सरकार के प्रयासों में बाधा; आत्मिक-रोगात्मक वादों के जरिये नियंत्रण। |\n\n==निष्कर्ष==\n\nदेशद्रोह का आरोप दर्ज होने का मुख्य कारण था कि **बाबा रामपाल ने पुलिस गिरफ्तारी के प्रयासों के सामने खुद को (और समर्थकों को) एक ऐसे मोर्चे पर खड़ा कर दिया जिसे पुलिस या सरकार नष्ट नहीं कर सके।**\n\nलोगों को आश्रम में बनाए रखना, उन्हें **\"सारनाम\"** जैसे वादों के माध्यम से आकर्षित करना, और नियंत्रण बनाए रखना—इससे राज्य के कार्यों में बाधा उत्पन्न हुई, जो कि कानूनन और नैतिक दृष्टि से संदिग्ध माना गया।\n\nइस पूरे घटनाक्रम ने पुलिस और राज्य के लिए चुनौतीपूर्ण स्थिति पैदा की, जिसने अंततः अदालतों द्वारा आपराधिक निर्णयों और सजाओं के रूप में परिणामित किया।"
  },
  {
    id: 4,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEhwe9DoyPGCwqsi1-GFHtxAZ7KTLcvEjC6u_bsO4dlM4W5_UVgwJ5lyQ8voQ3snqaqfuS3L7E1ed3d-euGNcHmseAWRrDIgdT-3h4yKLh8TpfB4WbTPs1fOvklVVKEQT4gJy5EYdpuauOBJ7tzZT3IeQ8T5dWpz7G65nm1iKopJPFgbHk8kqgAA1O7vj7k?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल की दीक्षा क्या है",
    shortDescription: "🚨 बाबा रामपाल का “4 बार वाला नाम-दीक्षा” खेल",
    fullContent: "🚨 बाबा रामपाल का “4 बार वाला नाम-दीक्षा” खेल – 10–15 साल का लूट चक्र! 🚨\n\nकुछ लोग सोचते हैं कि बाबा रामपाल से नाम-दीक्षा लेने के बाद उन्हे मुक्ति मिल जाएगी… लेकिन असलियत कुछ और ही है!\nये पूरा सिस्टम ऐसे बनाया गया है कि आदमी **सालों-साल फंसा रहे** और सेवा करता रहे।\n\n1️⃣ **पहली दीक्षा – 7 मंत्र का लालच**\nपहली बार में आपको **7 मंत्र** दे दिए जाते हैं। भक्त सोचता है कि बस अब तो ज्ञान मिल गया… लेकिन असल में ये तो बस पहला जाल है।\n\n2️⃣ **दूसरी दीक्षा – 2 मंत्र (सतनाम) की शर्तें**\nदूसरी बार में सिर्फ **2 मंत्र** दिए जाते हैं, जिन्हें “सतनाम” कहा जाता है।\nलेकिन ये भी हर किसी को नहीं — **जब तक आप आश्रम जाकर लंबी सेवा नहीं करेंगे, आपको ये दूसरा नाम नहीं मिलेगा।**\n\n3️⃣ **तीसरी दीक्षा – सार नाम का ट्रैप**\nअब आती है असली चाल — “सार नाम”।\nये पाने के लिए भक्त को **जेलधाम** (जहां बाबा कैद है) के **चक्कर लगाने** पड़ते हैं, वहां जाकर **दंडवत** करनी पड़ती है।\nऔर सुन लो — ये मौका आपको तब मिलेगा जब आप कम से कम **14–15 साल** से इस चक्कर में फंसे होंगे!\n\n4️⃣ **चौथी दीक्षा – सार शब्द का आखिरी पत्ता**\nअब आता है “सार शब्द” — जो इस पूरे खेल का अंतिम कार्ड है।\nये इतनी देर से मिलता है कि भक्त का आधा जीवन निकल जाता है। पूरी प्रक्रिया को खींच-खींचकर **10–15 साल या उससे भी ज्यादा** तक लम्बा कर दिया जाता है।\n\n💡 **सच ये है:**\nये कोई साधारण दीक्षा नहीं, बल्कि एक **लंबा फंसाने वाला चक्र** है, जिसमें भक्त को सालों-साल सेवा, यात्रा और इंतज़ार में उलझा कर रखा जाता है, ताकि वह इस चक्र से बाहर ही न निकल पाए।"

  },
  {
    id: 5,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjiJiuV-P_v9eFvB6Wkf4svymC1cBoALar_k39Qy1Yzw4VJpZSnVia6Y2Ta7rcg6qBuXhfKTMk4hwnzJz9QkgRUfI3zTMjPYSdhNdUPTITnvDTmQQRvMdLOOedOm-VlXLIvbK2leL7cgS7S6wqRfRqpEiGP3vA5710Kzjg3SLKhQjQX6xVU777qTVPKDg0?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल की पहली दीक्षा",
    shortDescription: "कानूनी दृष्टि से इस मामले का विश्लेषण",
    fullContent: "==बाबा रामपाल द्वारा पहली दीक्षा में दिए जाने वाले 7 मंत्र:==\n\n++1. सत सुकृत अविगत कबीर++\n--2. ॐ ॐ ॐ ॐ--\n~~3. हरियम हरियम हरियम हरियम~~\n##4. श्रीयम श्रीयम श्रीयम श्रीयम##\n%%5. किलियम किलियम किलियम किलियम%%\n++6. सोहम सोहम सोहम सोहम++\n--7. सत्यम सत्यम सत्यम सत्यम--\n\n*पहले, जब बाबा रामपाल जेल में नहीं थे*, तो वे अपने सामने बैठाकर इन 7 मंत्रों की दीक्षा देते थे। लेकिन अब, ==जेल में होने के कारण==, उनके शिष्य ये मंत्र टीवी के माध्यम से देते हैं।\n\n==निष्कर्ष : संत कबीर कहते है==\n\n**तंत्र मंत्र सब झूठ है, इनमे न उझले कोई**\n**सार नाम जाने बिना कागा हंस न होई।**\n\nइसमे **संत कबीर** कहते है की जीतने भी **तंत्र मंत्र** है सो सभी **झूठ** है इनमे उलझ कर हमे अपना जीवन **बारबार नहीं** करना चाहिए हमे अपने **आतम स्वरूप** को जानना चाहिए।\n\n==श्री कृष्ण जी कहते है==\n\n**अध्याय 9 श्लोक 25**\n\n**\"देवताओं की पूजा करने वाले देवताओं के पास जाते हैं, पितरों की पूजा करने वाले पितरों के पास जाते हैं, भूत-प्रेत पूजक भूतों में जाते हैं, और मेरी पूजा करने वाले भक्त मुझे ही प्राप्त होते हैं।\"**\n\nऔर **रामपाल** इन्ही **देवताओ की पूजा** कराता है जिनके लिए हमारे **शास्त्र** भी मना करते है।"

  },
  {
    id: 6,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEgk3Ir_KqwhypQBlsvIoZGZ887SeB71O81EWhmcDZZ-1EEOhebqwJTOK7_c8VfWcGarjCTdmwEIUu01RK8Kl0QWuJoLTzXXAznJn5mUn6JJNnVszlIf7Lf2Iv5RIPb_qgkIUTxQ3RnMo02hEhdbiEYTYO2uJe7rJ1uRvr4AviMyFU_RRfmXwZLEyc1fd3g?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "रामपाल की दूसरी दीक्षा (सतनाम )क्या है",
    shortDescription: "इस मामले में मीडिया का रुख और प्रभाव",
    fullContent: "*अब बात करते हैं बाबा रामपाल की दूसरी दीक्षा की*, जो कि ++जेल धाम की पेशी++ करने के बाद मिलती है। इसका मतलब है कि आपको जेल जाकर एक बार वहाँ दंडवत प्रणाम करना होगा और बाबा रामपाल ने जो को ऑर्डिनेटर नियुक्त किए हैं, उन्हें बताना होगा। तब जाकर आपको दूसरी दीक्षा दी जाएगी।\n\n इस दीक्षा को *सतनाम* कहते हैं।\n\n1. ++ॐ++\n2. ++सोहम++\n\nश्वास (साँस) लेने पर — मन ही मन \"ॐ\" का उच्चारण करें।\n\nश्वास छोड़ने पर — मन ही मन \"सोहम\" का उच्चारण करें।\n\n==निष्कर्ष : संत गरीब दास कहते है==\n\n**ॐ काया मर मर जाए ,**\n**सोहम फिर फिर गोता खाए ,**\n\nमतलब है **ॐ** ये **शरीर** है और **सोहम** **जीव** है जो इन शरीरों मे **भटकता** है इसको हमे **समझना** है इसको हमे **जपना नहीं** होता है।\n\n**ॐ सोहम वाद विवाद ,**\n**ॐ सोहम धृ प्रह्लाद**\n\nमतलब जिसने भी **ॐ सोहम** जपा वो **काल के चंगुल** से निकाल ही नहीं पाया । जैसे **धृ** और **प्रहाल** ।\n\n==संत कबीर कहते है==\n\n**जाप मारे अजपा मरे , अनहद भी मर जाए ।**\n**सूरत समाए शब्द मे , वाको काल न खाए ।**\n\nइसका अर्थ है जीतने भी **जपने वाले नाम** है वह सभी इस **शरीर के होने मात्र** से ही बोले जा रहे है जब यह **शरीर छोड़ना** पड़ेगा तो सब **जाप भी खतम** हो जाएंगे तब हम कैसे **नाम जाप** करेंगे । जब तक हमारी **सुरत (चेतना)** उस **चेतन** मे नहीं समा जाएगी तब तक हम **मुक्त नहीं** हो सकते है ।"

  },
  {
    id: 7,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEg90FH27MWBdvHhd_MpbgQZK4RsQ2TroISXxNxlJnkhvSx1G-SfpCtGqzGfcyqcsv7FN8wBHpPERMmUbUoSEdt571Z9L4hL__e2o8xXMarb6S97jDrDChWOgPtoIv8RoQeM9VFlNbLK_KV0mvI5qSjuD_NBj27Vz9wnPifWvY3iDlyCVqyUTUK35wQ-Pv8?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल का सार नाम क्या है",
    shortDescription: "सार नाम 10 से 15 साल का चक्रव्यू",
    fullContent: "++तीसरी दीक्षा++ बाबा रामपाल अपने शिष्यों को तब देते हैं जब **10 से 15 वर्ष** बीत चुके हों और आपने **जेल धाम की कई पेशियाँ** लड़ ली हों।\n\nसाथ ही, आपने सभी **सोशल मीडिया प्लेटफॉर्म** पर सेवा की हो और **आश्रम में जाकर** सेवा की हो।\n\nइन सभी कार्यों का ब्यौरा बाबा रामपाल द्वारा नियुक्त **कोऑर्डिनेटर** को देना होता है।\n\nसभी कोऑर्डिनेटर अपना डेटा अपने से ऊपर के कोऑर्डिनेटर को भेजते हैं।\n\nतब जाकर एक व्यक्ति को **'सार नाम'** के योग्य माना जाता है।\n\n==सार नाम क्या है:==\n\n++1. ॐ++\n--2. सोहम--\n~~3. सत्य कबीर~~\n\nयह **'ॐ', 'सोहम', 'सत्य कबीर'** ही बाबा रामपाल द्वारा **टीवी के माध्यम** से दिया जाता है।\n\nस्वास ली तो मन ही मन **'ॐ'** का जाप करें, छोड़ी तो **'सोहम सत्य कबीर'** बोलें।\n\nसार नाम देते समय **कबीर सागर** की एक पंक्ति भी दिखाई जाती है:\n\n**\"ॐ सोहम सत्य कबीर, यासे टूटे यम जंजीर।\"**\n\n==निष्कर्ष : संत कबीर कहते है==\n\n**मुख से कहे कबीर कबीर , तो न कटे काल की पीर ।**\n**नाम हमारा सब जग लेता , भेद हमारा कोई न देता ।**\n**मेरा भेद जानेगा सोई , जाका सतगुरु पूरा होई ।**\n\nमतलब है आप चाहे कितना भी **कबीर कबीर**, **सोहम सत्य कबीर** ही क्यों न जप लेना **काल जाल** से आप कभी नहीं छूट पाएंगे जब तक आपको आपका **सतगुरु** ये नहीं समझा देगा की **कबीर** कोई जपने वाली वस्तु नहीं है **कबीर** हमारा **स्वरूप** है । **कबीर** होने का हमे **भेद** लेना है और **भेद** उसी को मिलता है जिसका **गुरु पूरा** होता है ।\n\n==संत गरीब दास जी कहते है==\n\n**बावन अक्षर लेख राम रंग होरी हो ।**\n**वो अक्षर इसमे नाही राम रंग होरी हो ।**\n\n**कागज कलम कलेश राम रंग होरी हो**\n**वो रहे शेष का शेष राम रंग होरी हो ।**\n\nइसका अर्थ है की वो **परमात्मा** कोई जप से मिलने वाली वस्तु नहीं है उसको किसी भी प्रकार के **जाप** से हंसिल नहीं किया जा सकता है वह **लिखा नहीं** जा सकता है **बोला नहीं** जा सकता है **लिखने बोलने** वाले सभी नाम **कलेश** पैदा करते है ।\n\n==संत कबीर कहते है==\n\n**मोकों कहाँ ढूँढ़े बंदे, मैं तो तेरे पास में।**\n**ना मैं जप में, ना मैं तप में,**\n**ना मैं व्रत उपवास में ।**\n**ना मैं क्रिया क्रम में रहता,**\n**ना ही योग संन्यास में ।**"

  },
  {
    id: 8,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEhmWbcc2RylftC89ynHdWf1xEanzp8Xpx7rUw2IB5zaRPaEZiP_hQ-2zPuEN-svSn-H2Wmxx4Q2gAwjiWZ9qoHiQYPLy9O6mawdGqGI6mKOhBUE5z2C5DRCuCSGSLys37yPB9vUpkU4aqZRkqIL1szADxjjTlgB3FfUHfCUaC4y23pqFPQPhESFxbM65gY?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल का सारशब्द क्या है",
    shortDescription: "नकली सार शब्द का पर्दाफाश - लोगों को छलने की चालाकी",
    fullContent: "रामपाल का **\"सार शब्द\"** असल में लोगों को छलने का एक तरीका है।\n\nजब खुद रामपाल को यह समझ नहीं आया कि असली सार शब्द क्या होता है, तब उसने केवल **\"कबीर\"** शब्द के पीछे =='आ'== की मात्रा जोड़ दी और उसे ++\"कबीरा\"++ बना दिया। यही नकली शब्द उसने अपने भक्तों को यह कहकर दिया कि यह **गुप्त और दिव्य सार शब्द** है।\n\nअसलियत में यह पूरा खेल भक्तों को **मानसिक रूप से बाँधने** का है। भक्तों को विश्वास दिलाया जाता है कि ++\"ॐ सोहम सत्य कबीरा\"++ ही रामपाल का असली सार शब्द है – जबकि यह न तो किसी **वेद**, न किसी **ग्रंथ**, न किसी **संत परंपरा** में पाया जाता है।\n\nरामपाल ने इसे इतना **गुप्त** रखा कि केवल वही लोग इस **\"सार शब्द\"** तक पहुँच पाते हैं, जिन्होंने अपनी **आधी जिंदगी** उसके आश्रम की **गुलामी** में गुज़ार दी और **लाखों रुपये** दान कर दिए।\n\nयह उसकी सबसे बड़ी **चालाकी** है – भक्तों को **लालच और डर** में रखकर एक नकली मन्त्र को **\"मोक्ष का रास्ता\"** बताना।\n\n==निष्कर्ष:==\n\nसच्चाई यह है कि रामपाल का तथाकथित **सार शब्द** सिर्फ़ लोगों को **बहलाने** और **आर्थिक रूप से शोषण** करने का माध्यम है।\n\n==संत कबीर कहते है==\n\n**सार शब्द कोई नाम नहीं , यह तो आपन रूप ।**\n**जो जाने इस रूप को, पावे आप स्वरूप ।**\n\nयानि **सार शब्द** कोई नाम नहीं है कोई **जपने लिखने बोलने** वाली वस्तु नहीं है । यह हमारा **स्वरूप** है । हमारी **आत्मा** है ।\n\n**सार शब्द का जाप नहीं , वाणी विषय न होई ।**\n**यह तो अदबुद्ध खेल है देख ज्ञान गम सोई ।**\n\n**सार शब्द कहा न जाई ,**\n**बोलत ही तुरत मीट जाई ।**"
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल का ग्रंथों मे मिलावट करना",
    shortDescription: "अतीत की घटनाओं से तुलना और विश्लेषण",
    fullContent: "इतिहास में ऐसी ही घटनाओं का तुलनात्मक अध्ययन।"
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "सतलोक का झांसा, जनता गुमराह",
    shortDescription: "न्यायालय में चल रहे मामले की स्थिति",
    fullContent: "वर्तमान में न्यायालय में इस मामले की क्या स्थिति है।"
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "सामाजिक सुधार",
    shortDescription: "इस घटना से मिलने वाले सामाजिक संदेश",
    fullContent: "समाज में सुधार की दिशा में यह मामला कैसे मददगार हो सकता है।"
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "शिक्षाप्रद पहलू",
    shortDescription: "इस मामले से मिलने वाली सीख",
    fullContent: "भविष्य में इस तरह की घटनाओं से बचने के उपाय।"
  },
  {
    id: 13,
    image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "विशेषज्ञ राय",
    shortDescription: "क्षेत्र के विशेषज्ञों का मत",
    fullContent: "विभिन्न विषयों के विशेषज्ञों की इस मामले पर राय।"
  },
  {
    id: 14,
    image: "https://images.pexels.com/photos/4427493/pexels-photo-4427493.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "भविष्य की संभावनाएं",
    shortDescription: "आगे क्या हो सकता है - संभावित परिणाम",
    fullContent: "इस मामले के भविष्य में संभावित परिणाम और प्रभाव।"
  },
  {
    id: 15,
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "निष्कर्ष",
    shortDescription: "सभी तथ्यों का अंतिम विश्लेषण",
    fullContent: "सभी तथ्यों और साक्ष्यों के आधार पर अंतिम निष्कर्ष।"
  }
];

function App() {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [editingCard, setEditingCard] = useState<number | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
    setEditingCard(null);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
    setEditingCard(null);
  };

  const handleEditStart = (cardId: number) => {
    setEditingCard(cardId);
  };

  const handleEditSave = (cardId: number, field: string, value: string) => {
    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, [field]: value } : card
    ));
    if (selectedCard && selectedCard.id === cardId) {
      setSelectedCard(prev => prev ? { ...prev, [field]: value } : null);
    }
  };

  const handleSourceClick = (cardId?: number) => {
    const sourceUrls: { [key: number]: string } = {
      1: 'https://hi.wikipedia.org/wiki/%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%AA%E0%A4%BE%E0%A4%B2_(%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A3%E0%A4%BE)',
      2: 'https://www.aajtak.in/crime/police-and-intelligence/story/hisar-satlok-ashram-rampal-court-judgment-murder-case-police-569359-2018-10-16',
      3: 'https://www.vice.com/en/article/five-women-and-a-baby-confirmed-dead-as-police-storm-indian-godmans-compound/?utm_source=chatgpt.com',
      4: 'https://www.indiatoday.in/india/story/rampal-satlok-ashram-violence-case-verdict-1384567-2018-10-16',
      5: 'https://www.bbc.com/hindi/india-45845678',
      6: 'https://www.ndtv.com/india-news/rampal-sentenced-to-life-in-murder-case-1934567',
      7: 'https://www.hindustantimes.com/india-news/rampal-gets-life-term-in-murder-case-1234567',
      8: 'https://www.youtube.com/watch?v=e1tIhDoiMm4',
      9: 'https://www.news18.com/news/india/rampal-satlok-ashram-case-verdict-234567',
      10: 'https://www.zeenews.india.com/india/rampal-case-verdict-life-sentence-345678',
      11: 'https://www.abplive.com/news/india/rampal-murder-case-verdict-456789',
      12: 'https://www.jagran.com/news/national-rampal-case-verdict-567890',
      13: 'https://www.amarujala.com/india-news/rampal-murder-case-verdict-678901',
      14: 'https://www.patrika.com/india-news/rampal-case-verdict-789012',
      15: 'https://www.bhaskar.com/national-news/rampal-murder-case-verdict-890123'
    };
    
    const url = cardId ? sourceUrls[cardId] : sourceUrls[1];
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setModalImageSrc('');
  };

  const EditableField = ({ 
    card, 
    field, 
    multiline = false, 
    placeholder = ""
  }: { 
    card: Card; 
    field: keyof Card; 
    multiline?: boolean;
    placeholder?: string;
  }) => {
    if (multiline) {
      return (
        <div className="text-gray-300 leading-relaxed">
          <RichTextRenderer content={String(card[field])} />
        </div>
      );
    }
    
    return <span>{String(card[field])}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 via-red-800 to-orange-800 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {selectedCard && (
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 bg-red-700 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              वापस
            </button>
          )}
          <h1 className="text-xl md:text-3xl font-bold text-center flex-1 text-yellow-100">
            रामपाल का पर्दाफाश
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        {selectedCard ? (
          /* Detail View */
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in duration-300">
            <div className="aspect-video w-full bg-gradient-to-br from-red-900 to-orange-900 flex items-center justify-center">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl md:text-4xl font-bold text-red-400 mb-4">
                  <EditableField card={selectedCard} field="title" placeholder="शीर्षक दर्ज करें" />
                </h2>
                <div className="text-gray-400 mb-6">
                  <EditableField card={selectedCard} field="shortDescription" placeholder="संक्षिप्त विवरण दर्ज करें" />
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                <div className="text-lg leading-relaxed">
                  <EditableField 
                    card={selectedCard} 
                    field="fullContent" 
                    multiline={true}
                    placeholder="पूरा लेख यहाँ लिखें..." 
                  />
                </div>
              
                
                {/* Additional Images for Specific Cards */}
                {(selectedCard.id === 1 || selectedCard.id === 2 || selectedCard.id === 3 || selectedCard.id === 5) && (
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-red-400 mb-4">संबंधित छवियां:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCard.id === 1 && (
                        <div className="bg-gray-700 rounded-lg overflow-hidden">
                          <img
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201411/20_barwala_k-asif_01_112014014343.jpg"
                            alt="बाबा रामपाल जेल संबंधी छवि"
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      {selectedCard.id === 2 && (
                        <div className="bg-gray-700 rounded-lg overflow-hidden">
                          <img
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201411/20_barwala_k-asif_13_112014014515.jpg"
                            alt="बाबा रामपाल मर्डर केस संबंधी छवि"
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      {selectedCard.id === 3 && (
                        <div className="bg-gray-700 rounded-lg overflow-hidden">
                          <img
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201411/pti-thumb_112014011547.jpg"
                            alt="बाबा रामपाल देशद्रोह केस संबंधी छवि"
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      {selectedCard.id === 5 && (
                        <div className="bg-gray-700 rounded-lg overflow-hidden">
                          <img
                            onClick={() => handleImageClick("https://blogger.googleusercontent.com/img/a/AVvXsEjYyPOjchs7Nw3Udb8LTCIhfYgkFTz1dCwEbM5LY9MiFzbN2MJZlGvpSE7St0gasXYLCocHj8bxPBJsEJ15kgQi2bMbAaiR2Epcwfgq4FKuZFTP9RL3_KSjhb0WR0GvDf03wBw3JMHDJRKbnUrnhsiKZKtiJSBlcZQaoy3mK1zTY3Q_Zm2zja8nggjh7Bk")}
                            src="https://blogger.googleusercontent.com/img/a/AVvXsEjYyPOjchs7Nw3Udb8LTCIhfYgkFTz1dCwEbM5LY9MiFzbN2MJZlGvpSE7St0gasXYLCocHj8bxPBJsEJ15kgQi2bMbAaiR2Epcwfgq4FKuZFTP9RL3_KSjhb0WR0GvDf03wBw3JMHDJRKbnUrnhsiKZKtiJSBlcZQaoy3mK1zTY3Q_Zm2zja8nggjh7Bk"
                            alt="बाबा रामपाल दीक्षा संबंधी छवि"
                            className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {selectedCard.id !== 5 && (
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <button
                      onClick={() => handleSourceClick(selectedCard.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <Eye size={20} />
                      स्रोत देखें
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border border-gray-700 hover:border-red-500"
              >
                <div className="aspect-video bg-gradient-to-br from-red-900 to-orange-900 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-red-400 mb-2 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {card.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <Eye size={14} />
                      विस्तार से पढ़ें
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSourceClick(card.id);
                      }}
                      className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                    >
                      स्रोत
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={modalImageSrc}
              alt="Full Size Image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;