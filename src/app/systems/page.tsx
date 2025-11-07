//system/page.tsx
import { Container } from "@/components/Container";
import Link from "next/link";

export default function Systems() {
    const systems = [
        {
            slug: "on-grid",
            title: "On-Grid (Şebeke Bağlantılı Sistem)",
            desc: "On-Grid sistem, güneş panellerinin ürettiği elektriği şebekeye bağlı olarak kullanan sistemdir.",
            image: "/img/systems/roof-solar.jpg",
        },
        {
            slug: "off-grid",
            title: "Off-Grid (Şebekeden Bağımsız Sistem)",
            desc: "Off-grid sistem, elektrik şebekesinden bağımsız çalışan enerji sistemidir. Herhangi bir elektrik dağıtım hattına bağlı olmadan, tamamen kendi ürettiği ve depoladığı enerjiyle çalışır.",
            image: "/img/systems/ground-solar.jpg",
        },
        {
            slug: "hibrit",
            title: "Hibrit Enerji Sistemleri",
            desc: "Güneş enerjisini diğer kaynaklarla (örneğin jeneratör veya rüzgar) entegre ederek kesintisiz enerji sağlar. Özellikle endüstriyel tesisler için idealdir.",
            image: "/img/systems/hybrid-solar.jpg",
        },
        {
            slug: "ev-sarj",
            title: "Elektrikli Araç Şarj İstasyonu",
            desc: "Açıklama eklenecek.",
            image: "/img/systems/license-free.jpg",
        },
        {
            slug: "tarimsal-sulama",
            title: "Tarımsal Sulama Sistemleri",
            desc: "Tarımsal sulama sisteminde güneş panelleri, güneşten gelen ışığı elektriğe çevirir. Üretilen enerjiyle su pompası doğrudan çalıştırılır veya önce bataryada depolanıp daha sonra kullanılır.",
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
                    Bakren Solar Enerji, işletmenizin ihtiyaçlarına göre özelleştirilmiş fotovoltaik sistem çözümleri sunar.
                    Enerjinizi verimli kullanın, geleceğe yatırım yapın.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                    {systems.map((sys, idx) => (
                        <Link
                            key={idx}
                            href={`/systems/${sys.slug}`}
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
                        </Link>
                    ))}
                </div>
            </section>
        </Container>
    );
}