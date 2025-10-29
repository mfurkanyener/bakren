import { Container } from "@/components/Container";

export default function Systems() {
    const systems = [
        {
            title: "Çatı Üstü Güneş Enerjisi Sistemleri",
            desc: "Endüstriyel ve ticari binaların çatı alanlarını enerji üretim merkezine dönüştürür. Elektrik maliyetlerini azaltırken karbon ayak izinizi düşürür.",
            image: "/img/systems/roof-solar.jpg",
        },
        {
            title: "Arazi Tipi Güneş Enerjisi Sistemleri",
            desc: "Geniş alanlara kurulan yüksek kapasiteli sistemlerdir. Tarımsal arazilerden organize sanayi bölgelerine kadar ölçeklenebilir çözümler sunar.",
            image: "/img/systems/ground-solar.jpg",
        },
        {
            title: "Hibrit Enerji Sistemleri",
            desc: "Güneş enerjisini diğer kaynaklarla (örneğin jeneratör veya rüzgar) entegre ederek kesintisiz enerji sağlar. Özellikle endüstriyel tesisler için idealdir.",
            image: "/img/systems/hybrid-solar.jpg",
        },
        {
            title: "Lisanssız Elektrik Üretim Sistemleri",
            desc: "Tüketim miktarına göre özelleştirilmiş çözümlerle, yasal mevzuata uygun lisanssız üretim sistemi kurulumları gerçekleştiriyoruz.",
            image: "/img/systems/license-free.jpg",
        },
    ];

    return (
        <Container>
            <section className="py-16">
                <h1 className="text-4xl font-bold text-center text-cinder dark:text-flame mb-4">
                    Güneş Enerjisi Sistemleri
                </h1>
                <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12">
                    Barken Solar Enerji, işletmenizin ihtiyaçlarına göre özelleştirilmiş fotovoltaik sistem çözümleri sunar.
                    Enerjinizi verimli kullanın, geleceğe yatırım yapın.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                    {systems.map((sys, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-cinder transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={sys.image}
                                alt={sys.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-flame mb-3">
                                    {sys.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {sys.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    );
}