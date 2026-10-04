'use client';
import { useState } from 'react';

type MenuItem = {
  id: number;
  name: string;
  ordinary?: number | null;
  jumbo?: number | null;
  small?: number | null;
  medium?: number | null;
  price?: number;
};

type CartItem = MenuItem & {
  type: string;
  price: number;
  qty: number;
};

type DeliveryInfo = {
  area: string;
  street: string;
  building: string;
  floor: string;
  apartment: string;
  phone: string;
};

export default function RestaurantMenu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState('delivery');
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    area: '', street: '', building: '', floor: '', apartment: '', phone: ''
  });

  const menuSections: { category: string; image: string; items: MenuItem[] }[] = [
    {
      category: "سندوتشات",
      image: "/images/menu/sandwiches.jpg",
      items: [
        { id: 1, name: "اقاشي لحم", ordinary: 90, jumbo: 135 },
        { id: 2, name: "اقاشي فراخ", ordinary: 85, jumbo: 120 },
        { id: 3, name: "اقاشي سمك", ordinary: 95, jumbo: 140 },
        { id: 4, name: "شيش طاووق", ordinary: 80, jumbo: 120 },
        { id: 5, name: "شيش كباب", ordinary: 120, jumbo: 150 },
        { id: 6, name: "كفتة", ordinary: 110, jumbo: 140 },
        { id: 7, name: "كريسبي", ordinary: 100, jumbo: 130 },
        { id: 8, name: "كريسبي بالجبنة", ordinary: 110, jumbo: 145 },
        { id: 9, name: "شيبس", ordinary: 50 }
      ]
    },
    {
      category: "لحوم وأسماك بالكيلو",
      image: "/images/menu/grills.jpg",
      items: [
        { id: 10, name: "كيلو شية ضاني جمر / صاج", ordinary: 850 },
        { id: 11, name: "كيلو شية ضاني صافي جمر / صاج", ordinary: 1500 },
        { id: 12, name: "كيلو فلتو لحم صافي صاج", ordinary: 1000 },
        { id: 13, name: "كيلو أقاشي فراخ", ordinary: 1000 },
        { id: 14, name: "كيلو أقاشي لحم", ordinary: 1250 },
        { id: 15, name: "كيلو فيليه سمك مشوي / مقلي", ordinary: 600 }
      ]
    },
    {
      category: "الوجبات",
      image: "/images/menu/meals.jpg",
      items: [
        { id: 16, name: "وجبة أقاشي لحم (3 أسياخ)", ordinary: 250 },
        { id: 17, name: "وجبة أقاشي فراخ (3 أسياخ)", ordinary: 200 },
        { id: 18, name: "وجبة أقاشي سمك (3 أسياخ)", ordinary: 235 },
        { id: 19, name: "وجبة شيش طاووق (3 أسياخ)", ordinary: 230 },
        { id: 20, name: "وجبة شيش كباب (3 أسياخ)", ordinary: 320 },
        { id: 21, name: "وجبة كفتة (3 أسياخ)", ordinary: 280 },
        { id: 22, name: "وجبة كريسبي", ordinary: 250 },
        { id: 23, name: "طبق بطاطس", ordinary: 60 },
        { id: 24, name: "فرخة مشوية كاملة", ordinary: 390 },
        { id: 25, name: "نصف فرخة مشوية", ordinary: 210 }
      ]
    },
    {
      category: "البيتزا والفطائر",
      image: "/images/menu/pizza.jpg",
      items: [
        { id: 26, name: "بيتزا فراخ", small: 190, medium: 225 },
        { id: 27, name: "بيتزا هوت دوق", small: 190, medium: 225 },
        { id: 28, name: "بيتزا زنغنا مشكلة", small: 215, medium: 250 },
        { id: 29, name: "بيتزا مارجريتا", small: 165, medium: 190 },
        { id: 30, name: "فطيرة حلوة", small: 190, medium: 210 }
      ]
    },
    {
      category: "الإضافات",
      image: "/images/menu/extras.jpg",
      items: [
        { id: 31, name: "زيادة عيشة", price: 5 },
        { id: 32, name: "زيادة 3 عيشات", price: 10 },
        { id: 33, name: "شطة بصل", price: 25 },
        { id: 34, name: "دكينية", price: 30 },
        { id: 35, name: "طحينية", price: 40 },
        { id: 36, name: "سلطة خضراء", price: 50 },
        { id: 37, name: "سلطة دقوة", price: 30 },
        { id: 38, name: "مخلل", price: 30 }
      ]
    },
    {
      category: "العصائر والمشروبات",
      image: "/images/menu/juices.jpg",
      items: [
        { id: 39, name: "فراولة", price: 55 },
        { id: 40, name: "فراولة بالحليب", price: 65 },
        { id: 41, name: "مانجو", price: 60 },
        { id: 42, name: "مانجو بالحليب", price: 70 },
        { id: 43, name: "موز بالحليب", price: 60 },
        { id: 44, name: "عصير كوكتيل", price: 70 },
        { id: 45, name: "برتقال", price: 50 },
        { id: 46, name: "ليمون", price: 45 },
        { id: 47, name: "ليمون نعناع", price: 50 },
        { id: 48, name: "عرديب", price: 70 },
        { id: 49, name: "كركدي", price: 55 },
        { id: 50, name: "مشروبات غازية", price: 35 },
        { id: 51, name: "مياه معدنية", price: 10 }
      ]
    },
    {
      category: "الموهيتو",
      image: "/images/menu/mojito.jpg",
      items: [
        { id: 52, name: "كرز", price: 50 },
        { id: 53, name: "خوخ", price: 50 },
        { id: 54, name: "بطيخ", price: 50 },
        { id: 55, name: "باشن فروت", price: 50 },
        { id: 56, name: "بلو بري", price: 50 },
        { id: 57, name: "بلاك بري", price: 50 },
        { id: 58, name: "ليمون نعناع", price: 50 },
        { id: 59, name: "فراولة", price: 50 }
      ]
    }
  ];

  const addToCart = (item: MenuItem, type: string = 'طلب', price: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.type === type);
      if (existing) {
        return prev.map(i => i.id === item.id && i.type === type ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, type, price, qty: 1 }];
    });
  };

  const updateQty = (id: number, type: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id && item.type === type) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const sendToWhatsApp = () => {
    if (orderType !== 'delivery') return;
    let message = `*طلب جديد من مطعم هاي زنغنا*%0A`;
    message += `نوع الطلب: دليفري 🛵%0A%0A`;
    message += `*الطلبات:*%0A`;
    cart.forEach(i => {
      message += `- ${i.name} (${i.type}) × ${i.qty} = ${i.price * i.qty} ج.س%0A`;
    });
    message += `%0A*الإجمالي:* ${totalAmount} ج.س%0A%0A`;
    message += `*بيانات التوصيل:*%0A`;
    message += `المنطقة: ${deliveryInfo.area}%0A`;
    message += `الشارع: ${deliveryInfo.street}%0A`;
    message += `رقم العمارة: ${deliveryInfo.building}%0A`;
    message += `الدور: ${deliveryInfo.floor} | الشقة: ${deliveryInfo.apartment}%0A`;
    message += `رقم التلفون: ${deliveryInfo.phone}`;

    const url = `https://wa.me/201114901625?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <main
      className="min-h-screen text-amber-50 p-4 md:p-8 font-sans bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `linear-gradient(rgba(70, 35, 10, 0.45), rgba(70, 35, 10, 0.45)), url('/wood-bg.jpg')` }}
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8 border-b border-amber-500/60 pb-6 bg-[#3d1e0a]/90 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl font-extrabold text-amber-300 mb-2">هاي زنغنا للأقاشي</h1>
          <p className="text-amber-100 text-lg">فرع فيصل - المنيو الكلاسيكي الأصلي</p>
        </header>

        {/* عرض أقسام المنيو كاملة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuSections.map((sec) => (
            <div key={sec.category} className="relative bg-[#2c1507]/90 border border-amber-600/50 p-5 pt-12 rounded-2xl shadow-2xl backdrop-blur-sm">

              {/* صورة القسم - متداخلة مع الحد العلوي في النص */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={sec.image}
                  alt={sec.category}
                  className="w-20 h-20 object-cover rounded-full border-4 border-amber-500 shadow-xl bg-amber-900"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              <h2 className="text-xl font-bold text-amber-300 mb-4 border-b border-amber-700/50 pb-2 text-center">
                {sec.category}
              </h2>

              <div className="space-y-3">
                {sec.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-[#1a0c04]/80 p-3 rounded-xl border border-amber-900/40">
                    <span className="font-medium text-amber-100 text-sm">{item.name}</span>
                    <div className="flex gap-2 text-xs">
                      {item.price !== undefined && (
                        <button onClick={() => addToCart(item, 'أساسي', item.price!)} className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-3 py-1 rounded">
                          السعر: {item.price} ج.س
                        </button>
                      )}
                      {item.ordinary !== undefined && item.ordinary !== null && item.small === undefined && (
                        <button onClick={() => addToCart(item, 'عادي', item.ordinary!)} className="bg-amber-900/90 hover:bg-amber-700 text-amber-200 px-2 py-1 rounded">
                          عادي: {item.ordinary}
                        </button>
                      )}
                      {item.jumbo !== undefined && item.jumbo !== null && (
                        <button onClick={() => addToCart(item, 'جامبو', item.jumbo!)} className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-2 py-1 rounded">
                          جامبو: {item.jumbo}
                        </button>
                      )}
                      {item.small !== undefined && (
                        <button onClick={() => addToCart(item, 'وسط', item.small!)} className="bg-amber-900/90 hover:bg-amber-700 text-amber-200 px-2 py-1 rounded">
                          وسط: {item.small}
                        </button>
                      )}
                      {item.medium !== undefined && (
                        <button onClick={() => addToCart(item, 'كبير', item.medium!)} className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-2 py-1 rounded">
                          كبير: {item.medium}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* سلة الطلبات */}
        <div className="bg-[#2c1507]/95 border border-amber-500 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">🛒 سلة الطلبات</h2>

          {cart.length === 0 ? (
            <p className="text-amber-200/60 mb-6">السلة فارغة، اختر وجباتك من المنيو بالأعلى.</p>
          ) : (
            <div className="space-y-3 mb-6">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-amber-900/50 pb-3 text-sm">
                  <div>
                    <span className="font-bold text-amber-100">{item.name}</span>
                    <span className="text-amber-300 text-xs block">({item.type}) - {item.price} ج.س</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-amber-950 border border-amber-700 rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item.id, item.type, -1)} className="px-2.5 py-1 bg-amber-900 hover:bg-amber-700 text-amber-100 font-bold">-</button>
                      <span className="px-3 text-amber-100 font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.type, 1)} className="px-2.5 py-1 bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold">+</button>
                    </div>
                    <span className="text-amber-400 font-bold w-16 text-left">{item.price * item.qty} ج.س</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between text-xl font-bold text-amber-300 pt-3 border-t border-amber-600">
                <span>الإجمالي الكلي:</span>
                <span>{totalAmount} ج.س</span>
              </div>
            </div>
          )}

          {/* نوع الطلب */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setOrderType('delivery')}
              className={`flex-1 py-3 rounded-xl font-bold transition ${orderType === 'delivery' ? 'bg-amber-500 text-zinc-950 shadow-lg' : 'bg-amber-950 text-amber-300'}`}>
              دليفري 🛵
            </button>
            <button
              onClick={() => setOrderType('dine-in')}
              className={`flex-1 py-3 rounded-xl font-bold transition ${orderType === 'dine-in' ? 'bg-amber-500 text-zinc-950 shadow-lg' : 'bg-amber-950 text-amber-300'}`}>
              استلام من الصالة 🍽️
            </button>
          </div>

          {/* حقول الدليفري */}
          {orderType === 'delivery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-[#1a0c04] p-4 rounded-xl border border-amber-700">
              <input type="text" placeholder="اسم المنطقة" value={deliveryInfo.area} onChange={e => setDeliveryInfo({...deliveryInfo, area: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="اسم الشارع" value={deliveryInfo.street} onChange={e => setDeliveryInfo({...deliveryInfo, street: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="رقم العمارة" value={deliveryInfo.building} onChange={e => setDeliveryInfo({...deliveryInfo, building: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="الدور" value={deliveryInfo.floor} onChange={e => setDeliveryInfo({...deliveryInfo, floor: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="رقم الشقة" value={deliveryInfo.apartment} onChange={e => setDeliveryInfo({...deliveryInfo, apartment: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
              <input type="text" placeholder="رقم التلفون" value={deliveryInfo.phone} onChange={e => setDeliveryInfo({...deliveryInfo, phone: e.target.value})} className="p-2.5 bg-zinc-900 border border-amber-800 rounded-lg text-amber-100 text-sm focus:outline-none focus:border-amber-500" />
            </div>
          )}

          {/* زر الواتساب */}
          <button
            onClick={sendToWhatsApp}
            disabled={orderType !== 'delivery' || cart.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition ${
              orderType === 'delivery' && cart.length > 0
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}>
            {orderType === 'delivery' ? 'إرسال الطلب عبر الواتساب 📱' : 'الطلب في الصالة لا يتطلب إرسال واتساب 🍽️'}
          </button>
        </div>
      </div>
    </main>
  );
}
