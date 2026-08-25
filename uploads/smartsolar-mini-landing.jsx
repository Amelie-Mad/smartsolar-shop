import { useState } from "react";

/* ─── TRANSLATIONS ─────────────────────────────────────────────────────── */
const t = {
  vi: {
    nav: { product: "Sản phẩm", benefits: "Lợi ích", howto: "Cách lắp", faq: "FAQ", order: "Đặt hàng ngay" },
    hero: {
      badge: "🇻🇳 Đầu tiên tại Việt Nam",
      h1a: "Tự sản xuất điện mặt trời",
      h1b: "ngay tại ban công nhà bạn.",
      sub: "Hệ thống điện mặt trời mini tự lắp đặt trong 30 phút. Tiết kiệm đến 600.000₫/tháng — không cần thợ, không cần giấy phép EVN.",
      cta: "Đặt hàng ngay",
      ctaSec: "Tìm hiểu thêm",
      stats: [
        { val: "600K₫", label: "tiết kiệm / tháng" },
        { val: "29", label: "tháng hoàn vốn" },
        { val: "30", label: "phút lắp đặt" },
        { val: "25+", label: "năm tuổi thọ" },
      ],
    },
    media: "Đã xuất hiện trên",
    benefits: {
      eyebrow: "Lợi ích",
      title: "5 lý do nên sở hữu ngay hôm nay",
      items: [
        { icon: "💰", title: "Tiết kiệm tiền điện mỗi ngày", desc: "Giảm đến 600.000₫/tháng trên hóa đơn EVN. Điện mặt trời được ưu tiên sử dụng trước, giảm lượng điện lưới tiêu thụ ngay lập tức." },
        { icon: "📈", title: "Hoàn vốn chỉ sau 29 tháng", desc: "Sau thời gian hoàn vốn, bạn được hưởng điện miễn phí suốt hơn 25 năm tuổi thọ còn lại của hệ thống." },
        { icon: "🏠", title: "Lắp tại ban công hoặc mái nhà", desc: "Phù hợp với nhà phố, chung cư và biệt thự. Khung nhôm gắn lan can, không cần khoan tường." },
        { icon: "⚡", title: "Lắp đặt trong 30 phút", desc: "Mở hộp, gắn tấm pin lên khung, cắm đầu nối vào inverter, cắm vào ổ điện — xong! Không cần kỹ thuật viên." },
        { icon: "📋", title: "Không cần thủ tục với EVN", desc: "Hệ thống mini dưới 1kW không yêu cầu đăng ký hay giấy phép. Plug-and-play hoàn toàn." },
      ],
    },
    howItWorks: {
      eyebrow: "Cách hoạt động",
      title: "Đơn giản như cắm điện",
      steps: [
        { num: "01", title: "Tấm pin hấp thu ánh nắng", desc: "2 tấm pin JA Solar 460W lắp trên ban công hoặc mái nhà hấp thụ ánh sáng mặt trời, chuyển thành điện DC." },
        { num: "02", title: "Inverter chuyển đổi sang AC", desc: "Hoymiles HF-800-WB chuyển điện DC thành AC 220V tương thích lưới điện gia đình, với hiệu suất đỉnh 97%." },
        { num: "03", title: "Cắm vào ổ điện & tiết kiệm", desc: "Cắm trực tiếp vào ổ điện. Thiết bị trong nhà tự dùng điện mặt trời trước — hóa đơn EVN giảm ngay tháng đầu." },
      ],
    },
    product: {
      eyebrow: "Bộ sản phẩm",
      title: "SmartSolar Mini",
      subtitle: "Bộ hoàn chỉnh — mọi thứ bạn cần trong một hộp",
      includes: [
        "2× Tấm pin JA Solar 460W Mono Bifacial (BH 12 năm sản phẩm, 30 năm hiệu suất)",
        "1× Hoymiles HF-800-WB Micro Inverter — WiFi & Bluetooth tích hợp (BH 12 năm)",
        "1× Khung lắp đặt nhôm cho ban công / mái nhà",
        "Cáp DC, đầu nối MC4, cáp AC Schuko 5m — toàn bộ phụ kiện",
        "Hướng dẫn lắp đặt video từng bước bằng tiếng Việt",
      ],
      specs: [
        { label: "Công suất DC", val: "920W (2×460W)" },
        { label: "Công suất AC", val: "800W" },
        { label: "Giám sát", val: "App S-Miles (WiFi/BT)" },
        { label: "Bảo hành inverter", val: "12 năm" },
        { label: "Bảo hành tấm pin", val: "12 / 30 năm" },
        { label: "Sản lượng ước tính", val: "~100 kWh / tháng" },
      ],
      price: "Liên hệ để nhận báo giá",
      priceSub: "Ưu đãi đặc biệt cho 50 khách hàng đầu tiên",
      cta: "Đặt hàng ngay",
    },
    order: {
      eyebrow: "Đặt hàng",
      title: "Bắt đầu tiết kiệm tiền điện ngay hôm nay",
      subtitle: "Điền thông tin và đội ngũ SmartSolar sẽ liên hệ trong vòng 24h.",
      name: "Họ và tên", phone: "Số điện thoại", email: "Email",
      address: "Địa chỉ lắp đặt", locType: "Vị trí lắp đặt",
      locOpts: ["Ban công chung cư", "Mái nhà (nhà phố)", "Sân thượng", "Khác"],
      note: "Ghi chú thêm", submit: "Gửi đơn đặt hàng",
      success: "✅ Cảm ơn bạn! Chúng tôi sẽ liên hệ trong 24h.",
      required: "Vui lòng điền đầy đủ họ tên, số điện thoại và địa chỉ.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Câu hỏi thường gặp",
      items: [
        { q: "Hệ thống điện mặt trời mini là gì?", a: "Đây là hệ thống pin năng lượng mặt trời nhỏ gọn dành cho ban công hoặc mái nhà. Tấm pin sản xuất điện, micro inverter chuyển đổi sang AC 220V và đưa trực tiếp vào mạng điện trong nhà qua ổ cắm thông thường." },
        { q: "Tôi có thể tự lắp không? Có cần thợ điện không?", a: "Hoàn toàn tự lắp được! Hệ thống được thiết kế plug-and-play. Bạn chỉ cần gắn tấm pin lên khung, kết nối cáp DC với inverter, rồi cắm vào ổ điện. Toàn bộ khoảng 30 phút và không cần bằng cấp điện." },
        { q: "Có cần đăng ký với EVN không?", a: "Không. Hệ thống dưới 1kW không yêu cầu đăng ký hay thủ tục với EVN. Bạn cắm và dùng ngay." },
        { q: "Tôi tiết kiệm được bao nhiêu tiền điện?", a: "Tại Việt Nam, hệ thống 920W DC có thể sản xuất khoảng 100 kWh/tháng. Với giá điện EVN bậc cao (~3.000-4.000₫/kWh), bạn tiết kiệm khoảng 300.000-600.000₫/tháng." },
        { q: "Thời gian hoàn vốn là bao lâu?", a: "Khoảng 29 tháng tính từ ngày lắp đặt, sau đó bạn được hưởng điện miễn phí trong hơn 20 năm còn lại." },
        { q: "Hệ thống có hoạt động khi mất điện không?", a: "Không. Micro inverter là thiết bị nối lưới, cần tín hiệu từ lưới điện để hoạt động. Khi mất điện, hệ thống tự ngắt vì lý do an toàn. Liên hệ chúng tôi để tìm hiểu gói có pin lưu trữ dự phòng." },
        { q: "Hệ thống có bền với thời tiết Việt Nam không?", a: "Có. Tấm pin JA Solar có chỉ số IP68, chịu được mưa lớn, nhiệt độ cao và bão. Micro inverter Hoymiles đạt IP67. Cả hai đều được thiết kế cho khí hậu nhiệt đới." },
        { q: "Tôi ở chung cư có dùng được không?", a: "Được! Hệ thống được thiết kế đặc biệt cho ban công chung cư. Khung nhôm gắn vào lan can mà không cần khoan tường hay xin phép ban quản lý." },
        { q: "Tôi có thể theo dõi sản lượng điện không?", a: "Có. Micro inverter tích hợp WiFi và Bluetooth. Bạn theo dõi sản lượng theo thời gian thực qua app S-Miles Home — xem kWh tạo ra, tiền tiết kiệm, CO₂ giảm thải." },
        { q: "Bảo hành như thế nào?", a: "Tấm pin JA Solar: 12 năm bảo hành sản phẩm và 30 năm bảo hành hiệu suất (≥84.95%). Micro inverter Hoymiles: 12 năm bảo hành chính hãng. SmartSolar hỗ trợ kỹ thuật trong suốt thời gian sử dụng." },
      ],
    },
    ig: { title: "Theo dõi hành trình của chúng tôi", handle: "@smartsolarvn", cta: "Xem trên Instagram" },
    footer: {
      company: "CÔNG TY TNHH NĂNG LƯỢNG MẶT TRỜI SMARTSOLAR",
      reg: "Giấy chứng nhận ĐKDN số 0318442962 do Sở KH&ĐT TP.HCM cấp ngày 07/05/2024",
      address: "30/11C Mạc Đĩnh Chi, Phường Sài Gòn, TP. Hồ Chí Minh",
      phone: "076 560 12 50",
      rights: "© 2026 SmartSolar. All rights reserved.",
    },
  },
  en: {
    nav: { product: "Product", benefits: "Benefits", howto: "How it works", faq: "FAQ", order: "Order now" },
    hero: {
      badge: "🇻🇳 First in Vietnam",
      h1a: "Generate your own solar power",
      h1b: "right from your balcony.",
      sub: "Self-install mini solar system in 30 minutes. Save up to 600,000₫/month on electricity — no electrician, no EVN paperwork.",
      cta: "Order now",
      ctaSec: "Learn more",
      stats: [
        { val: "600K₫", label: "saved / month" },
        { val: "29", label: "months payback" },
        { val: "30", label: "min install" },
        { val: "25+", label: "year lifespan" },
      ],
    },
    media: "As seen on",
    benefits: {
      eyebrow: "Benefits",
      title: "5 reasons to go solar today",
      items: [
        { icon: "💰", title: "Save on electricity every day", desc: "Cut your EVN bill by up to 600,000₫/month. Solar power is used first, automatically reducing grid consumption." },
        { icon: "📈", title: "Payback in just 29 months", desc: "After payback, enjoy free electricity for the remaining 25+ year lifespan of the system." },
        { icon: "🏠", title: "Install on balcony or rooftop", desc: "Works for apartments, townhouses and villas. Aluminium frame attaches to railings — no wall drilling needed." },
        { icon: "⚡", title: "Install in 30 minutes", desc: "Unbox, mount panels, connect to inverter, plug into your outlet — done. No electrician required." },
        { icon: "📋", title: "No EVN paperwork required", desc: "Mini systems under 1kW need no registration or permits. Truly plug-and-play." },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "As simple as plugging in",
      steps: [
        { num: "01", title: "Panels absorb sunlight", desc: "Two JA Solar 460W panels mounted on your balcony or roof absorb sunlight and convert it into DC electricity." },
        { num: "02", title: "Inverter converts to AC", desc: "The Hoymiles HF-800-WB converts DC to household-compatible 220V AC at up to 97% peak efficiency." },
        { num: "03", title: "Plug in and save", desc: "Plug straight into your outlet. Appliances automatically use solar first — your EVN bill drops from month one." },
      ],
    },
    product: {
      eyebrow: "Product bundle",
      title: "SmartSolar Mini",
      subtitle: "Complete kit — everything you need in one box",
      includes: [
        "2× JA Solar 460W Mono Bifacial panels (12-yr product, 30-yr performance warranty)",
        "1× Hoymiles HF-800-WB Micro Inverter — built-in WiFi & Bluetooth (12-yr warranty)",
        "1× Aluminium mounting structure for balcony or rooftop",
        "DC cables, MC4 connectors, 5m AC Schuko cable — all accessories included",
        "Step-by-step Vietnamese video installation guide",
      ],
      specs: [
        { label: "DC capacity", val: "920W (2×460W)" },
        { label: "AC output", val: "800W" },
        { label: "Monitoring", val: "S-Miles App (WiFi/BT)" },
        { label: "Inverter warranty", val: "12 years" },
        { label: "Panel warranty", val: "12 / 30 years" },
        { label: "Est. monthly output", val: "~100 kWh / month" },
      ],
      price: "Contact us for pricing",
      priceSub: "Special offer for the first 50 customers",
      cta: "Order now",
    },
    order: {
      eyebrow: "Order",
      title: "Start saving on electricity today",
      subtitle: "Fill in your details and the SmartSolar team will contact you within 24h.",
      name: "Full name", phone: "Phone number", email: "Email",
      address: "Installation address", locType: "Installation location",
      locOpts: ["Apartment balcony", "Townhouse rooftop", "Terrace / rooftop garden", "Other"],
      note: "Additional notes", submit: "Submit order",
      success: "✅ Thank you! We'll be in touch within 24h.",
      required: "Please fill in your name, phone number and address.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { q: "What is a mini solar system?", a: "A compact solar system for balconies or rooftops. Panels generate DC power, the micro inverter converts it to 220V AC, and it feeds directly into your home circuit through a standard outlet." },
        { q: "Can I install it myself? Do I need an electrician?", a: "Yes, fully self-install! The system is plug-and-play. Mount the panels, connect the DC cables to the inverter, then plug into your outlet. Around 30 minutes, no electrical licence needed." },
        { q: "Do I need to register with EVN?", a: "No. Systems under 1kW don't require any registration or permits with EVN. Just plug in and use." },
        { q: "How much will I save?", a: "In Vietnam's sunny climate, the 920W DC system can produce ~100 kWh/month. At upper-tier EVN rates (~3,000-4,000₫/kWh), that's 300,000-600,000₫/month in savings." },
        { q: "How long is the payback period?", a: "Around 29 months from installation, after which you receive effectively free electricity for the remaining 20+ year system lifetime." },
        { q: "Does it work during a power outage?", a: "No. The micro inverter is grid-tied and needs the grid signal to operate. During outages it shuts off for safety. Contact us about battery storage add-ons." },
        { q: "Is it weatherproof for Vietnam's climate?", a: "Yes. JA Solar panels are IP68 rated, the Hoymiles inverter is IP67 — both designed for tropical heat, heavy rain, and storms." },
        { q: "I live in an apartment. Can I use it?", a: "Absolutely. The mounting frame attaches to your balcony railing without drilling walls or requiring building management approval." },
        { q: "Can I monitor my electricity production?", a: "Yes. The micro inverter has built-in WiFi and Bluetooth. Monitor real-time output, savings, and CO₂ reduction via the S-Miles Home app." },
        { q: "What is the warranty?", a: "JA Solar panels: 12-year product + 30-year performance (≥84.95%) warranty. Hoymiles inverter: 12-year manufacturer warranty. SmartSolar provides technical support throughout." },
      ],
    },
    ig: { title: "Follow our journey", handle: "@smartsolarvn", cta: "View on Instagram" },
    footer: {
      company: "SMARTSOLAR ENERGY COMPANY LIMITED",
      reg: "Business registration no. 0318442962, issued by HCMC Department of Planning and Investment, 07/05/2024",
      address: "30/11C Mac Dinh Chi, Sai Gon Ward, Ho Chi Minh City, Vietnam",
      phone: "076 560 12 50",
      rights: "© 2026 SmartSolar. All rights reserved.",
    },
  },
};

