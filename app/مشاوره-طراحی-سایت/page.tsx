// app/مشاوره-طراحی-سایت/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ======================== Types ========================
interface GeneralFormData {
  name: string;
  email: string;
  message: string;
}

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  projectTypes: string[];
  message: string;
  similarSite?: string;
  previousSite?: string;
}

// ======================== Main Component ========================
export default function ConsultingPage() {
  // ---------- State for General Form ----------
  const [generalForm, setGeneralForm] = useState<GeneralFormData>({
    name: '',
    email: '',
    message: '',
  });

  // ---------- State for Order Form ----------
  const [orderForm, setOrderForm] = useState<OrderFormData>({
    name: '',
    email: '',
    phone: '',
    projectTypes: [],
    message: '',
    similarSite: '',
    previousSite: '',
  });

  // ---------- Handlers ----------
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGeneralForm({ ...generalForm, [e.target.name]: e.target.value });
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setOrderForm((prev) => {
        const types = prev.projectTypes;
        if (checked) {
          return { ...prev, projectTypes: [...types, value] };
        } else {
          return { ...prev, projectTypes: types.filter((t) => t !== value) };
        }
      });
    } else {
      setOrderForm({ ...orderForm, [name]: value });
    }
  };

 const handleGeneralSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'general',
        ...generalForm,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ پیام شما با موفقیت ارسال شد!');
      setGeneralForm({ name: '', email: '', message: '' });
    } else {
      alert(`❌ خطا: ${data.error || 'مشکلی پیش آمد.'}`);
    }
  } catch (error) {
    console.error('خطا در ارسال:', error);
    alert('❌ خطای شبکه. لطفاً دوباره تلاش کنید.');
  }
};

 const handleOrderSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'order',
        ...orderForm,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ درخواست شما ثبت شد. به زودی با شما تماس می‌گیریم.');
      setOrderForm({
        name: '',
        email: '',
        phone: '',
        projectTypes: [],
        message: '',
        similarSite: '',
        previousSite: '',
      });
    } else {
      alert(`❌ خطا: ${data.error || 'مشکلی پیش آمد.'}`);
    }
  } catch (error) {
    console.error('خطا در ارسال:', error);
    alert('❌ خطای شبکه. لطفاً دوباره تلاش کنید.');
  }
};

  // ======================== JSX ========================
  return (
    <main className="bg-white py-8 sm:py-16 rtl" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------- عنوان اصلی ---------- */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            مشاوره طراحی سایت
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            تماس با سید احمد غلامی برای راهنمایی و تعیین مسیر طراحی سایت، فروشگاه اینترنتی،
            بهینه‌سازی و سئو
          </p>
        </div>

        {/* ---------- توضیحات بالای صفحه ---------- */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-12 mx-24">
          <p>
            شما در این صفحه میتوانید برای مشاوره طراحی سایت به صورت عمومی و اختصاصی با استفاده
            از فرم‌های موجود اقدام کنید. با استفاده از فرم ارسال پیام عمومی میتوانید بدون
            محدودیت خاصی، نظر، پیشنهاد و انتقاد و درخواست مشاوره خود را مطرح فرمایید.
          </p>
          <p>
            موضوعاتی که برای تماس با من میتوانید انتخاب فرمایید: مشاوره رایگان ۱۵ تا ۳۰ دقیقه‌ای
            برای انتخاب مسیر طراحی سایت، فروشگاه اینترنتی، بهینه‌سازی فنی و محتوایی.
          </p>
          <p>
            در فرم تماس برای سفارش پروژه میتوانید پروژه مورد نظر خودتان را انتخاب کنید و درباره
            آن توضیحات ثبت بفرمایید. همچنین لینک سایت مشابه که میخواهید وب سایت مشابه آن طراحی
            شود را نیز میتوانید قرار دهید. اگر پیشتر دارای سایت هستید نیز میتوانید آدرس آن را
            در کادر مربوطه وارد نمایید.
          </p>
        </div>

        {/* ---------- بخش تصویر با نقاط داغ (Hotspots) ---------- */}
        <section className="mb-16">
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/assets/website-design.png"
              alt="مشاوره طراحی سایت و توسعه وب اپلیکیشن با سید احمد"
              width={530}
              height={471}
              className="w-full h-auto rounded-2xl shadow-lg"
              priority
            />
            {/* نقاط داغ (با لینک به بخش‌های فرم) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* نقطه ۱: ارسال پیام عمومی */}
              <a
                href="#general-form"
                className="pointer-events-auto absolute top-[12%] right-[12%] flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition"
              >
                <i className="far fa-compass ml-1"></i>
                ارسال پیام عمومی
              </a>
              {/* نقطه ۲: کانال بله */}
              <a
                href="https://ble.ir/seyedahmaddev"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto absolute bottom-[27%] left-[4%] flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition"
              >
                <i className="fab fa-telegram ml-1"></i>
                عضویت در کانال بله
              </a>
              {/* نقطه ۳: سفارش پروژه */}
              <a
                href="#order-form"
                className="pointer-events-auto absolute bottom-[12%] left-[4%] flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-green-500 transition"
              >
                <i className="fab fa-telegram ml-1"></i>
                سفارش پروژه
              </a>
            </div>
          </div>
        </section>

        {/* ---------- بخش اطلاعات تماس و فرم‌ها ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* سمت راست: اطلاعات تماس */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">سیداحمد | طراحی سایت</h2>
              <div className="border-b border-gray-200 my-4"></div>
              <p className="text-gray-700 mb-6">
                من در تهران هستم. اما در سراسر ایران و خارج از کشور خدمات فریلسنری توسعه وب و
                طراحی سایت ارائه می‌دهم.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="far fa-building text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold">امکان ملاقات حضوری</h3>
                    <p className="text-gray-600">محدوده پاسداران، تهران</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-life-ring text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold">۰۲۱-۲۶۶۱۱۳۴۷</h3>
                    <p className="text-gray-600">SeyedAhmadDev@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://ble.ir/seyedahmaddev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                >
                  <i className="fab fa-telegram"></i> پیوستن به ما
                </a>
                <Link
                  href="/aboutme"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  درباره ما
                </Link>
              </div>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">شبکه‌های اجتماعی</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/seyedahmaddv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://github.com/seyedahmaddev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://ble.ir/seyedahmaddev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <i className="fab fa-telegram text-2xl"></i> بله
                </a>
                <a
                  href="https://ble.ir/seyedahmaddeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <i className="fab fa-telegram text-2xl"></i> بله (مستقیم)
                </a>
                <a
                  href="https://eitaa.com/seyedahmaddeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <i className="fas fa-comment text-2xl"></i> ایتا
                </a>
                <a
                  href="https://rubika.ir/seyedahmaddeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <i className="fas fa-video text-2xl"></i> روبیکا
                </a>
              </div>
            </div>
          </div>

          {/* سمت چپ: فرم ارسال پیام عمومی */}
          <div id="general-form" className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">ارسال پیام عمومی</h2>
            <div className="border-b border-gray-200 my-4"></div>
            <p className="text-gray-600 mb-6">برای ارسال پیام عمومی از فرم زیر استفاده نمایید.</p>

            <form onSubmit={handleGeneralSubmit} className="space-y-5">
              <div>
                <label htmlFor="general-name" className="block text-sm font-medium text-gray-700">
                  اسم
                </label>
                <input
                  type="text"
                  id="general-name"
                  name="name"
                  value={generalForm.name}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  placeholder="اسم خود را وارد کنید"
                  required
                />
              </div>
              <div>
                <label htmlFor="general-email" className="block text-sm font-medium text-gray-700">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="general-email"
                  name="email"
                  value={generalForm.email}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  placeholder="ایمیل خود را وارد کنید"
                  required
                />
              </div>
              <div>
                <label htmlFor="general-message" className="block text-sm font-medium text-gray-700">
                  پیام
                </label>
                <textarea
                  id="general-message"
                  name="message"
                  rows={6}
                  value={generalForm.message}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  placeholder="پیام خود را بنویسید..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>

        {/* ---------- بخش تصویر دوم (ری اکت) ---------- */}
        <div className="my-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/Reactjs.jpg"
              alt="مشاوره طراحی سایت با ری اکت و نکست"
              width={480}
              height={402}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* ---------- فرم سفارش پروژه ---------- */}
        <section id="order-form" className="bg-gray-50 rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">فرم مشاوره پروژه طراحی سایت</h2>
          <div className="border-b border-gray-200 my-4"></div>

          <form onSubmit={handleOrderSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="order-name" className="block text-sm font-medium text-gray-700">
                  اسم
                </label>
                <input
                  type="text"
                  id="order-name"
                  name="name"
                  value={orderForm.name}
                  onChange={handleOrderChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  placeholder="اسم خود را وارد کنید"
                  required
                />
              </div>
              <div>
                <label htmlFor="order-email" className="block text-sm font-medium text-gray-700">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="order-email"
                  name="email"
                  value={orderForm.email}
                  onChange={handleOrderChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  placeholder="ایمیل خود را وارد کنید"
                  required
                />
              </div>
              <div>
                <label htmlFor="order-phone" className="block text-sm font-medium text-gray-700">
                  تلفن
                </label>
                <input
                  type="text"
                  id="order-phone"
                  name="phone"
                  value={orderForm.phone}
                  onChange={handleOrderChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  placeholder="شماره موبایل خود را وارد کنید"
                />
              </div>
            </div>

            {/* چک‌باکس‌ها */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                چه نوع پروژه‌ای مد نظر شماست؟
              </legend>
              <div className="flex flex-wrap gap-4">
                {[
                  'طراحی سایت',
                  'طراحی وب اپلیکیشن با نکست',
                  'بازطراحی سایت شما',
                  'رفع مشکلات سایت',
                  'تامین امنیت سایت',
                  'طراحی صفحه فرود',
                ].map((label) => (
                  <label key={label} className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="projectTypes"
                      value={label}
                      checked={orderForm.projectTypes.includes(label)}
                      onChange={handleOrderChange}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="order-message" className="block text-sm font-medium text-gray-700">
                پیام
              </label>
              <textarea
                id="order-message"
                name="message"
                rows={7}
                value={orderForm.message}
                onChange={handleOrderChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                placeholder="درباره پروژه طراحی سایت خودتان توضیحات لازم را وارد کنید"
                required
              />
            </div>

            <div>
              <label htmlFor="similar-site" className="block text-sm font-medium text-gray-700">
                لینک سایت مشابه
              </label>
              <input
                type="url"
                id="similar-site"
                name="similarSite"
                value={orderForm.similarSite}
                onChange={handleOrderChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                placeholder="آدرس سایتی که میخواهید مشابه آن طراحی شود"
              />
            </div>

            <div>
              <label htmlFor="previous-site" className="block text-sm font-medium text-gray-700">
                آدرس سایت قبلی شما
              </label>
              <input
                type="url"
                id="previous-site"
                name="previousSite"
                value={orderForm.previousSite}
                onChange={handleOrderChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                placeholder="آدرس سایتی که قبلا برای شما طراحی شده"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
            >
              ارسال
            </button>
          </form>
        </section>

        
      </div>
    </main>
  );
}