import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
    return (
        <Container>
            {/* HERO */}
            <Hero />

            {/* AVANTAJLAR */}
            <SectionTitle
                preTitle="Bakren Solar Enerji"
                title="Güneşten Gücünü Alan İşletmeler İçin"
            >
                Bakren Solar Enerji, işletmelere özel fotovoltaik sistem çözümleri
                sunarak enerji maliyetlerini düşürür, sürdürülebilir bir geleceğe katkı
                sağlar. Güneşten aldığınız gücü verimliliğe dönüştürün.
            </SectionTitle>

            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />

            {/* VİDEO */}
            <SectionTitle
                preTitle="Tanıtım Videosu"
                title="Enerji Dönüşümünüzü Bizimle Başlatın"
            >
                Güneş enerjisi sistemlerinin kurulum süreçlerini ve işletmelere
                sağladığı avantajları kısa tanıtım videomuzdan keşfedin. Her panel,
                geleceğe yapılan bir yatırımdır.
            </SectionTitle>

            <Video videoId="fZ0D0cnR88E" />

            {/* REFERANSLAR */}
            <SectionTitle preTitle="Referanslar" title="İş Ortaklarımızdan Yorumlar">
                İş ortaklarımızın bizimle çalışırken yaşadığı deneyimleri dinleyin.
                Güven, sürdürülebilir iş ilişkilerinin temelidir.
            </SectionTitle>

            <Testimonials />

            {/* SIK SORULANLAR */}
            <SectionTitle preTitle="SSS" title="Sıkça Sorulan Sorular">
                Güneş enerjisi sistemleri hakkında en çok merak edilen konuları sizin
                için derledik. Doğru bilgi, doğru kararı getirir.
            </SectionTitle>

            <Faq />

            {/* ÇAĞRI (CTA) */}
            <Cta />
        </Container>
    );
}