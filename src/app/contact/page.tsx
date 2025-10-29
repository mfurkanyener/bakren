import { Container } from "@/components/Container";
import Image from "next/image";

export default function Contact() {
    return (
        <main className="bg-white dark:bg-cinder text-gray-700 dark:text-gray-300">
            <Container>
                {/* BAŞLIK */}
                <section className="py-20 text-center">
                    <h1 className="text-4xl font-bold text-flame mb-4">
                        Bizimle İletişime Geçin
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Barken Solar Enerji olarak, işletmeniz için en uygun güneş enerjisi
                        çözümlerini sunmak için buradayız. Sorularınız, teklif talepleriniz
                        veya proje danışmanlığı için bize ulaşabilirsiniz.
                    </p>
                </section>

                {/* İÇERİK ALANI */}
                <section className="grid gap-12 lg:grid-cols-2 py-10">
                    {/* FORM */}
                    <div>
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="bg-gray-50 dark:bg-cinder p-8 rounded-2xl shadow-md space-y-5"
                        >
                            {/* Web3Forms Access Key */}
                            <input
                                type="hidden"
                                name="access_key"
                                value="YOUR_ACCESS_KEY_HERE"
                            />

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Adınız Soyadınız
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Örneğin: Murtaza Çağdaş Bakar"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-cinder dark:border-gray-700 focus:ring-2 focus:ring-flame focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    E-posta Adresiniz
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="ornek@sirket.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-cinder dark:border-gray-700 focus:ring-2 focus:ring-flame focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Mesajınızı buraya yazın..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-cinder dark:border-gray-700 focus:ring-2 focus:ring-flame focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 text-white bg-flame rounded-md hover:bg-solarGold transition"
                            >
                                Gönder
                            </button>
                        </form>
                    </div>

                    {/* BİLGİ BLOĞU */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-flame mb-3">
                                Ofis Bilgilerimiz
                            </h2>
                            <p className="text-lg leading-relaxed">
                                <strong>Adres:</strong> Güneş Sokak İzmir<br />
                                <strong>Telefon:</strong> +90 (312) 000 00 00<br />
                                <strong>E-posta:</strong> info@barkensolar.com
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-flame mb-3">
                                Çalışma Saatleri
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Pazartesi - Cuma: 09.00 – 18.00<br />
                                Cumartesi: 09.00 – 13.00<br />
                                Pazar: Kapalı
                            </p>
                        </div>

                        <div className="rounded-lg overflow-hidden shadow-md">
                            <iframe
                                width="100%"
                                height="520"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full border-0"
                            />
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}