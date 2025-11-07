import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
      <>
        <Container className="flex flex-wrap bg-mist dark:bg-cinder py-16 rounded-2xl">
          {/* Sol Taraf - Metin */}
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-cinder lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-mist">
                Güneşin Gücünü İşinize Taşıyoruz
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl dark:text-gray-300">
                Bakren Solar Enerji, işletmelere özel fotovoltaik sistemler ve
                sürdürülebilir enerji çözümleri sunar. Maliyetlerinizi düşürürken
                doğaya yatırım yapın.
              </p>

              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="contact"
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-flame rounded-md shadow-lg hover:bg-solarGold transition duration-300">
                  Teklif Al
                </a>
                <a
                    href="about"
                    className="text-flame hover:text-solarGold text-lg font-medium transition duration-300">
                  Hakkımızda
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Görsel */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <Image
                src={heroImg}
                width="616"
                height="617"
                className="object-cover rounded-xl shadow-2xl"
                alt="Bakren Solar Enerji Sistemleri"
                loading="eager"
                placeholder="blur"
            />
          </div>
        </Container>

        {/* İş Ortakları */}
        <Container>
          <div className="flex flex-col justify-center mt-10">
            <div className="text-xl text-center text-cinder dark:text-mist">
              <span className="text-flame font-semibold">Bakren Solar</span>{" "}
              çözüm ortaklarıyla daha güçlü.
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around opacity-80">
              <div className="text-gray-500 dark:text-gray-400">
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <h1>Buraya kullanılan ürünlerin logoları gelecek</h1>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <h1>Simens</h1>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <h1>Vb şirketler</h1>
              </div>
              <div className="text-gray-500 dark:text-gray-400">

              </div>
            </div>
          </div>
        </Container>
      </>
  );
};