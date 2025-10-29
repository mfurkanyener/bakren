import { Container } from "@/components/Container";
import Image from "next/image";

export default function Services() {
    return (
        <main className="bg-white dark:bg-cinder text-gray-700 dark:text-gray-300">
            <Container>
                {/* Başlık */}
                <section className="py-20 text-center">
                    <h1 className="text-4xl font-bold text-flame mb-4">
                        Hizmetlerimiz
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Barken Solar Enerji olarak, yenilenebilir enerji alanında işletmenize
                        özel çözümler sunuyoruz. Her projede; verimlilik, sürdürülebilirlik
                        ve uzun vadeli enerji bağımsızlığını hedefliyoruz.
                    </p>
                </section>

                {/* Hizmet Alanları */}
                <section className="grid gap-12 lg:grid-cols-2 py-10">
                    {/* 1. Hizmet */}
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-semibold text-flame">
                            📡 Güneş Enerjisi Sistem Kurulumu
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Endüstriyel ve ticari işletmeler için anahtar teslimi fotovoltaik
                            sistem çözümleri sunuyoruz. Proje keşfinden montajına kadar tüm
                            süreci uzman ekibimizle yönetiyoruz.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Çatı ve arazi tipi GES kurulumu</li>
                            <li>Panel, inverter ve kablolama seçimi</li>
                            <li>Test, devreye alma ve bakım planlaması</li>
                        </ul>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/img/solar-installation.jpg"
                            alt="Solar kurulum"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* 2. Hizmet */}
                    <div className="rounded-lg overflow-hidden shadow-md order-2 lg:order-none">
                        <Image
                            src="/img/energy-audit.jpg"
                            alt="Enerji analizi"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-semibold text-flame">
                            ⚙️ Enerji Verimlilik Danışmanlığı
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Mevcut enerji tüketiminizi analiz ederek, maliyetleri azaltmanızı
                            ve karbon ayak izinizi düşürmenizi sağlıyoruz.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Enerji tüketim raporlaması</li>
                            <li>Verimlilik optimizasyonu</li>
                            <li>Karbon azaltım stratejileri</li>
                        </ul>
                    </div>

                    {/* 3. Hizmet */}
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-semibold text-flame">
                            🔋 Bakım ve Performans Takibi
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Kurulum sonrası tüm sistemlerinizin maksimum performansla
                            çalışması için sürekli izleme ve periyodik bakım hizmeti sunuyoruz.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Uzaktan izleme sistemleri</li>
                            <li>Periyodik saha bakımları</li>
                            <li>Arıza tespiti ve hızlı müdahale</li>
                        </ul>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/img/maintenance.jpg"
                            alt="Bakım hizmeti"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                {/* CTA Alanı */}
                <section className="text-center py-20 bg-gray-50 dark:bg-cinder mt-16 rounded-2xl">
                    <h2 className="text-3xl font-semibold text-flame mb-4">
                        Enerjinizi Güneşle Dönüştürün ☀️
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Projeniz için en doğru çözümü birlikte belirleyelim. Ücretsiz keşif
                        ve danışmanlık için bizimle iletişime geçin.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 text-white bg-flame rounded-md hover:bg-solarGold transition"
                    >
                        İletişime Geç
                    </a>
                </section>
            </Container>
        </main>
    );
}