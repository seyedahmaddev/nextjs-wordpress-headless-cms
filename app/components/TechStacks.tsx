import Image from 'next/image';
import Link from 'next/link';

export default function TechStacks() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">
              ابزارها و تکنولوژی‌هایی که با آن‌ها کار می‌کنم
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              در پروژه‌های خود از تکنولوژی‌های مدرن فرانت‌اند و معماری
              Headless برای ساخت وب‌سایت‌های سریع، مقیاس‌پذیر و قابل توسعه استفاده می‌کنم.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="tell:09034260454"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                تماس تلفنی با من
              </a>
              <Link href="/مشاوره-طراحی-سایت/" className="text-sm font-semibold text-white">
                چت با من <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Image
              alt="React js"
              src="/logos/reactjs.png"
              width={110}
              height={25}
              className="max-h-8 w-full object-contain object-left"
            />
            <Image
              alt="Next.js"
              src="/logos/Nextjs.png"
              width={200}
              height={77}
              className="max-h-8 w-full object-contain object-left"
            />
            <img
              alt="Typescript"
              src="/logos/Typescript-logo.png"
              width={313}
              height={77}
              className="max-h-8 w-full object-contain object-left"
            />
            
            <Image
              alt="Node.js"
              src="/logos/Nodejs.png"
              width={313}
              height={77}
              className="max-h-8 w-full object-contain object-left"
            />
            <Image
              alt="Prisma logo"
              src="/logos/prisma-logo.svg"
              width={160}
              height={48}
              className="max-h-8 w-full object-contain object-left"
            />
            <Image
              alt="Git-github"
              src="/logos/Git-github.png"
              width={211}
              height={79}
              className="max-h-8 w-full object-contain object-left"
            />
            <Image
              alt="MUI Material design logo"
              src="/logos/mui.png"
              width={220}
              height={73}
              className="max-h-8 w-full object-contain object-left"
            />
            <Image
              alt="PostgreSQL logo"
              src="/logos/PostgreSQL.png"
              width={220}
              height={73}
              className="max-h-8 w-full object-contain object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}