const mediaLogos = [
  { name: "VIR", url: "https://vir.com.vn/smartsolar-bags-185-million-in-seed-funding-123943.html" },
  { name: "VnEconomy", url: "https://en.vneconomy.vn/vietnam-energy-startup-secures-nearly-2-mln-in-seed-funding.htm" },
  { name: "Báo Đầu Tư", url: "https://baodautu.vn/doanh-nhan-kevin-junker-ceo-smartsolar-su-menh-giup-nguoi-viet-tiep-can-nang-luong-sach-d256791.html" },
  { name: "DealStreetAsia", url: "https://www.dealstreetasia.com/stories/smartsolar-seed-funding-hsbc-loan-315-medical-432884" },
  { name: "Vietcetera", url: "https://vietcetera.com/vn/viet-nam-va-giac-mo-nang-luong-mat-troi-tu-mai-nha-nho-den-vi-the-khu-vuc-dong-nam-a" },
  { name: "AsiaBizToday", url: "https://www.asiabiztoday.com/2025/03/03/smartsolar-secures-1-85m-in-seed-funding-to-drive-rooftop-solar-adoption-in-southeast-asia/" },
  { name: "Vietnam Innovators", url: "https://vietcetera.com/vn/podcast/vietnam-innovators/is-vietnam-emerging-as-southeast-asias-leader-in-green-energy-kevin-junker-founder-smartsolar-s640" },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState("vi");
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", loc: "", note: "" });
  const [formState, setFormState] = useState("idle"); // idle | error | success
  const c = t[lang];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address) { setFormState("error"); return; }
    setFormState("success");
  };

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", color: "#111", background: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── TOKENS ── */
        :root {
          --yellow:    #f7d65a;
          --yellow-dk: #d4b020;
          --green:     #1a6e3c;
          --green-lt:  #eaf4ee;
          --dark:      #0d1117;
          --dark-2:    #161d27;
          --gray-50:   #f6f7f9;
          --gray-100:  #eef0f3;
          --gray-300:  #c8cdd6;
          --gray-500:  #6b7280;
          --gray-700:  #374151;
          --white:     #ffffff;
          --radius:    14px;
          --radius-sm: 9px;
          --shadow:    0 2px 16px rgba(0,0,0,0.07);
          --shadow-md: 0 8px 32px rgba(0,0,0,0.10);
        }

        /* ── NAV ── */
        .nav { position: sticky; top: 0; z-index: 200; background: rgba(255,255,255,0.96); backdrop-filter: blur(16px); border-bottom: 1px solid var(--gray-100); }
        .nav-inner { max-width: 1160px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .logo { display: flex; align-items: baseline; gap: 6px; cursor: pointer; }
        .logo-mark { font-size: 20px; font-weight: 900; color: var(--dark); letter-spacing: -0.5px; }
        .logo-tag { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: var(--green); text-transform: uppercase; }
        .nav-links { display: flex; align-items: center; gap: 4px; }
        .nav-link { font-size: 14px; font-weight: 600; color: var(--gray-700); background: none; border: none; cursor: pointer; padding: 8px 12px; border-radius: 8px; transition: background 0.15s, color 0.15s; white-space: nowrap; }
        .nav-link:hover { background: var(--gray-50); color: var(--dark); }
        .nav-cta { font-size: 14px; font-weight: 700; background: var(--yellow); color: var(--dark); border: none; cursor: pointer; padding: 10px 20px; border-radius: 50px; transition: background 0.2s, transform 0.15s; white-space: nowrap; }
        .nav-cta:hover { background: var(--yellow-dk); transform: translateY(-1px); }
        .lang-group { display: flex; gap: 2px; background: var(--gray-100); padding: 3px; border-radius: 8px; }
        .lang-btn { font-size: 12px; font-weight: 700; padding: 4px 10px; border: none; border-radius: 5px; cursor: pointer; transition: all 0.15s; }
        .lang-btn.on { background: var(--white); color: var(--dark); box-shadow: 0 1px 4px rgba(0,0,0,0.12); }
        .lang-btn.off { background: transparent; color: var(--gray-500); }

        /* ── HERO ── */
        .hero { background: var(--dark); color: var(--white); padding: 96px 24px 80px; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(247,214,90,0.07) 0%, transparent 70%); pointer-events: none; }
        .hero-inner { max-width: 1160px; margin: 0 auto; position: relative; z-index: 1; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(247,214,90,0.12); border: 1px solid rgba(247,214,90,0.25); color: var(--yellow); font-size: 13px; font-weight: 700; padding: 7px 18px; border-radius: 40px; margin-bottom: 28px; letter-spacing: 0.3px; }
        .hero h1 { font-size: clamp(34px, 5.5vw, 62px); font-weight: 900; line-height: 1.08; letter-spacing: -1.5px; max-width: 760px; margin-bottom: 24px; }
        .hero h1 em { font-style: normal; color: var(--yellow); }
        .hero-sub { font-size: clamp(15px, 2vw, 18px); color: rgba(255,255,255,0.65); max-width: 520px; line-height: 1.65; margin-bottom: 40px; font-weight: 500; }
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 64px; }
        .btn-yellow { background: var(--yellow); color: var(--dark); font-size: 16px; font-weight: 800; padding: 16px 38px; border: none; border-radius: 50px; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .btn-yellow:hover { background: var(--yellow-dk); transform: translateY(-2px); box-shadow: 0 6px 24px rgba(247,214,90,0.35); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); font-size: 16px; font-weight: 700; padding: 16px 38px; border: 2px solid rgba(255,255,255,0.2); border-radius: 50px; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }
        .hero-stats { display: flex; gap: 40px; flex-wrap: wrap; }
        .stat { }
        .stat-val { font-size: clamp(32px, 4vw, 44px); font-weight: 900; color: var(--yellow); letter-spacing: -1px; line-height: 1; }
        .stat-label { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.45); margin-top: 4px; }
        .hero-divider { width: 1px; background: rgba(255,255,255,0.1); align-self: stretch; }
        .hero-img { margin-top: 64px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; min-height: 320px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.2); font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }

        /* ── MEDIA BAR ── */
        .media-bar { background: var(--gray-50); padding: 28px 24px; border-bottom: 1px solid var(--gray-100); }
        .media-bar-inner { max-width: 1160px; margin: 0 auto; }
        .media-label { font-size: 11px; font-weight: 700; color: var(--gray-300); text-transform: uppercase; letter-spacing: 2px; text-align: center; margin-bottom: 20px; }
        .media-logos { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
        .media-logo-link { font-size: 13px; font-weight: 800; color: var(--gray-300); text-decoration: none; padding: 8px 18px; border-radius: 8px; transition: all 0.2s; border: 1px solid transparent; letter-spacing: 0.3px; }
        .media-logo-link:hover { color: var(--dark); background: var(--white); border-color: var(--gray-100); box-shadow: var(--shadow); }

        /* ── SECTION SHELL ── */
        .section { padding: 88px 24px; }
        .section-inner { max-width: 1160px; margin: 0 auto; }
        .section-dark { background: var(--dark); color: var(--white); }
        .section-gray { background: var(--gray-50); }
        .eyebrow { font-size: 12px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: var(--green); margin-bottom: 12px; }
        .eyebrow-light { color: rgba(247,214,90,0.7); }
        .section-h2 { font-size: clamp(26px, 4vw, 40px); font-weight: 900; letter-spacing: -0.8px; color: var(--dark); line-height: 1.15; margin-bottom: 52px; }
        .section-h2-light { color: var(--white); }

        /* ── BENEFITS ── */
        .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .benefit-card { background: var(--white); border: 1.5px solid var(--gray-100); border-radius: var(--radius); padding: 32px 28px; transition: all 0.25s; }
        .benefit-card:hover { border-color: var(--yellow); box-shadow: var(--shadow-md); transform: translateY(-3px); }
        .benefit-icon { font-size: 32px; margin-bottom: 16px; display: block; }
        .benefit-title { font-size: 17px; font-weight: 800; color: var(--dark); margin-bottom: 8px; letter-spacing: -0.3px; }
        .benefit-desc { font-size: 14px; color: var(--gray-500); line-height: 1.7; font-weight: 500; }

        /* ── HOW IT WORKS ── */
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .step-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); padding: 36px 28px; position: relative; }
        .step-num { font-size: 56px; font-weight: 900; color: rgba(247,214,90,0.15); position: absolute; top: 20px; right: 24px; line-height: 1; letter-spacing: -2px; }
        .step-title { font-size: 18px; font-weight: 800; color: var(--white); margin-bottom: 12px; position: relative; letter-spacing: -0.3px; }
        .step-desc { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; font-weight: 500; position: relative; }

        /* ── PRODUCT ── */
        .product-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .product-img { background: var(--gray-50); border-radius: 20px; min-height: 420px; display: flex; align-items: center; justify-content: center; border: 1.5px dashed var(--gray-300); color: var(--gray-300); font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-align: center; padding: 24px; }
        .includes-list { list-style: none; padding: 0; margin: 0 0 28px; }
        .includes-item { font-size: 14px; color: var(--gray-700); padding: 11px 0; border-bottom: 1px solid var(--gray-100); display: flex; gap: 12px; align-items: flex-start; font-weight: 600; line-height: 1.5; }
        .includes-check { color: var(--green); font-weight: 900; flex-shrink: 0; margin-top: 1px; }
        .spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 32px; }
        .spec-box { background: var(--gray-50); border-radius: var(--radius-sm); padding: 14px 16px; border: 1px solid var(--gray-100); }
        .spec-label { font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.8px; }
        .spec-val { font-size: 15px; font-weight: 800; color: var(--dark); margin-top: 3px; }
        .price-block { background: var(--dark); color: var(--white); border-radius: var(--radius); padding: 24px 28px; }
        .price-label { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .price-val { font-size: 24px; font-weight: 900; color: var(--yellow); letter-spacing: -0.5px; margin-bottom: 4px; }
        .price-sub { font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 20px; font-weight: 500; }
        .btn-green { background: var(--green); color: var(--white); font-size: 16px; font-weight: 800; padding: 16px 32px; border: none; border-radius: 50px; cursor: pointer; transition: all 0.2s; font-family: inherit; width: 100%; }
        .btn-green:hover { background: #145c30; transform: translateY(-1px); }

        /* ── ORDER FORM ── */
        .order-layout { display: grid; grid-template-columns: 1fr 1.1fr; gap: 56px; align-items: start; }
        .form-group { margin-bottom: 14px; }
        .form-label { font-size: 13px; font-weight: 700; color: var(--gray-700); margin-bottom: 6px; display: block; }
        .form-input, .form-select, .form-textarea { width: 100%; padding: 13px 16px; font-size: 15px; font-family: inherit; font-weight: 600; border: 2px solid var(--gray-100); border-radius: var(--radius-sm); outline: none; transition: border-color 0.2s; background: var(--white); color: var(--dark); }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--yellow); }
        .form-textarea { min-height: 80px; resize: vertical; }
        .form-error { background: #fef2f2; color: #b91c1c; border-radius: var(--radius-sm); padding: 12px 16px; font-size: 14px; font-weight: 600; margin-bottom: 14px; }
        .form-success { background: var(--green-lt); color: var(--green); border-radius: var(--radius-sm); padding: 20px 24px; font-size: 16px; font-weight: 700; text-align: center; }
        .order-aside { padding: 36px; background: var(--dark); border-radius: 20px; color: var(--white); }
        .order-aside h3 { font-size: 28px; font-weight: 900; letter-spacing: -0.6px; margin-bottom: 12px; line-height: 1.15; }
        .order-aside p { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.7; font-weight: 500; margin-bottom: 32px; }
        .aside-bullet { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
        .aside-bullet-dot { width: 8px; height: 8px; background: var(--yellow); border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .aside-bullet-text { font-size: 14px; color: rgba(255,255,255,0.6); font-weight: 600; line-height: 1.5; }

        /* ── FAQ ── */
        .faq-list { max-width: 760px; }
        .faq-item { border-bottom: 1.5px solid var(--gray-100); }
        .faq-q { width: 100%; background: none; border: none; text-align: left; font-family: inherit; font-size: 16px; font-weight: 700; color: var(--dark); padding: 20px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; line-height: 1.4; }
        .faq-q:hover { color: var(--green); }
        .faq-icon { width: 28px; height: 28px; border-radius: 50%; background: var(--gray-100); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; font-weight: 700; color: var(--gray-500); transition: all 0.2s; }
        .faq-icon.open { background: var(--yellow); color: var(--dark); }
        .faq-a { font-size: 15px; color: var(--gray-500); line-height: 1.75; padding-bottom: 20px; font-weight: 500; }

        /* ── INSTAGRAM ── */
        .ig-strip { background: var(--green); padding: 56px 24px; text-align: center; }
        .ig-title { font-size: clamp(22px, 3vw, 32px); font-weight: 900; color: var(--white); margin-bottom: 6px; letter-spacing: -0.5px; }
        .ig-handle { font-size: 18px; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 28px; }
        .btn-white { background: var(--white); color: var(--green); font-size: 15px; font-weight: 800; padding: 14px 36px; border: none; border-radius: 50px; cursor: pointer; transition: all 0.2s; font-family: inherit; text-decoration: none; display: inline-block; }
        .btn-white:hover { background: rgba(255,255,255,0.9); transform: translateY(-1px); }

        /* ── FOOTER ── */
        .footer { background: var(--dark-2); padding: 52px 24px; }
        .footer-inner { max-width: 1160px; margin: 0 auto; }
        .footer-logo { font-size: 18px; font-weight: 900; color: var(--white); letter-spacing: -0.3px; margin-bottom: 6px; }
        .footer-company { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); margin-bottom: 4px; }
        .footer-detail { font-size: 13px; color: rgba(255,255,255,0.3); margin-bottom: 3px; font-weight: 500; }
        .footer-socials { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
        .footer-social { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.4); text-decoration: none; padding: 8px 14px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.2s; }
        .footer-social:hover { color: var(--white); border-color: rgba(255,255,255,0.3); }
        .footer-rights { font-size: 12px; color: rgba(255,255,255,0.2); margin-top: 32px; font-weight: 500; }
        .footer-divider { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 28px 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hero-stats { gap: 24px; }
          .product-layout, .order-layout { grid-template-columns: 1fr; }
          .nav-links .nav-link { display: none; }
          .spec-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .hero-stats { gap: 16px; }
          .stat-val { font-size: 28px; }
          .spec-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>
            <span className="logo-mark">SmartSolar</span>
            <span className="logo-tag">Mini</span>
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollTo("benefits")}>{c.nav.benefits}</button>
            <button className="nav-link" onClick={() => scrollTo("product")}>{c.nav.product}</button>
            <button className="nav-link" onClick={() => scrollTo("faq")}>{c.nav.faq}</button>
            <div className="lang-group">
              <button className={`lang-btn ${lang==="vi"?"on":"off"}`} onClick={() => setLang("vi")}>VI</button>
              <button className={`lang-btn ${lang==="en"?"on":"off"}`} onClick={() => setLang("en")}>EN</button>
            </div>
            <button className="nav-cta" onClick={() => scrollTo("order")}>{c.nav.order}</button>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">{c.hero.badge}</div>
          <h1>
            {c.hero.h1a}<br />
            <em>{c.hero.h1b}</em>
          </h1>
          <p className="hero-sub">{c.hero.sub}</p>
          <div className="hero-btns">
            <button className="btn-yellow" onClick={() => scrollTo("order")}>{c.hero.cta}</button>
            <button className="btn-ghost" onClick={() => scrollTo("benefits")}>{c.hero.ctaSec}</button>
          </div>
          <div className="hero-stats">
            {c.hero.stats.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-val">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-img">
            📸 Product photo placeholder — replace with unboxing / installation image
          </div>
        </div>
      </section>

      {/* ── MEDIA BAR ─────────────────────────────────────── */}
      <div className="media-bar">
        <div className="media-bar-inner">
          <div className="media-label">{c.media}</div>
          <div className="media-logos">
            {mediaLogos.map((m, i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className="media-logo-link">{m.name}</a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section className="section" id="benefits">
        <div className="section-inner">
          <div className="eyebrow">{c.benefits.eyebrow}</div>
          <h2 className="section-h2">{c.benefits.title}</h2>
          <div className="benefits-grid">
            {c.benefits.items.map((b, i) => (
              <div key={i} className="benefit-card">
                <span className="benefit-icon">{b.icon}</span>
                <div className="benefit-title">{b.title}</div>
                <div className="benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="eyebrow eyebrow-light">{c.howItWorks.eyebrow}</div>
          <h2 className="section-h2 section-h2-light">{c.howItWorks.title}</h2>
          <div className="steps-grid">
            {c.howItWorks.steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT ──────────────────────────────────────── */}
      <section className="section section-gray" id="product">
        <div className="section-inner">
          <div className="eyebrow">{c.product.eyebrow}</div>
          <h2 className="section-h2">{c.product.title}</h2>
          <p style={{ fontSize:16, color:"var(--gray-500)", marginTop:-40, marginBottom:48, fontWeight:600 }}>{c.product.subtitle}</p>
          <div className="product-layout">
            <div className="product-img">
              📸 Product bundle photo placeholder<br/><span style={{fontSize:11,marginTop:8,display:'block'}}>Replace with actual product image</span>
            </div>
            <div>
              <ul className="includes-list">
                {c.product.includes.map((item, i) => (
                  <li key={i} className="includes-item"><span className="includes-check">✓</span>{item}</li>
                ))}
              </ul>
              <div className="spec-grid">
                {c.product.specs.map((s, i) => (
                  <div key={i} className="spec-box">
                    <div className="spec-label">{s.label}</div>
                    <div className="spec-val">{s.val}</div>
                  </div>
                ))}
              </div>
              <div className="price-block">
                <div className="price-label">{lang==="vi"?"Giá":"Price"}</div>
                <div className="price-val">{c.product.price}</div>
                <div className="price-sub">{c.product.priceSub}</div>
                <button className="btn-yellow" style={{width:"100%", fontSize:15}} onClick={() => scrollTo("order")}>{c.product.cta}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORDER ────────────────────────────────────────── */}
      <section className="section" id="order">
        <div className="section-inner">
          <div className="order-layout">
            <div className="order-aside">
              <h3>{c.order.title}</h3>
              <p>{c.order.subtitle}</p>
              {c.product.includes.map((item, i) => (
                <div key={i} className="aside-bullet">
                  <div className="aside-bullet-dot" />
                  <div className="aside-bullet-text">{item}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="eyebrow">{c.order.eyebrow}</div>
              <h2 className="section-h2" style={{marginBottom:28, fontSize:"clamp(22px,3vw,32px)"}}>{c.order.title}</h2>
              {formState === "success" ? (
                <div className="form-success">{c.order.success}</div>
              ) : (
                <>
                  {formState === "error" && <div className="form-error">{c.order.required}</div>}
                  <div className="form-group">
                    <label className="form-label">{c.order.name} *</label>
                    <input className="form-input" value={form.name} onChange={upd("name")} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{c.order.phone} *</label>
                    <input className="form-input" type="tel" value={form.phone} onChange={upd("phone")} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{c.order.email}</label>
                    <input className="form-input" type="email" value={form.email} onChange={upd("email")} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{c.order.address} *</label>
                    <input className="form-input" value={form.address} onChange={upd("address")} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{c.order.locType}</label>
                    <select className="form-select" value={form.loc} onChange={upd("loc")}>
                      <option value="">---</option>
                      {c.order.locOpts.map((o, i) => <option key={i}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{c.order.note}</label>
                    <textarea className="form-textarea" value={form.note} onChange={upd("note")} />
                  </div>
                  <button className="btn-yellow" style={{width:"100%", fontSize:16, marginTop:4}} onClick={handleSubmit}>{c.order.submit}</button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section section-gray" id="faq">
        <div className="section-inner">
          <div className="eyebrow">{c.faq.eyebrow}</div>
          <h2 className="section-h2">{c.faq.title}</h2>
          <div className="faq-list">
            {c.faq.items.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                  {f.q}
                  <span className={`faq-icon ${openFaq===i?"open":""}`}>{openFaq===i?"−":"+"}</span>
                </button>
                {openFaq===i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ─────────────────────────────────────── */}
      <div className="ig-strip">
        <div className="ig-title">{c.ig.title}</div>
        <div className="ig-handle">{c.ig.handle}</div>
        <a href="https://instagram.com/smartsolarvn" target="_blank" rel="noopener noreferrer" className="btn-white">{c.ig.cta} →</a>
      </div>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">SmartSolar</div>
          <div className="footer-company">{c.footer.company}</div>
          <div className="footer-detail">{c.footer.reg}</div>
          <div className="footer-detail">{c.footer.address}</div>
          <div className="footer-detail">☎ {c.footer.phone}</div>
          <div className="footer-socials">
            <a href="https://facebook.com/smartsolarvn" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
            <a href="https://instagram.com/smartsolarvn" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
            <a href="https://linkedin.com/company/smartsolarvn" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
          </div>
          <hr className="footer-divider" />
          <div className="footer-rights">{c.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}
