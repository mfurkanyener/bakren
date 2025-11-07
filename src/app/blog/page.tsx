import { Container } from "@/components/Container";
import Image from "next/image";

export default function Blog() {
    return (
        <main className="bg-white dark:bg-cinder text-gray-700 dark:text-gray-300">
            <Container>
                <section className="py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        {/* SOL TARAF — METİN */}
                        <div>
                            <h1 className="text-4xl font-bold text-flame mb-4">
                                Blog
                            </h1>
                            <p className="text-lg leading-relaxed mb-6">
                                Bakren Solar Enerji, yenilenebilir enerji alanında işletmelere
                                özel çözümler üreten bir teknoloji firmasıdır. Amacımız;
                                sürdürülebilir, verimli ve çevre dostu enerji sistemleriyle
                                iş dünyasının karbon ayak izini azaltmak ve enerji maliyetlerini
                                optimize etmektir.
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                Uzman mühendis kadromuzla, planlama aşamasından devreye almaya
                                kadar tüm süreçleri titizlikle yönetiyoruz. Güneşin gücünü
                                verimli sistemlerle birleştirerek işletmelere hem ekonomik hem de
                                çevresel fayda sağlıyoruz.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Her proje bizim için yalnızca bir enerji yatırımı değil,
                                geleceğe bırakılan bir izdir. Güneşle aydınlanan bir gelecek için
                                çalışıyoruz.
                            </p>
                        </div>

                        {/* SAĞ TARAF — GÖRSEL */}
                        <div className="flex justify-center">
                            <Image
                                src="/img/Hero.png"
                                alt="Bakren Solar Enerji"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* MİSYON VİZYON */}
                <section className="py-16 border-t border-gray-200 dark:border-trueGray-800">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-flame mb-3">
                                Misyonumuz
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Enerji dönüşümünü hızlandırmak, işletmelere yenilenebilir enerji
                                çözümleriyle sürdürülebilir bir gelecek sunmak.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-flame mb-3">
                                Vizyonumuz
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Türkiye’nin ve bölgenin lider güneş enerjisi çözüm sağlayıcısı
                                olmak; doğadan aldığını doğaya geri veren bir enerji ekosistemi
                                kurmak.
                            </p>
                        </div>
                    </div>
                </section>

                {/* DEĞERLER */}
                <section className="py-16 border-t border-gray-200 dark:border-trueGray-800">
                    <h2 className="text-2xl font-semibold text-flame mb-6 text-center">
                        Temel Değerlerimiz
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3 text-center">
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-cinder dark:text-solarGold">
                                Güvenilirlik
                            </h3>
                            <p>Her projede şeffaf, etik ve profesyonel yaklaşımlar sunarız.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-cinder dark:text-solarGold">
                                Sürdürülebilirlik
                            </h3>
                            <p>Doğayı ve geleceği koruyan enerji çözümleri geliştiririz.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-cinder dark:text-solarGold">
                                Yenilikçilik
                            </h3>
                            <p>
                                Gelişen teknolojileri yakından takip eder, verimliliği artıran
                                sistemler kurarız.
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}