import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Edit3, Save, X, Eye } from 'lucide-react';

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
    shortDescription: "इस मामले में छुपे हुए तथ्यों का विस्तृत विश्लेषण",
    fullContent:"रामपाल एक भारतीय आध्यात्मिक नेता और <कबीर पंथ> के अनुयायी हैं, जो सतलोक आश्रम के संस्थापक भी हैं।. 2014 में, उन्हें हत्या और अन्य अपराधों के आरोप में गिरफ्तार किया गया था और उम्रकैद की सजा सुनाई गई थी। रामपाल जेल में क्यों है?रामपाल को 2014 में गिरफ्तार किया गया था, जब उनके आश्रम में एक बड़ा विवाद हुआ था। पुलिस ने उनके आश्रम में छापेमारी की और पाया कि वहां कई लोगों को बंधक बनाया गया था। इसके अलावा, रामपाल पर हत्या और अन्य अपराधों का आरोप लगाया गया था। 2018 में, उन्हें हत्या और आपराधिक साजिश के आरोप में आजीवन कारावास की सजा सुनाई गई, द हिंदू के अनुसार. उन्हें गलत तरीके से बंधक बनाने के लिए भी दो साल की सजा सुनाई गई थी। रामपाल को इन अपराधों के लिए जेल में रखा गया है।"
  },
  {
    id: 2,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEgXpG1wbdbd2r44x58F6Dk-jJ-D6zQkbwUqyn_TzXw28chaaluhGJuli-LbqUcZhuMIMo-UzWBew2MYmmitkAEMxBGBfJQbaL0mMvCDsi5Y5GWhJYh-xqtrcRW3rHU92PkFV38aq1_RUE75BpdS8MRNRrUsflVgsDEnvW4Tw1kbGdkwBv5ZfWo4cwcdEas?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "गुप्त दस्तावेज़",
    shortDescription: "बाबा रामपाल पर मर्डर कैस क्यों दर्ज है",
    fullContent: "इन गुप्त दस्तावेज़ों में कई चौंकाने वाले तथ्य हैं जो पहले कभी सामने नहीं आए हैं।"
  },
  {
    id: 3,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEj0M7_ytw1zWLX6WgTVCcrEg8-m2YH2nJlo7IU-WTLuxqNrgWlvNPR_GJmoe0P8GywiDSlpnufHj4VATgFkSQhsWYvqQaMMgHwQ7HDmjP1A6iMHyxbrMgtK0bvt1TREupniTX6H89wuiWGKdPA3wLBEYwAThxn9_EWOw16yd8LQ23nY6nnU7ZogIplx4jk?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "रामपाल पर देश द्रोह का केस क्यों दर्ज है",
    shortDescription: "प्रत्यक्षदर्शियों के अनुभव और साक्ष्य",
    fullContent: "कई प्रत्यक्षदर्शियों ने अपनी गवाही दी है जो इस पूरे मामले को एक नया मोड़ देती है।"
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
    fullContent: "बाबा रामपाल द्वारा पहली दीक्षा में दिए जाने वाले 7 मंत्र:\n\n1. सत सुकृत अविगत कबीर\n2. ॐ ॐ ॐ ॐ\n3. हरियम हरियम हरियम हरियम\n4. श्रीयम श्रीयम श्रीयम श्रीयम\n5. किलियम किलियम किलियम किलियम\n6. सोहम सोहम सोहम सोहम\n7. सत्यम सत्यम सत्यम सत्यम\n\nपहले, जब बाबा रामपाल जेल में नहीं थे, तो वे अपने सामने बैठाकर इन 7 मंत्रों की दीक्षा देते थे। लेकिन अब, जेल में होने के कारण, उनके शिष्य ये मंत्र टीवी के माध्यम से देते हैं।\n\nअब बात करते हैं बाबा रामपाल की दूसरी दीक्षा की, जो कि जेल धाम की पेशी करने के बाद मिलती है। इसका मतलब है कि आपको जेल जाकर एक बार वहाँ दंडवत प्रणाम करना होगा और बाबा रामपाल ने जो कोऑर्डिनेटर नियुक्त किए हैं, उन्हें बताना होगा। तब जाकर आपको दूसरी दीक्षा दी जाएगी।\n\nइस दीक्षा को 'सतनाम' कहते हैं। इसमें सांस लेते समय मन ही मन 'ॐ' बोलना है और सांस छोड़ते समय मन ही मन 'सोहम' बोलना है। ये शब्द केवल मन में जपने हैं, बोलकर नहीं।"

  },
  {
    id: 6,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEgk3Ir_KqwhypQBlsvIoZGZ887SeB71O81EWhmcDZZ-1EEOhebqwJTOK7_c8VfWcGarjCTdmwEIUu01RK8Kl0QWuJoLTzXXAznJn5mUn6JJNnVszlIf7Lf2Iv5RIPb_qgkIUTxQ3RnMo02hEhdbiEYTYO2uJe7rJ1uRvr4AviMyFU_RRfmXwZLEyc1fd3g?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "रामपाल की दूसरी दीक्षा (सतनाम )क्या है",
    shortDescription: "इस मामले में मीडिया का रुख और प्रभाव",
    fullContent: "बाबा रामपाल की दूसरी दीक्षा\n\nदूसरी दीक्षा जेल धाम की पेशी करने के बाद मिलती है।\nइसका अर्थ है कि आपको एक बार जेल जाकर वहाँ दंडवत प्रणाम करना होगा और बाबा रामपाल द्वारा नियुक्त कोऑर्डिनेटर को इसकी सूचना देनी होगी।\nतब जाकर आपको दूसरी दीक्षा दी जाएगी।\n\nइस दीक्षा को \"सतनाम\" कहा जाता है।\n\n1. ॐ\n2. सोहम\n\nश्वास (साँस) लेने पर — मन ही मन \"ॐ\" का उच्चारण करें।\n\nश्वास छोड़ने पर — मन ही मन \"सोहम\" का उच्चारण करें।"


  },
  {
    id: 7,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEg90FH27MWBdvHhd_MpbgQZK4RsQ2TroISXxNxlJnkhvSx1G-SfpCtGqzGfcyqcsv7FN8wBHpPERMmUbUoSEdt571Z9L4hL__e2o8xXMarb6S97jDrDChWOgPtoIv8RoQeM9VFlNbLK_KV0mvI5qSjuD_NBj27Vz9wnPifWvY3iDlyCVqyUTUK35wQ-Pv8?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल का सार नाम क्या है",
    shortDescription: "समुदाय पर पड़े प्रभावों का अध्ययन",
    fullContent: "तीसरी दीक्षा बाबा रामपाल अपने शिष्यों को तब देते हैं जब 10 से 15 वर्ष बीत चुके हों और आपने जेल धाम की कई पेशियाँ लड़ ली हों।\nसाथ ही, आपने सभी सोशल मीडिया प्लेटफॉर्म पर सेवा की हो और आश्रम में जाकर सेवा की हो।\nइन सभी कार्यों का ब्यौरा बाबा रामपाल द्वारा नियुक्त कोऑर्डिनेटर को देना होता है।\nसभी कोऑर्डिनेटर अपना डेटा अपने से ऊपर के कोऑर्डिनेटर को भेजते हैं।\nतब जाकर एक व्यक्ति को 'सार नाम' के योग्य माना जाता है।\n\nसार नाम क्या है:\n1. ॐ\n2. सोहम\n3. सत्य कबीर\n\nयह 'ॐ', 'सोहम', 'सत्य कबीर' ही बाबा रामपाल द्वारा टीवी के माध्यम से दिया जाता है।\nस्वास ली तो मन ही मन 'ॐ' का जाप करें, छोड़ी तो 'सोहम सत्य कबीर' बोलें।\n\nसार नाम देते समय *कबीर सागर* की एक पंक्ति भी दिखाई जाती है:\n\"ॐ सोहम सत्य कबीर, यासे टूटे यम जंजीर।\""

  },
  {
    id: 8,
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEhmWbcc2RylftC89ynHdWf1xEanzp8Xpx7rUw2IB5zaRPaEZiP_hQ-2zPuEN-svSn-H2Wmxx4Q2gAwjiWZ9qoHiQYPLy9O6mawdGqGI6mKOhBUE5z2C5DRCuCSGSLys37yPB9vUpkU4aqZRkqIL1szADxjjTlgB3FfUHfCUaC4y23pqFPQPhESFxbM65gY?auto=compress&cs=tinysrgb&w=300&h=200",
    title: "बाबा रामपाल का सारशब्द क्या है",
    shortDescription: "विदेशी मीडिया और विशेषज्ञों की राय",
    fullContent: "अंतर्राष्ट्रीय स्तर पर इस मामले को कैसे देखा जा रहा है।"
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

  const handleSourceClick = () => {
    window.open('https://hi.wikipedia.org/wiki/%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%AA%E0%A4%BE%E0%A4%B2_(%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A3%E0%A4%BE)', '_blank');
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
    const [value, setValue] = useState(String(card[field]));
    const isEditing = editingCard === card.id;

    useEffect(() => {
      setValue(String(card[field]));
    }, [card, field]);

    const handleSave = () => {
      handleEditSave(card.id, field, value);
      setEditingCard(null);
    };

    if (!isEditing) {
      return (
        <div className="group relative">
          {multiline ? (
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {String(card[field])}
            </p>
          ) : (
            <span>{String(card[field])}</span>
          )}
          <button
            onClick={() => handleEditStart(card.id)}
            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
          >
            <Edit3 size={12} />
          </button>
        </div>
      );
    }

    return (
      <div className="flex gap-2 items-start">
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-red-500 min-h-[100px] resize-none"
            rows={4}
          />
        ) : (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-red-500"
          />
        )}
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          <Save size={16} />
        </button>
        <button
          onClick={() => setEditingCard(null)}
          className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded"
        >
          <X size={16} />
        </button>
      </div>
    );
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
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button
                    onClick={handleSourceClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <Eye size={20} />
                    स्रोत देखें
                  </button>
                </div>
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
                        handleSourceClick();
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
    </div>
  );
}

export default App;