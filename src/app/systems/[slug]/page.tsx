import { Container } from "@/components/Container";
import { CheckCircle2, Home, Factory, Building2, Tractor, Users, Sun } from "lucide-react";

const systems = [
    {
        slug: "on-grid",
        title: "On-Grid (Şebeke Bağlantılı Sistem)",
        desc: "Güneş panelleriyle üretilen enerjinin doğrudan şebekeye entegre edildiği, verimli ve sürdürülebilir enerji çözümüdür.",
        image: "/img/systems/roof-solar.jpg",
        content: {
            intro: [
                "On-Grid sistemler, güneş panelleriyle üretilen elektriğin şebeke bağlantısı üzerinden kullanıldığı modern enerji altyapılarıdır.",
                "Kullanıcı önce kendi ürettiği enerjiyi tüketir; fazla üretim otomatik olarak elektrik dağıtım ağına iletilir.",
                "Güneşsiz veya gece saatlerinde enerji ihtiyacı oluştuğunda, sistem şebekeden elektrik çeker.",
                "Bu nedenle kullanıcı hem üretici hem de tüketici konumundadır. Ay sonunda şebekeye verilen enerjiyle çekilen enerji arasında mahsuplaşma yapılır."
            ],
            advantages: [
                "Fazla Elektriği Satabilme (Gelir Elde Etme)",
                "Elektrik Faturasında Tasarruf",
                "Bataryasız Yapı (Daha Düşük Maliyet)",
                "Estetik ve Yer Tasarrufu",
                "Düşük Bakım İhtiyacı",
                "Çevre Dostu Enerji",
                "Uzun Ömür ve Güvenilirlik",
                "Gayrimenkul Değerini Artırır"
            ],
            usage: [
                { icon: <Home />, title: "Konutlar", text: "Ev çatılarında kurularak fatura giderlerini azaltır, enerji bağımsızlığı sağlar." },
                { icon: <Building2 />, title: "Ticari İşletmeler", text: "Ofis, mağaza ve otellerde enerji maliyetini düşürür, yeşil enerji imajı kazandırır." },
                { icon: <Factory />, title: "Sanayi Tesisleri", text: "Fabrikalarda amortisman süresi kısadır, üretim saatlerinde maksimum verim sağlar." },
                { icon: <Users />, title: "Kamu Kurumları", text: "Belediye, okul ve hastanelerde enerji tasarrufu ve çevresel farkındalık sağlar." },
                { icon: <Tractor />, title: "Tarım & Hayvancılık", text: "Sulama, soğuk hava deposu ve çiftliklerde doğal enerji akışı sunar." },
                { icon: <Sun />, title: "Arazi Üzeri GES", text: "Lisanssız büyük ölçekli santrallerle elektrik üretimi ve satışı yapılır." }
            ]
        }
    },
    {
        slug: "off-grid",
        title: "Off-Grid (Şebekeden Bağımsız Sistem)",
        desc: "Elektrik şebekesine bağlı olmadan, tamamen kendi ürettiği ve depoladığı enerjiyle çalışan bağımsız sistemdir.",
        image: "/img/systems/ground-solar.jpg"
    },
    {
        slug: "hibrit",
        title: "Hibrit Enerji Sistemleri",
        desc: "Güneş enerjisini jeneratör veya rüzgar gibi diğer kaynaklarla entegre ederek kesintisiz enerji sağlar.",
        image: "/img/systems/hybrid-solar.jpg"
    },
    {
        slug: "ev-sarj",
        title: "Elektrikli Araç Şarj İstasyonu",
        desc: "Elektrikli araçlar için hızlı, güvenli ve akıllı şarj çözümleri sunar.",
        image: "/img/systems/license-free.jpg"
    },
    {
        slug: "tarimsal-sulama",
        title: "Tarımsal Sulama Sistemleri",
        desc: "Güneş enerjisiyle çalışan, pompa ve sulama sistemleri için bağımsız enerji kaynağı sunar.",
        image: "/img/systems/license-free.jpg"
    }
];

// ✅ SEO ve statik build desteği
export async function generateStaticParams() {
    return systems.map((sys) => ({ slug: sys.slug }));
}

export default function SystemDetail({ params }: { params: { slug: string } }) {
    const system = systems.find((s) => s.slug === params.slug);

    if (!system) {
        return (
            <Container>
                <p className="text-center py-20 text-gray-500">
                    Sistem bulunamadı veya geçersiz bağlantı.
                </p>
            </Container>
        );
    }

    return (
        <Container>
            <section className="py-16">
                {/* Başlık ve Görsel */}
                <h1 className="text-4xl font-bold text-center text-flame mb-6">
                    {system.title}
                </h1>

                <img
                    src={system.image}
                    alt={system.title}
                    className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg mb-10"
                />

                <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                    {system.desc}
                </p>

                {/* Dinamik içerik: sadece varsa göster */}
                {system.content && (
                    <div className="space-y-20">
                        {/* Giriş */}
                        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                            {system.content.intro.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        {/* Avantajlar */}
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl font-semibold text-center text-flame mb-10">
                                On-Grid Sistemlerin Avantajları
                            </h2>
                            <div className="grid gap-8 md:grid-cols-2">
                                {system.content.advantages.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 bg-white dark:bg-cinder/60 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                                    >
                                        <CheckCircle2 className="text-flame w-6 h-6 mt-1" />
                                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kullanım Alanları */}
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl font-semibold text-center text-flame mb-10">
                                On-Grid Sistem Kullanım Alanları
                            </h2>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {system.content.usage.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center text-center bg-white dark:bg-cinder/60 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="text-flame mb-4">{item.icon}</div>
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Container>
    );
}