import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Güneş Enerjisinde Güvenilir Çözümler",
  desc: "Barken Solar, işletmeler için enerji verimliliğini artıran, uzun ömürlü ve sürdürülebilir sistemler geliştirir.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Kurumsal Enerji Analizi",
      desc: "İşletmenize özel enerji verimliliği raporu ve sistem tasarımı.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Profesyonel Kurulum",
      desc: "Alanında uzman mühendis ekibimizle projelerinizi anahtar teslim yönetiyoruz.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Uzaktan İzleme & Bakım",
      desc: "Tüm sistem performansını bulut tabanlı takip panelimizden izleyin.",
      icon: <SunIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Sürdürülebilirlikte Stratejik Ortağınız",
  desc: "Barken Solar, kurumların karbon ayak izini azaltırken maliyet avantajı sağlar. Güneş enerjisini geleceğinize yatırım haline getirin.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Uzun Ömürlü Sistemler",
      desc: "Yüksek verimli panellerle 25 yıla kadar performans garantisi.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Teknik Servis & Garanti",
      desc: "Tüm sistemlerimiz garanti kapsamında ve anlık müdahale desteğiyle korunur.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Geleceğe Hazır Altyapı",
      desc: "Akıllı şehir ve e-mobilite sistemleriyle entegre çalışır.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
