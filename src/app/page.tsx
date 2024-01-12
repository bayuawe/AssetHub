import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get Your Asset delivered to your email in second and download them right way",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Every asset in our platform is verified by our team to ensure our products. Not Happy? We offer 30 Day Guarantee",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the natural environtment",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Toko Online Resmi
            <span className="text-yellow-400"> Kue Balok Sari Pasundan </span>
            Pekanbaru.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Selamat datang di Sari Pasundan Shop. Silahkan berbelanja semua Produk yang tersedia</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Lihat Produk
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel query={{ sort: "desc", limit: 4 }} href="/products" title="Brand New" />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:grid-gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className=" h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400 text-yellow-900">{<perk.Icon className="w-1/3 h-1/3" />}</div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
