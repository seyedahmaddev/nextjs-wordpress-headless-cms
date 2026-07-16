// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ============================================================
//  نوع داده‌ای که از کلاینت دریافت می‌کنیم
// ============================================================
interface GeneralFormData {
  type: 'general';
  name: string;
  email: string;
  message: string;
}

interface OrderFormData {
  type: 'order';
  name: string;
  email: string;
  phone: string;
  projectTypes: string[];
  message: string;
  similarSite?: string;
  previousSite?: string;
}

type ContactFormData = GeneralFormData | OrderFormData;

// ============================================================
//  تابع ارسال ایمیل با Resend
// ============================================================
async function sendEmail(data: ContactFormData) {
  // ۱. ایجاد نمونه Resend با API Key از محیط
  const resend = new Resend(process.env.RESEND_API_KEY);

  // ۲. ساخت موضوع و محتوای ایمیل بر اساس نوع فرم
  const subject = data.type === 'general'
    ? '📩 پیام عمومی از سایت'
    : '📦 سفارش پروژه طراحی سایت';

  let htmlContent = `
    <h2 style="color: #1a1a2e; font-family: sans-serif;">${subject}</h2>
    <p><strong>نام:</strong> ${data.name}</p>
    <p><strong>ایمیل:</strong> ${data.email}</p>
  `;

  if (data.type === 'order') {
    htmlContent += `
      <p><strong>تلفن:</strong> ${data.phone || 'وارد نشده'}</p>
      <p><strong>نوع پروژه:</strong> ${data.projectTypes.join('، ')}</p>
      <p><strong>پیام:</strong></p>
      <p style="background: #f5f5f5; padding: 10px; border-radius: 6px;">${data.message}</p>
      <p><strong>لینک سایت مشابه:</strong> ${data.similarSite || 'وارد نشده'}</p>
      <p><strong>سایت قبلی:</strong> ${data.previousSite || 'وارد نشده'}</p>
    `;
  } else {
    htmlContent += `
      <p><strong>پیام:</strong></p>
      <p style="background: #f5f5f5; padding: 10px; border-radius: 6px;">${data.message}</p>
    `;
  }

  // ۳. ارسال ایمیل از طریق Resend
  const { error } = await resend.emails.send({
    from: process.env.FROM_EMAIL || 'سیداحمد <noreply@seyedahmaddev.ir>',
    to: process.env.TO_EMAIL?.split(',') || ['hi@seyedahmaddev.ir'],
    subject,
    html: htmlContent,
    replyTo: data.email,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

// ============================================================
//  هندلر POST
// ============================================================
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // ===== اعتبارسنجی اولیه =====
    if (!body.type || !body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'فیلدهای نام، ایمیل و پیام الزامی هستند.' },
        { status: 400 }
      );
    }

    if (body.type === 'order' && body.projectTypes.length === 0) {
      return NextResponse.json(
        { error: 'حداقل یک نوع پروژه را انتخاب کنید.' },
        { status: 400 }
      );
    }

    // ===== ارسال ایمیل =====
    await sendEmail(body);

    // ===== (اختیاری) ذخیره در دیتابیس =====
    // اگر از Prisma یا هر ORM دیگر استفاده می‌کنید، اینجا داده را ذخیره کنید.

    return NextResponse.json(
      { message: 'پیام با موفقیت ارسال شد.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ خطا در API:', error);
    return NextResponse.json(
      { error: 'خطای داخلی سرور. لطفاً دوباره تلاش کنید.' },
      { status: 500 }
    );
  }
}