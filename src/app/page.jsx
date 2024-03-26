import Advertisement from "@/components/organism/advertisement/Advertisement";
import BannerCard from "@/components/molecules/card/BannerCard";
import PostCard from "@/components/molecules/card/PostCard";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";

export const metadata = {
  title: "Home Page | MetaBlog",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <NextTopLoader />
      <main className="container mx-auto">
        <section>
          <BannerCard />
        </section>
        <section className="pt-12">
          <Advertisement />
        </section>
        <section className="my-16">
          <h3 className="px-4 text-base-content font-bold text-2xl mb-8 font-work leading-8">
            Latest Post
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <PostCard key={item} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <Link
              href={`/blog`}
              className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
            >
              View All Post
            </Link>
          </div>
        </section>
        <section className="mb-24">
          <Advertisement />
        </section>
      </main>
    </>
  );
}
