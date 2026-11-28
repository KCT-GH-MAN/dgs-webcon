/*! DGS Webcon - goi trang tri web con CNLG | ban 1.5.0 | cau hinh dat trong window.DGS_CFG (the GTM cua tung web) */
/* ===== DANH SACH TEN MIEN DUOC DUNG GOI (them khach: them 1 dong; ngung bao tri: xoa dong do) ===== */
var DGS_ALLOW=[
  'deal.giasock.com'
];
window.__dgsOk=(function(){var h=String(location.hostname).toLowerCase().replace(/^www\./,'');
  for(var i=0;i<DGS_ALLOW.length;i++){if(h===DGS_ALLOW[i])return true}
  try{console.warn('[DGS] Ten mien '+h+' chua duoc kich hoat goi trang tri web. Lien he 0981 657 659 de dang ky.')}catch(e){}return false})();
(function(){if(window.__dgsCss||!window.__dgsOk)return;window.__dgsCss=1;var s=document.createElement('style');s.id='dgs-glass';var c=document.currentScript,m=c&&c.src&&c.src.match(/^(.*\/)dgs\.js/),B=window.__dgsBase||((m?m[1]:'https://cdn.jsdelivr.net/gh/KCT-GH-MAN/dgs-webcon@main/')+'img/');s.textContent="/* ==== DealGiaSock – Apple Glass (sáng) · bản nhẹ ==== */\n:root{--g-sh:0 6px 22px rgba(15,23,42,.07);--g-acc:#ff7a1a}\nbody{-webkit-font-smoothing:antialiased}\n/* nen trang: dai mau nhe (khong co dinh khi cuon -> khong giat) */\n.ant-app.bg-gray-100{background:radial-gradient(1100px 520px at 8% 0,rgba(255,170,90,.14),transparent 60%),radial-gradient(900px 480px at 96% 6%,rgba(120,170,255,.12),transparent 60%),#f3f5f9 !important}\n/* thanh tren cung kieu kinh: chi 1 lop blur duy nhat tren trang */\nheader > div[class*=\"fixed\"]{background:rgba(255,255,255,.94) !important;border-bottom:1px solid rgba(15,23,42,.06) !important;box-shadow:0 4px 18px rgba(15,23,42,.05)}\nheader{background:transparent !important}\n@media (min-width:1024px) and (hover:hover){header > div[class*=\"fixed\"]{background:rgba(255,255,255,.78) !important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}}\nheader .ant-dropdown-trigger.bg-primary{box-shadow:0 6px 16px rgba(255,122,26,.3)}\n.ant-input-search .ant-input-affix-wrapper{border-radius:999px 0 0 999px !important;border-color:rgba(15,23,42,.08) !important}\n.ant-input-search .ant-input-affix-wrapper:focus-within{box-shadow:0 0 0 4px rgba(255,122,26,.14) !important;border-color:var(--g-acc) !important}\n.ant-input-search .ant-input-search-button,.ant-input-search .ant-input-group-addon button{border-radius:0 999px 999px 0 !important}\n/* the san pham: nen trang, bo goc, bong mem (khong blur) */\n.grid.lg\\:grid-cols-6 > *{border-radius:18px !important;overflow:hidden;background:#fff !important;border:1px solid rgba(15,23,42,.05) !important;box-shadow:var(--g-sh);transition:transform .22s ease,box-shadow .22s ease}\n@media (hover:hover){.grid.lg\\:grid-cols-6 > *:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(15,23,42,.12)}}\n/* chi ve the khi sap hien tren man hinh -> cuon muot khi da tai nhieu san pham */\n.grid.lg\\:grid-cols-6 > div{content-visibility:auto;contain-intrinsic-size:auto 340px}\n.grid.lg\\:grid-cols-6 .rounded-b-md{border:0 !important}\n/* nhan */\n.bg-yellow-300.text-red-500{background:linear-gradient(135deg,#ff5f6d,#ff9a3c) !important;color:#fff !important;border-radius:999px;padding:1px 8px !important;font-weight:600;display:inline-flex !important;align-items:center;gap:2px;margin-left:0 !important}\n.bg-yellow-300.text-red-500 .lucide-zap{position:static !important;width:12px;height:12px;flex:0 0 auto;margin-left:-3px;fill:#fff !important}\nspan.bg-red-500.absolute{border-radius:999px !important;box-shadow:0 3px 10px rgba(239,68,68,.25)}\nspan.bg-teal-600{display:none !important}\n.grid .text-lg.text-red-500{font-weight:700 !important;letter-spacing:-.2px}\n/* 1) dong Tiet kiem */\n.dgs-save{margin-top:2px;font-size:12px;font-weight:600;color:#16a34a}\n/* 2) nhan GIA SOC cho deal giam >= 90% */\n.dgs-hot{position:absolute;right:8px;top:8px;z-index:11;padding:3px 9px;border-radius:999px;font-size:11px;font-weight:700;color:#fff;letter-spacing:.3px;\n  background:linear-gradient(135deg,#ff3d3d,#ff8a00);box-shadow:0 4px 12px rgba(255,61,61,.35);overflow:hidden}\n.dgs-hot{display:inline-flex !important;align-items:center;white-space:nowrap}.dgs-hot svg{flex:0 0 auto}\n.dgs-hot::after{content:\"\";position:absolute;top:0;left:0;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);transform:translateX(-150%) skewX(-20deg);animation:dgs-shine 3.2s ease-in-out infinite}\n@keyframes dgs-shine{0%,60%{transform:translateX(-150%) skewX(-20deg)}100%{transform:translateX(350%) skewX(-20deg)}}\n/* 3) the hien dan khi cuon toi */\n.dgs-reveal{opacity:0;transform:translateY(14px);transition:opacity .45s ease,transform .45s ease}\n.dgs-reveal.dgs-in{opacity:1;transform:none}\n/* 4) thanh Hoang Sa - Truong Sa + lien he (toi gian sang trong) */\n#dgs-banner{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:14px;max-width:none;margin:8px 0 0;padding:6px 16px;\n  background:#fff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}\n/* bieu tuong non la - hac chay truoc dong chu */\n#dgs-banner .dgs-ico{display:inline-block;flex:0 0 auto;width:49px;height:40px;margin-right:10px;background:url(\"@IMG@non-la.webp\") center/contain no-repeat}\n#dgs-banner .dgs-track{flex:1 1 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}\n#dgs-banner .dgs-run{display:inline-flex;align-items:center;white-space:nowrap;will-change:transform}\n#dgs-banner.dgs-go .dgs-run{animation:dgs-run 22s linear infinite}\n@media (hover:hover) and (pointer:fine){#dgs-banner:hover .dgs-run{animation-play-state:paused}}\n#dgs-banner.dgs-pause .dgs-run,#dgs-banner.dgs-idle .dgs-run{animation-play-state:paused}\n#dgs-banner .dgs-run span{font-size:14px;color:#334155}\n#dgs-banner .dgs-vn{font-weight:600;color:#b91c1c !important}\n#dgs-banner .dgs-heart{font-style:normal;margin-left:4px}\n#dgs-banner .dgs-sep{font-style:normal;margin:0 18px;color:#cbd5e1}\n#dgs-banner a.dgs-tel{margin-left:4px;color:#0f172a;font-weight:600;text-decoration:none}\n@keyframes dgs-run{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n@media (prefers-reduced-motion:reduce){.dgs-reveal{opacity:1;transform:none;transition:none}.dgs-hot::after{animation:none}#dgs-banner .dgs-run{animation:none}}\n@media (max-width:640px){.grid.lg\\:grid-cols-6 > *{border-radius:14px !important}#dgs-banner{margin:6px 0 0}#dgs-banner .dgs-run span{font-size:13px}#dgs-banner{gap:8px;padding:6px 12px 6px 10px}}\n\n/* an chu Mall + icon PMH */\n.grid.lg\\:grid-cols-6 > div span.bg-red-500.absolute.left-1.top-1{display:none !important}\nimg[src*=\"/icons/pmh.png\"]{display:none !important}\n/* thanh sap xep + loc */\n#dgs-tools{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:4px 0 14px}\n#dgs-tools .dgs-sort{display:flex;align-items:center;gap:6px;font-size:13px;color:#334155;font-weight:600}\n#dgs-tools select{appearance:none;-webkit-appearance:none;padding:7px 30px 7px 12px;border:1px solid #e2e8f0;border-radius:999px;background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2364748b'/%3E%3C/svg%3E\") no-repeat right 12px center;font-size:13px;color:#0f172a;cursor:pointer;box-shadow:0 1px 3px rgba(15,23,42,.06)}\n#dgs-tools .dgs-chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}\n#dgs-tools .dgs-chips::-webkit-scrollbar{display:none}\n#dgs-tools button{flex:0 0 auto;padding:6px 12px;border:1px solid #e2e8f0;border-radius:999px;background:#fff;font-size:13px;color:#334155;cursor:pointer;white-space:nowrap}\n#dgs-tools button.on{background:#ef4444;border-color:#ef4444;color:#fff;font-weight:600}\n.dgs-off{display:none !important}\n/* nhan MOI + nut chia se */\n.dgs-new{position:absolute;left:8px;top:8px;z-index:11;padding:3px 9px;border-radius:999px;font-size:11px;font-weight:700;color:#fff;background:#2563eb;box-shadow:0 2px 6px rgba(37,99,235,.35)}\n.dgs-share{position:absolute;right:8px;bottom:8px;z-index:11;width:32px;height:32px;border:0;border-radius:50%;background:rgba(255,255,255,.92);box-shadow:0 2px 8px rgba(15,23,42,.18);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}\n.dgs-share svg{width:16px;height:16px}\n.dgs-toast{position:fixed;left:50%;bottom:calc(96px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:2147483646;background:#0f172a;color:#fff;font-size:13px;padding:8px 16px;border-radius:999px;opacity:0;transition:opacity .25s;pointer-events:none}\n.dgs-toast.show{opacity:.92}\n@media (max-width:640px){#dgs-tools{margin:2px 0 10px}#dgs-tools .dgs-chips{width:100%}.dgs-share{width:28px;height:28px}}\n\n/* ===== Yeu thich + Ban vua xem ===== */\n.dgs-fav{position:absolute;left:8px;bottom:8px;z-index:11;width:32px;height:32px;border:0;border-radius:50%;background:rgba(255,255,255,.92);box-shadow:0 2px 8px rgba(15,23,42,.18);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}\n.dgs-fav svg{width:17px;height:17px;fill:none;stroke:#ef4444;stroke-width:2.2;transition:transform .15s}\n.dgs-fav.on svg{fill:#ef4444}\n.dgs-fav:active svg{transform:scale(1.25)}\n#dgs-tools .dgs-favbtn{flex:0 0 auto;border-color:#fecaca;color:#dc2626;font-weight:600}\n#dgs-favp{position:fixed;inset:0;z-index:2147483640;background:rgba(15,23,42,.45);display:flex;align-items:flex-end;justify-content:center}\n#dgs-favp .box{width:100%;max-width:560px;max-height:78vh;overflow:auto;background:#fff;border-radius:18px 18px 0 0;padding:14px 16px 20px;-webkit-overflow-scrolling:touch}\n@media (min-width:768px){#dgs-favp{align-items:center}#dgs-favp .box{border-radius:18px}}\n#dgs-favp .hd{display:flex;align-items:center;justify-content:space-between;font-weight:700;font-size:16px;color:#0f172a;margin-bottom:8px}\n#dgs-favp .x{border:0;background:#f1f5f9;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;color:#475569}\n#dgs-favp .it{display:flex;gap:12px;align-items:center;padding:10px 0;border-top:1px solid #f1f5f9}\n#dgs-favp .it img{width:64px;height:64px;border-radius:10px;object-fit:cover;flex:0 0 auto;background:#f8fafc}\n#dgs-favp .it a{flex:1 1 auto;min-width:0;color:#0f172a;text-decoration:none;font-size:13px;line-height:1.35}\n#dgs-favp .it a span{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n#dgs-favp .it b{display:block;color:#ef4444;font-size:14px;margin-top:3px}\n#dgs-favp .rm{border:0;background:none;color:#94a3b8;font-size:20px;cursor:pointer;padding:4px 6px}\n#dgs-favp .empty{color:#64748b;font-size:14px;padding:18px 0;text-align:center}\n#dgs-recent{margin:2px 0 12px}\n#dgs-recent .hd{display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;color:#334155;margin-bottom:8px}\n#dgs-recent .hd button{border:0;background:none;color:#94a3b8;font-size:12px;cursor:pointer}\n#dgs-recent .row{display:flex;gap:10px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding-bottom:2px}\n#dgs-recent .row::-webkit-scrollbar{display:none}\n#dgs-recent a{flex:0 0 132px;display:flex;flex-direction:column;background:#fff;border:1px solid rgba(15,23,42,.06);border-radius:12px;overflow:hidden;color:#0f172a;text-decoration:none}\n#dgs-recent a img{width:100%;height:96px;object-fit:cover;background:#f8fafc}\n#dgs-recent a span{font-size:12px;line-height:1.3;padding:6px 8px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n#dgs-recent a b{font-size:13px;color:#ef4444;padding:2px 8px 8px}\n\n/* ===== Da xem + nut Nhan deal moi ngay ===== */\n.dgs-seen{position:absolute;left:8px;top:8px;z-index:11;padding:3px 8px;border-radius:999px;font-size:11px;font-weight:600;color:#475569;background:rgba(255,255,255,.94);box-shadow:0 1px 4px rgba(15,23,42,.15)}\n#dgs-follow{position:fixed;right:18px;bottom:220px;z-index:2147483646;box-sizing:border-box;display:flex;align-items:center;gap:5px;height:42px;max-width:230px;padding:0 14px 0 6px;border-radius:999px;background:#fff;border:1px solid #fecaca;color:#c8102e !important;font-size:12.5px;font-weight:700;text-decoration:none;white-space:nowrap;overflow:hidden;box-shadow:0 6px 16px rgba(200,16,46,.2);transition:max-width .45s ease,padding .45s ease}\n#dgs-follow svg{width:28px;height:28px;flex:0 0 auto;transform-origin:50% 12%;animation:dgs-bell 2.4s ease-in-out infinite}\n@keyframes dgs-bell{0%,60%,100%{transform:rotate(0)}10%{transform:rotate(14deg)}20%{transform:rotate(-12deg)}30%{transform:rotate(8deg)}40%{transform:rotate(-5deg)}50%{transform:rotate(2deg)}}\n#dgs-follow.mini{width:42px;max-width:42px;padding:0;gap:0;justify-content:center}\n#dgs-follow.mini span{display:none}\n/* chuong nhun cung nhip voi Zalo, Facebook de 3 nut dong deu */\n#dgs-follow.mini{animation:none}\n@keyframes dgs-cpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}\n@media (hover:hover){#dgs-follow.mini:not(.tch):hover{width:auto;max-width:230px;padding:0 14px 0 6px;gap:5px;justify-content:flex-start}#dgs-follow.mini:not(.tch):hover span{display:inline}#dgs-follow.mini:not(.tch):hover{animation:none}}\n/* mu ong gia Noel tren nut Zalo, Facebook */\n#deal-contact-buttons{gap:26px !important}#deal-contact-buttons a{position:relative;overflow:visible !important;animation:dgs-pulse 1.6s ease-in-out infinite !important}#deal-contact-buttons a:nth-child(2){animation-delay:.25s !important}@keyframes dgs-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}@media (prefers-reduced-motion:reduce){#deal-contact-buttons a{animation:none !important}}\n#deal-contact-buttons a img{border-radius:50%}\nhtml:not(.dgs-nonoel) #deal-contact-buttons a{background:transparent !important;box-shadow:none !important}\nhtml:not(.dgs-nonoel) #deal-contact-buttons a img{visibility:hidden}\n#deal-contact-buttons .dgs-hat{position:absolute;left:0;top:-15px;width:52px;height:57px;background:center/contain no-repeat;pointer-events:none}\n#deal-contact-buttons a[href*=\"zalo\"] .dgs-hat{background-image:url(@IMG@mu-zalo-noel.webp)}\n#deal-contact-buttons a[href*=\"facebook\"] .dgs-hat{background-image:url(@IMG@mu-fb-noel.webp)}\n/* giu nguyen mau 3 nut khi dien thoai bat giao dien toi */\n#dgs-follow,#deal-contact-buttons,#deal-contact-buttons *{color-scheme:only light}\n@media (prefers-reduced-motion:reduce){#dgs-follow svg{animation:none}}\n\n/* ===== Trang chi tiet san pham ===== */\nh1.ant-typography > span.bg-red-500{display:none !important}\n#dgs-detail{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;margin-top:6px}\n#dgs-detail .sv{font-size:15px;font-weight:700;color:#16a34a}\n#dgs-detail button{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border-radius:999px;border:1px solid #fecaca;background:#fff;color:#dc2626;font-size:14px;font-weight:600;cursor:pointer}\n#dgs-detail button.on{background:#ef4444;border-color:#ef4444;color:#fff}\n/* o Flash Sale noi bat + loi nhac */\na[href=\"/flash-sale\"] .rounded-full.bg-gray-100{position:relative;background:linear-gradient(135deg,#ff3d3d,#ff8a00) !important;box-shadow:0 6px 18px rgba(255,61,61,.35)}\na[href=\"/flash-sale\"] .rounded-full.bg-gray-100::after{content:\"\";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(255,90,40,.55);animation:dgs-ring 1.8s ease-out infinite;pointer-events:none}\na[href=\"/flash-sale\"] .lucide-zap{stroke:#fff !important;fill:#fff !important;animation:dgs-zap 1.8s ease-in-out infinite;transform-origin:50% 50%}\na[href=\"/flash-sale\"] h3 span{font-weight:700;letter-spacing:.2px}\n@keyframes dgs-ring{0%{transform:scale(.92);opacity:.9}100%{transform:scale(1.25);opacity:0}}\n@keyframes dgs-zap{0%,100%{transform:scale(.8)}50%{transform:scale(.92)}}\n#dgs-ftip{position:absolute;z-index:9999;max-width:230px;padding:11px 30px 14px 13px;border:0;border-radius:16px;background:linear-gradient(135deg,#ff3d3d,#ff8a00);color:#fff;font-size:13px;line-height:1.45;font-weight:600;box-shadow:0 12px 32px rgba(255,61,61,.42);cursor:pointer;opacity:0;transform:scale(.3);pointer-events:none;color-scheme:only light}\n#dgs-ftip.r{transform-origin:0 50%}#dgs-ftip.b{transform-origin:30px 0}\n#dgs-ftip.on{pointer-events:auto;animation:dgs-pop .65s cubic-bezier(.34,1.56,.64,1) forwards}\n#dgs-ftip.off{opacity:1;transform:none;animation:dgs-out .3s ease-in forwards}\n@keyframes dgs-pop{0%{opacity:0;transform:scale(.3)}60%{opacity:1}100%{opacity:1;transform:scale(1)}}\n@keyframes dgs-out{to{opacity:0;transform:scale(.6)}}\n#dgs-ftip::before{content:\"\";position:absolute;width:12px;height:12px;background:#ff4630;transform:rotate(45deg);border-radius:2px}\n#dgs-ftip.r::before{left:-5px;top:var(--ay,20px)}#dgs-ftip.b::before{top:-5px;left:var(--ax,30px)}\n#dgs-ftip b,#dgs-fcard b{color:#fff59d}\n#dgs-ftip i,#dgs-fcard i{position:absolute;right:9px;top:7px;z-index:2;font-style:normal;color:#fff;text-shadow:0 0 3px rgba(0,0,0,.45);font-size:16px;line-height:1;padding:2px;cursor:pointer}\n#dgs-ftip em,#dgs-fcard em{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none}\n#dgs-ftip em::after,#dgs-fcard em::after{content:\"\";position:absolute;top:0;bottom:0;width:45%;left:0;transform:translateX(-140%);background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);animation:dgs-shine2 2.4s ease-in-out .7s infinite}\n@keyframes dgs-shine2{0%{transform:translateX(-140%)}55%,100%{transform:translateX(270%)}}\n#dgs-ftip em s,#dgs-fcard em s{position:absolute;top:-14px;color:#fff;opacity:.8;text-decoration:none;line-height:1;animation:dgs-snow 4s linear infinite}\n@keyframes dgs-snow{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(6px,50px) rotate(90deg)}100%{transform:translate(-4px,110px) rotate(180deg)}}\n#dgs-ftip .cap,#dgs-fcard .cap{position:absolute;left:-6px;right:-6px;top:0;z-index:1;aspect-ratio:2863/294;pointer-events:none;text-decoration:none;background:url(@IMG@tuyet-popup.webp) 0 0/100% 100% no-repeat;transform:translateY(calc(-71% + 6px));filter:drop-shadow(0 2px 2px rgba(0,0,0,.12))}\nhtml.dgs-t-noel #dgs-ftip{padding-top:15px}html.dgs-t-noel #dgs-fcard{padding-top:16px}\n#dgs-ftip u,#dgs-fcard u{position:absolute;left:12px;right:12px;bottom:5px;height:3px;border-radius:3px;background:rgba(255,255,255,.35);overflow:hidden;text-decoration:none}\n#dgs-ftip u::after,#dgs-fcard u::after{content:\"\";position:absolute;inset:0;background:#fff;transform-origin:0 50%;animation:dgs-bar var(--t,9s) linear forwards}\n@keyframes dgs-bar{from{transform:scaleX(1)}to{transform:scaleX(0)}}\n#dgs-ftip .z,#dgs-fcard .z{display:inline-block;animation:dgs-wig 1.2s ease-in-out infinite}\n@keyframes dgs-wig{0%,100%{transform:rotate(0)}25%{transform:rotate(-15deg) scale(1.2)}75%{transform:rotate(12deg)}}\n#dgs-fcard{position:fixed;left:50%;bottom:76px;z-index:2147483640;width:min(400px,calc(100vw - 150px));box-sizing:border-box;display:flex;align-items:center;gap:10px;padding:12px 28px 14px 10px;border-radius:18px;background:linear-gradient(135deg,#ff3d3d,#ff8a00);color:#fff;box-shadow:0 14px 36px rgba(255,61,61,.45);font-size:13px;line-height:1.35;font-weight:600;cursor:pointer;transform:translate(-50%,160%);opacity:0;color-scheme:only light}\n#dgs-fcard.on{animation:dgs-up .7s cubic-bezier(.34,1.56,.64,1) forwards}\n#dgs-fcard.off{animation:dgs-down .35s ease-in forwards}\n@keyframes dgs-up{from{transform:translate(-50%,160%);opacity:0}to{transform:translate(-50%,0);opacity:1}}\n@keyframes dgs-down{from{transform:translate(-50%,0);opacity:1}to{transform:translate(-50%,160%);opacity:0}}\n#dgs-fcard .ic{flex:0 0 38px;height:38px;border-radius:50%;background:rgba(255,255,255,.22);display:flex;align-items:center;justify-content:center;animation:dgs-ic 1.4s ease-in-out infinite}\n#dgs-fcard .ic svg{width:20px;height:20px;display:block}\n@keyframes dgs-ic{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.55)}50%{box-shadow:0 0 0 7px rgba(255,255,255,0)}}\n#dgs-fcard .tx{flex:1;min-width:0}\n#dgs-fcard .go{flex:0 0 auto;background:#fff;color:#ef4444;border-radius:999px;padding:6px 11px;font-size:12px;font-weight:700;white-space:nowrap}\n@media (min-width:1024px){#dgs-fcard{bottom:24px}}\n#dgs-follow.mini.open{width:auto;max-width:230px;padding:0 14px 0 6px;gap:5px;justify-content:flex-start}#dgs-follow.mini.open span{display:inline}\n@media (max-width:480px){\n#dgs-fcard{left:10px;width:calc(100vw - 90px);flex-wrap:wrap;gap:8px 10px;padding:16px 26px 16px 10px;transform:translate(0,160%)}\n#dgs-fcard.on{animation-name:dgs-up-m}\n#dgs-fcard.off{animation-name:dgs-down-m}\n#dgs-fcard .tx{flex:1 1 0}\n#dgs-fcard .go{flex:1 1 100%;text-align:center;padding:8px 11px}\n}\n@keyframes dgs-up-m{from{transform:translate(0,160%);opacity:0}to{transform:none;opacity:1}}\n@keyframes dgs-down-m{from{transform:none;opacity:1}to{transform:translate(0,160%);opacity:0}}\n@media (prefers-reduced-motion:reduce) and (max-width:480px){#dgs-fcard.on{transform:none}}\n@media (prefers-reduced-motion:reduce){#dgs-ftip.on{animation:none;opacity:1;transform:none}#dgs-fcard.on{animation:none;opacity:1;transform:translate(-50%,0)}#dgs-ftip em::after,#dgs-fcard em::after,#dgs-ftip .z,#dgs-fcard .z,#dgs-fcard .ic,#dgs-ftip em s,#dgs-fcard em s{animation:none}#dgs-ftip em s,#dgs-fcard em s{display:none}}\n@media (prefers-reduced-motion:reduce){a[href=\"/flash-sale\"] .rounded-full.bg-gray-100::after,a[href=\"/flash-sale\"] .lucide-zap{animation:none}}\n/* giao dien Tet */\n.dgs-t-tet #dgs-ftip,.dgs-t-tet #dgs-fcard{background:linear-gradient(135deg,#d7141a,#f2a900);box-shadow:0 12px 32px rgba(215,20,26,.4)}\n.dgs-t-tet #dgs-ftip::before{background:#d92a12}\n.dgs-t-tet #dgs-ftip em s,.dgs-t-tet #dgs-fcard em s{opacity:.95}\n\n/* giao dien Tet: logo Zalo/Facebook cai hoa mai + li xi */\n.dgs-t-tet #deal-contact-buttons a[href*=\"facebook\"] .dgs-hat{left:0;top:-12px;width:51px;height:56px;background-image:url(@IMG@tet-fb.webp)}\n.dgs-t-tet #deal-contact-buttons a[href*=\"zalo\"] .dgs-hat{left:0;top:-10px;width:51px;height:53px;background-image:url(@IMG@tet-zalo.webp)}\n\n/* dien thoai: he lo o danh muc thu 3 + goi y vuot */\n.dgs-catfade,.dgs-cathint{display:none}\n@media (max-width:767px){\n.dgs-catrow>a{flex-basis:40% !important}\n.dgs-catbox{position:relative}\n.dgs-catend .dgs-catfade{opacity:0}.dgs-catfade{transition:opacity .25s}\n.dgs-catfade{display:flex;position:absolute;right:0;top:0;bottom:0;width:56px;align-items:center;justify-content:flex-end;padding-right:6px;pointer-events:none;background:linear-gradient(90deg,rgba(255,255,255,0),#fff 75%);z-index:2;font-style:normal}\n.dgs-catfade b{width:26px;height:26px;border-radius:50%;background:#fff;border:1px solid #e5e7eb;box-shadow:0 2px 6px rgba(15,23,42,.15);display:flex;align-items:center;justify-content:center;font-size:20px;line-height:1;color:#ef4444;animation:dgs-catarr 1.4s ease-in-out infinite}\n.dgs-cathint{display:block;text-align:right;font-size:12.5px;font-weight:600;color:#ef4444;margin:6px 6px 0}\n.dgs-nudge{animation:dgs-catnudge 1.3s ease-in-out 1}\n}\n@keyframes dgs-catarr{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}\n@keyframes dgs-catnudge{0%,100%{translate:0 0}40%{translate:-60px 0}}\n@media (prefers-reduced-motion:reduce){.dgs-catfade b,.dgs-nudge{animation:none}}\n\n/* ===== 1.4.0: gia giam tu luc luu ===== */\n.dgs-drop{display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:top;margin-top:3px;font-size:11.5px;font-weight:700;line-height:1.4;color:#fff;background:#16a34a;border-radius:6px;padding:2px 7px}\n#dgs-detail .dr{font-size:13px;font-weight:700;color:#fff;background:#16a34a;border-radius:8px;padding:4px 10px}\n#dgs-favp .it b s{color:#94a3b8;font-weight:400;font-size:12px;margin-left:6px}\n#dgs-favp .it b em{font-style:normal;margin-left:6px;font-size:11.5px;color:#fff;background:#16a34a;border-radius:6px;padding:1px 6px;white-space:nowrap}\n#dgs-dropt{position:fixed;left:50%;top:132px;z-index:2147483645;display:flex;align-items:center;gap:8px;max-width:calc(100vw - 24px);padding:8px 14px 8px 8px;border:0;border-radius:999px;background:#fff;color:#0f172a;font:600 13.5px/1.3 inherit;white-space:nowrap;box-shadow:0 10px 30px rgba(15,23,42,.18);cursor:pointer;opacity:0;transform:translate(-50%,-12px);transition:opacity .3s,transform .3s}\n#dgs-dropt.show{opacity:1;transform:translate(-50%,0)}\n#dgs-dropt b{display:grid;place-items:center;flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;font-size:14px}\n#dgs-dropt span{overflow:hidden;text-overflow:ellipsis}\n#dgs-dropt u{text-decoration:none;color:#ef4444;font-weight:700}\n/* ===== hoi Zalo ===== */\n#dgs-detail button.zq{border-color:#bfdbfe;color:#0068ff}\n#dgs-detail button.zq img{width:20px;height:20px;border-radius:5px}\n/* ===== thanh Mua ngay ===== */\n#dgs-buy{position:fixed;left:0;right:0;bottom:0;z-index:2147483600;display:flex;align-items:center;gap:12px;padding:8px 12px calc(8px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid #eef0f4;box-shadow:0 -6px 20px rgba(15,23,42,.08);transform:translateY(120%);visibility:hidden;transition:transform .25s ease,visibility 0s .25s}\n#dgs-buy.show{transform:none;visibility:visible;transition:transform .25s ease,visibility 0s}\n#dgs-buy .zq{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:2px;padding:0 2px;border:0;background:none;color:#0068ff;font-size:10.5px;font-weight:600;cursor:pointer}\n#dgs-buy .zq img{width:24px;height:24px;border-radius:6px}\n#dgs-buy .pr{flex:1 1 auto;min-width:0;line-height:1.2}\n#dgs-buy .pr b{display:block;color:#ef4444;font-size:17px;font-weight:800;white-space:nowrap}\n#dgs-buy .pr s{color:#94a3b8;font-size:12px}\n#dgs-buy .go{flex:0 0 auto;height:44px;padding:0 24px;border:0;border-radius:12px;background:linear-gradient(135deg,#ff7a1a,#ef4444);color:#fff;font-size:15px;font-weight:700;box-shadow:0 6px 14px rgba(239,68,68,.28);cursor:pointer}\n#dgs-buy .go:active{transform:scale(.97)}\nhtml.dgs-hasbar #deal-contact-buttons{bottom:140px !important}\nhtml.dgs-hasbar #dgs-follow{bottom:274px}\nhtml.dgs-hasbar .dgs-toast{bottom:calc(136px + env(safe-area-inset-bottom))}\n#deal-contact-buttons,#dgs-follow{transition:bottom .25s ease}\nform.dgs-need{border-radius:12px;animation:dgs-need 1.6s ease}\n@keyframes dgs-need{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0)}20%,60%{box-shadow:0 0 0 4px rgba(239,68,68,.35)}}\n/* ===== nut len dau trang ===== */\n#dgs-top{position:fixed;right:20px;bottom:272px;z-index:2147483600;display:grid;place-items:center;width:38px;height:38px;padding:0;border:0;border-radius:50%;background:#fff;color:#ff7a1a;box-shadow:0 6px 18px rgba(15,23,42,.16);cursor:pointer;opacity:0;transform:translateY(12px) scale(.9);pointer-events:none;transition:opacity .25s,transform .25s}\n#dgs-top.show{opacity:1;transform:none;pointer-events:auto}\n#dgs-top svg{width:20px;height:20px}\nhtml.dgs-hasbar #dgs-top{bottom:326px}\n@media (min-width:1024px){#dgs-top{right:20px;bottom:30px}}\n@media (prefers-reduced-motion:reduce){#dgs-buy,#dgs-top,#dgs-dropt,form.dgs-need{transition:none;animation:none}}\n\n#dgs-favp{z-index:2147483647}\n.dgs-fav::before,.dgs-share::before{content:\"\";position:absolute;inset:-7px;border-radius:50%}\n\n/* ===== 1.4.1: chu thich nut Hoi Zalo ===== */\n.zq{position:relative}\n.zq .tip{position:absolute;left:50%;bottom:calc(100% + 10px);z-index:5;width:230px;padding:9px 11px;border-radius:10px;background:#0f172a;color:#fff;font-size:12.5px;font-weight:500;line-height:1.4;text-align:left;white-space:normal;box-shadow:0 8px 24px rgba(15,23,42,.25);opacity:0;visibility:hidden;transform:translate(-50%,4px);transition:opacity .18s,transform .18s,visibility 0s .18s;pointer-events:none}\n.zq .tip::after{content:\"\";position:absolute;left:50%;top:100%;margin-left:-6px;border:6px solid transparent;border-top-color:#0f172a}\n.zq .tip em{display:none;margin-top:6px;font-style:normal;font-weight:700;color:#7dd3fc}\n.zq.open .tip{opacity:1;visibility:visible;transform:translate(-50%,0);transition:opacity .18s,transform .18s,visibility 0s}\n.zq.open .tip em{display:block}\n@media (hover:hover) and (pointer:fine){.zq:not(.tch):hover .tip{opacity:1;visibility:visible;transform:translate(-50%,0);transition:opacity .18s,transform .18s,visibility 0s}}\n#dgs-buy .zq .tip{left:0;transform:translate(0,4px)}\n#dgs-buy .zq.open .tip{transform:none}\n#dgs-buy .zq .tip::after{left:22px}\n.zq.open{box-shadow:0 0 0 3px rgba(0,104,255,.18)}\n/* ===== danh muc tren may tinh co chuot: cuon ngang + mui ten ===== */\n.dgs-catnav{display:none}\n@media (min-width:768px) and (hover:hover) and (pointer:fine){\n.dgs-catwrap{position:relative}\n.dgs-catbox{overflow-x:auto !important;overflow-y:hidden !important;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain}\n.dgs-catbox::-webkit-scrollbar{display:none}\n.dgs-catbox .dgs-catrow{transform:none !important}\n.dgs-catrow>a{scroll-snap-align:start}\n.dgs-catbox .dgs-catfade,.dgs-catwrap+.dgs-cathint,.dgs-catwrap .dgs-cathint{display:none !important}\n.dgs-catwrap::before,.dgs-catwrap::after{content:\"\";position:absolute;top:0;height:128px;width:90px;z-index:2;pointer-events:none;transition:opacity .25s}\n.dgs-catwrap::before{left:0;background:linear-gradient(90deg,#fff 20%,rgba(255,255,255,0))}\n.dgs-catwrap::after{right:0;background:linear-gradient(270deg,#fff 20%,rgba(255,255,255,0))}\n.dgs-catwrap.dgs-atstart::before,.dgs-catwrap.dgs-atend::after{opacity:0}\n.dgs-catnav{display:flex;align-items:center;justify-content:center;position:absolute;top:64px;z-index:3;width:40px;height:40px;margin-top:-20px;padding:0 0 3px;border:1px solid #e5e7eb;border-radius:50%;background:#fff;color:#ef4444;font-size:28px;line-height:1;box-shadow:0 4px 14px rgba(15,23,42,.16);cursor:pointer;transition:opacity .2s,transform .15s}\n.dgs-catnav:hover{transform:scale(1.08);background:#fff5f5}\n.dgs-catnav.prev{left:10px}\n.dgs-catnav.next{right:10px}\n.dgs-catwrap.dgs-atstart .prev,.dgs-catwrap.dgs-atend .next{opacity:0;pointer-events:none}\n}\n\n/* ===== 1.4.2 ===== */\n.zq .tip{max-width:calc(100vw - 32px)}\n#dgs-detail .zq .tip{left:0;transform:translate(0,4px)}\n#dgs-detail .zq.open .tip{transform:none}\n#dgs-detail .zq .tip::after{left:34px}\n@media (hover:hover) and (pointer:fine){#dgs-detail .zq:not(.tch):hover .tip{transform:none}}\n.dgs-bnbox{height:auto !important;aspect-ratio:var(--dgs-bnr,3.4) !important;background:#24160f}\n.dgs-bnbox img.dgs-bnfit{object-fit:contain !important}\n.dgs-bnfill{position:relative;display:block;height:100%;overflow:hidden}\n.dgs-bnfill::before{content:\"\";position:absolute;inset:-24px;background:var(--dgs-bg) center/cover no-repeat;filter:blur(16px) brightness(.75);transform:translateZ(0)}\n.dgs-bnfill img{position:relative;z-index:1}\n\n/* 1.4.3: bong nut Zalo/FB nhe, khong bi quang den khi quay lai trang */\n#deal-contact-buttons a{will-change:transform;backface-visibility:hidden;-webkit-tap-highlight-color:transparent;outline:none}\nhtml:not(.dgs-nonoel) #deal-contact-buttons a::before{content:\"\";position:absolute;left:3px;right:3px;top:5px;bottom:-1px;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.2),rgba(0,0,0,0));pointer-events:none}\n#deal-contact-buttons .dgs-hat{z-index:1}\nhtml.dgs-redraw #deal-contact-buttons a{animation:none !important}\n\n/* ===== 1.5.0: Yeu thich + Ban vua xem kieu san lon, tong do cam ===== */\n:root{--dgs-ro:#f4511e;--dgs-rog:linear-gradient(135deg,#ff7a1a,#ef4444)}\n.dgs-fav svg{stroke:var(--dgs-ro)}\n.dgs-fav.on svg{fill:var(--dgs-ro)}\n.dgs-fav.pop svg,#dgs-detail .fv.pop .ic svg{animation:dgs-heart .45s ease}\n@keyframes dgs-heart{0%{transform:scale(1)}35%{transform:scale(1.35)}65%{transform:scale(.9)}100%{transform:scale(1)}}\n#dgs-tools .dgs-favbtn{border-color:#fed7aa;color:var(--dgs-ro)}\n#dgs-detail button.fv{flex-direction:column;gap:3px;height:auto;padding:0;border:0;border-radius:0;background:none;color:#6b7280;font-size:11.5px;font-weight:500;line-height:1}\n#dgs-detail button.fv.on{background:none;color:var(--dgs-ro)}\n#dgs-detail .fv .ic{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;transition:background .2s,border-color .2s,transform .15s}\n#dgs-detail .fv .ic svg{width:20px;height:20px;fill:none;stroke:var(--dgs-ro);stroke-width:2}\n#dgs-detail .fv:hover .ic{border-color:#fdba74;background:#fff7ed}\n#dgs-detail .fv.on .ic{border-color:transparent;background:var(--dgs-rog);box-shadow:0 4px 12px rgba(244,81,30,.3)}\n#dgs-detail .fv.on .ic svg{fill:#fff;stroke:#fff}\n#dgs-detail .fv:active .ic{transform:scale(.92)}\n#dgs-detail button:focus,.dgs-fav:focus,#dgs-recent button:focus{outline:none}\n#dgs-detail button:focus-visible,.dgs-fav:focus-visible,#dgs-recent button:focus-visible{outline:2px solid #fdba74;outline-offset:2px}\n#dgs-recent .hd{font-weight:600;font-size:14px;color:#1f2937}\n#dgs-recent .tt{display:flex;align-items:center;gap:6px}\n#dgs-recent .tt svg{width:17px;height:17px;fill:none;stroke:var(--dgs-ro);stroke-width:2;stroke-linecap:round}\n#dgs-recent .tt em{font-style:normal;font-size:11px;font-weight:700;color:#c2410c;background:#ffedd5;border-radius:999px;padding:1px 7px}\n#dgs-recent .hd button{color:var(--dgs-ro);font-size:13px;font-weight:500}\n#dgs-recent .rw{position:relative}\n#dgs-recent .row{gap:10px;padding:2px 2px 6px}\n#dgs-recent a{flex:0 0 138px;border:0;box-shadow:0 1px 4px rgba(15,23,42,.08);transition:transform .15s,box-shadow .15s}\n#dgs-recent a:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(15,23,42,.12)}\n#dgs-recent .im{display:block;aspect-ratio:1/1;background:#f8fafc;overflow:hidden}\n#dgs-recent a img{height:100%}\n#dgs-recent a span{padding:7px 9px 0;min-height:2.6em}\n#dgs-recent a b{font-size:14px;padding:4px 9px 9px}\n#dgs-recent .rw::after{content:\"\";position:absolute;right:0;top:0;bottom:6px;width:46px;background:linear-gradient(90deg,rgba(243,244,246,0),#f3f4f6 85%);pointer-events:none;opacity:0;transition:opacity .2s}\n#dgs-recent .nx{position:absolute;right:4px;top:calc(50% - 20px);z-index:2;width:30px;height:30px;padding:0 0 2px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;color:var(--dgs-ro);font-size:20px;line-height:1;box-shadow:0 2px 8px rgba(15,23,42,.12);cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s}\n#dgs-recent .rw.more::after,#dgs-recent .rw.more .nx{opacity:1}\n#dgs-recent .rw.more .nx{pointer-events:auto}\n@media (max-width:767px){#dgs-recent a{flex-basis:124px}}\n@media (prefers-reduced-motion:reduce){.dgs-fav.pop svg,#dgs-detail .fv.pop .ic svg{animation:none}}\n.dgs-prow{position:relative;padding-right:56px;flex-wrap:wrap}\n.dgs-prow>button.fv{position:absolute;right:0;top:50%;transform:translateY(-50%);display:inline-flex;align-items:center;flex-direction:column;gap:3px;padding:0;border:0;background:none;color:#6b7280;font-size:11.5px;font-weight:500;line-height:1;cursor:pointer}\n.dgs-prow>button.fv.on{color:var(--dgs-ro)}\n.dgs-prow>.fv .ic{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;transition:background .2s,border-color .2s,transform .15s}\n.dgs-prow>.fv .ic svg{width:20px;height:20px;fill:none;stroke:var(--dgs-ro);stroke-width:2}\n.dgs-prow>.fv:hover .ic{border-color:#fdba74;background:#fff7ed}\n.dgs-prow>.fv.on .ic{border-color:transparent;background:var(--dgs-rog);box-shadow:0 4px 12px rgba(244,81,30,.3)}\n.dgs-prow>.fv.on .ic svg{fill:#fff;stroke:#fff}\n.dgs-prow>.fv:active .ic{transform:scale(.92)}\n.dgs-prow>.fv.pop .ic svg{animation:dgs-heart .45s ease}\n.dgs-prow>.fv:focus{outline:none}\n.dgs-prow>.fv:focus-visible{outline:2px solid #fdba74;outline-offset:2px}\n".replace(/@IMG@/g,B);(document.head||document.documentElement).appendChild(s)})();
(function(){
  if(window.__dgsLite||!window.__dgsOk) return; window.__dgsLite=1;
  var CF=window.DGS_CFG||{},cf=function(k,d){return (k in CF)?CF[k]:d};
  var TH=String(cf('theme',cf('noel',true)?'noel':'')).toLowerCase();
  if(TH!=='noel'&&TH!=='tet')document.documentElement.classList.add('dgs-nonoel');if(TH)document.documentElement.classList.add('dgs-t-'+TH);
  /* cong tac tinh nang + chong loi day chuyen: 1 phan loi khong lam hong phan khac */
  var OFF=String(cf('tat','')).toLowerCase().split(/[\s,;]+/).filter(Boolean),ERR={};
  function run(k,f){if(OFF.indexOf(k)>=0)return;try{f()}catch(x){if(!ERR[k]){ERR[k]=1;try{console.warn('[DGS] loi o phan '+k,x)}catch(y){}}}}
  /* GA4: gui su kien qua dataLayer cua Google tag */
  function gtg(){window.dataLayer.push(arguments)}
  function track(n,p){if(!cf('ga4',true))return;try{window.dataLayer=window.dataLayer||[];p=p||{};p.dgs_pack=1;gtg('event',n,p)}catch(x){}}
  document.addEventListener('click',function(e){var t=e.target;if(!t||!t.closest)return;
    var a=t.closest('#deal-contact-buttons a');if(a){track('dgs_contact',{method:/zalo/i.test(a.href)?'zalo':/facebook/i.test(a.href)?'facebook':'khac'});return}
    if(t.closest('.dgs-tel')){track('dgs_contact',{method:'phone'});return}
    if(t.closest('#dgs-follow')&&!e.defaultPrevented)track('dgs_follow_page',{})});
  var num=function(t){return parseInt(String(t||'').replace(/[^\d]/g,''),10)||0};
  var vnd=function(n){return n.toLocaleString('vi-VN')+' ₫'};
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('dgs-in');io.unobserve(e.target)}});
  },{rootMargin:'0px 0px -40px 0px'}):null;
  function card(c){
    if(c.dataset.dgs) return; c.dataset.dgs='1';
    var old=c.querySelector('.line-through'), sale=c.querySelector('.text-lg.text-red-500'), d=c.querySelector('.bg-yellow-300');
    if(old&&sale){var s=num(old.textContent)-num(sale.textContent);
      if(s>0){var el=document.createElement('div');el.className='dgs-save';el.textContent='Tiết kiệm '+vnd(s);
        (sale.closest('.ant-space')||sale).insertAdjacentElement('afterend',el)}}
    if(d&&d.querySelector('.lucide-zap')){var img=c.querySelector('a > .relative');
      if(img){var h=document.createElement('span');h.className='dgs-hot';h.innerHTML='<svg viewBox="0 0 24 24" width="11" height="11" fill="#fff" aria-hidden="true" style="vertical-align:-1px;margin-right:4px"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg>FLASH SALE';img.appendChild(h)}}
    var a=c.querySelector('a[href*="_p"]'),m=a&&a.getAttribute('href').match(/_p(\d+)/);
    c.dataset.pid=m?m[1]:0; c.dataset.price=sale?num(sale.textContent):0; c.dataset.off=d?num(d.textContent):0;
    c.dataset.idx=++seq;
    run('giagiam',function(){var f=fav(c.dataset.pid),cur=+c.dataset.price;if(!f||!cur||!sale)return;seenPrice(f,cur);
      if(cur<f.p0){var el=document.createElement('div');el.className='dgs-drop';el.textContent='↓ Rẻ hơn lúc lưu '+kk(f.p0-cur);el.title='Rẻ hơn '+vnd(f.p0-cur)+' so với lúc bạn lưu';
        (c.querySelector('.dgs-save')||sale.closest('.ant-space')||sale).insertAdjacentElement('afterend',el)}});
    var box=c.querySelector('a > .relative');
    if(box){
      if(VIEW[c.dataset.pid]){var sv=document.createElement('span');sv.className='dgs-seen';sv.textContent='✓ Đã xem';box.appendChild(sv)}
      else if(lastMax&&+c.dataset.pid>lastMax){var nw=document.createElement('span');nw.className='dgs-new';nw.textContent='MỚI';box.appendChild(nw)}
      var sb=document.createElement('button');sb.type='button';sb.className='dgs-share';sb.setAttribute('aria-label','Chia sẻ');
      sb.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>';
      sb.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();share(a)});
      box.appendChild(sb);
      var fb=document.createElement('button');fb.type='button';fb.className='dgs-fav'+(isFav(c.dataset.pid)?' on':'');fb.setAttribute('aria-label','Yêu thích');
      fb.innerHTML='<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.4-9.3-9.2C1.5 8 3.6 4.5 7.1 4.5c2 0 3.6 1.1 4.9 2.9 1.3-1.8 2.9-2.9 4.9-2.9 3.5 0 5.6 3.5 4.4 6.8-1.8 4.8-9.3 9.2-9.3 9.2z"/></svg>';
      fb.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();toggleFav(c,fb)});
      box.appendChild(fb);
    }
    if(+c.dataset.pid>curMax){curMax=+c.dataset.pid;try{localStorage.setItem('dgs_max',curMax)}catch(x){}}
    fresh.push(c);
    if(io&&c.getBoundingClientRect().top>window.innerHeight){c.classList.add('dgs-reveal');io.observe(c)}
  }
  /* ===== luu tru tren may khach ===== */
  var LSC={};
  function lsGet(k){if(LSC[k])return LSC[k];try{return LSC[k]=JSON.parse(localStorage.getItem(k)||'[]')||[]}catch(x){return []}}
  function lsSet(k,v){LSC[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(x){}}
  window.addEventListener('storage',function(e){if(e.key)delete LSC[e.key];else LSC={}});
  var FMsrc=null,FM={},favDirty=0;
  function fav(id){var l=lsGet('dgs_fav');if(FMsrc!==l){FMsrc=l;FM={};l.forEach(function(x){FM[x.id]=x})}return FM[id]}
  var FRESH=1728e5;
  function kk(n){return n>=1e6?(Math.round(n/1e5)/10+'').replace('.',',')+'tr':Math.round(n/1e3)+'K'}
  function dropped(x){return x&&x.pn&&x.p0&&x.pn<x.p0&&Date.now()-(x.pt||0)<FRESH}
  function seenPrice(f,cur){if(!f||!cur)return;if(!f.p0){f.p0=num(f.p);favDirty=1}if(f.pn!==cur||Date.now()-(f.pt||0)>6e5){f.pn=cur;f.pt=Date.now();favDirty=1}}
  function esc(s){return String(s||'').replace(/[&<>"']/g,function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]})}
  function info(c){var a=c.querySelector('a[href*="_p"]'),t=c.querySelector('.line-clamp-3'),im=c.querySelector('a > .relative img'),p=c.querySelector('.text-lg.text-red-500');
    return {id:c.dataset.pid,href:a?a.getAttribute('href'):'',t:t?t.textContent.trim():'',img:im?im.getAttribute('src'):'',p:p?p.textContent.trim():'',p0:p?num(p.textContent):0,pn:p?num(p.textContent):0,pt:Date.now()}}
  function isFav(id){return !!fav(id)}
  function toggleFav(c,btn){var l=lsGet('dgs_fav'),id=c.dataset.pid,i=-1;l.forEach(function(x,k){if(x.id==id)i=k});
    if(i<0){btn.classList.remove('pop');void btn.offsetWidth;btn.classList.add('pop')}
      if(i>=0){l.splice(i,1);btn.classList.remove('on');toast('Đã bỏ khỏi Yêu thích');var dd=c.querySelector('.dgs-drop');if(dd)dd.remove()}else{l.unshift(info(c));l=l.slice(0,60);btn.classList.add('on');toast('Đã lưu vào Yêu thích ♥')}
    lsSet('dgs_fav',l);favCount();track('dgs_favorite',{action:i>=0?'remove':'add',item_id:String(id),where:'card'})}
  function favCount(){var b=document.querySelector('#dgs-tools .dgs-favbtn');if(!b)return;var s='♥ Yêu thích ('+lsGet('dgs_fav').length+')';if(b.textContent!==s)b.textContent=s}
  function favPanel(){
    var l=lsGet('dgs_fav').slice().sort(function(a,b){return (dropped(b)?1:0)-(dropped(a)?1:0)}),p=document.createElement('div');p.id='dgs-favp';
    var h='<div class="box"><div class="hd"><span>♥ Deal yêu thích (<b class="n">'+l.length+'</b>)</span><button class="x" aria-label="Đóng">×</button></div>';
    if(!l.length)h+='<div class="empty">Chưa có deal nào. Bấm ♡ trên sản phẩm để lưu lại nhé!</div>';
    l.forEach(function(x){h+='<div class="it" data-id="'+esc(x.id)+'"><img src="'+esc(x.img)+'" alt="" loading="lazy"><a href="'+esc(x.href)+'"><span>'+esc(x.t)+'</span><b>'+(dropped(x)?esc(vnd(x.pn))+'<s>'+esc(vnd(x.p0))+'</s><em>↓ '+esc(vnd(x.p0-x.pn))+'</em>':esc(x.p))+'</b></a><button class="rm" aria-label="Bỏ">×</button></div>'});
    p.innerHTML=h+'</div>';document.body.appendChild(p);
    p.addEventListener('click',function(e){
      if(e.target===p||e.target.classList.contains('x')){p.remove();return}
      if(e.target.closest('.it a')){p.remove();return}
      var r=e.target.closest('.rm');if(r){var it=r.closest('.it'),id=it.getAttribute('data-id');
        var left=lsGet('dgs_fav').filter(function(x){return x.id!=id});lsSet('dgs_fav',left);it.remove();favCount();
        p.querySelector('.hd .n').textContent=left.length;
        if(!left.length){var em=document.createElement('div');em.className='empty';em.textContent='Chưa có deal nào. Bấm ♡ trên sản phẩm để lưu lại nhé!';p.querySelector('.box').appendChild(em)}
        [].forEach.call(document.querySelectorAll('.grid.lg\\:grid-cols-6 > div[data-pid="'+id+'"] .dgs-fav'),function(b){b.classList.remove('on')})}
    });
  }
  /* ban vua xem: ghi lai khi khach bam vao san pham */
  document.addEventListener('click',function(e){
    if(!e.target.closest||e.target.closest('.dgs-fav,.dgs-share'))return;
    var a=e.target.closest('a'),c=a&&a.closest('.grid.lg\\:grid-cols-6 > div[data-dgs]');if(!c)return;
    var x=info(c),l=lsGet('dgs_seen').filter(function(y){return y.id!=x.id});l.unshift(x);lsSet('dgs_seen',l.slice(0,10));
    if(!VIEW[x.id]){VIEW[x.id]=1;var vl=lsGet('dgs_viewed');vl.unshift(x.id);lsSet('dgs_viewed',vl.slice(0,300))}
    if(location.pathname==='/'){try{sessionStorage.setItem('dgs_back',JSON.stringify({pid:x.id,off:Math.round(c.getBoundingClientRect().top),t:Date.now(),pg:PG}))}catch(z){}}
  },true);
  var VIEW={};lsGet('dgs_viewed').forEach(function(id){VIEW[id]=1});
  function recent(){
    var t=document.getElementById('dgs-tools');if(!t||document.getElementById('dgs-recent'))return;
    var l=lsGet('dgs_seen');if(!l.length)return;
    var w=document.createElement('div');w.id='dgs-recent';
    var h='<div class="hd"><span class="tt"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Bạn vừa xem<em>'+l.length+'</em></span><button type="button">Xoá</button></div><div class="rw"><div class="row">';
    l.forEach(function(x){h+='<a href="'+esc(x.href)+'"><i class="im"><img src="'+esc(x.img)+'" alt="" loading="lazy"></i><span>'+esc(x.t)+'</span><b>'+esc(x.p)+'</b></a>'});
    w.innerHTML=h+'</div><button type="button" class="nx" aria-label="Xem thêm">›</button></div>';t.parentElement.insertBefore(w,t);
    w.querySelector('.hd button').addEventListener('click',function(){lsSet('dgs_seen',[]);w.remove()});
    var rw=w.querySelector('.rw'),r=w.querySelector('.row'),st=function(){rw.classList.toggle('more',r.scrollLeft+r.clientWidth<r.scrollWidth-4)};
    r.addEventListener('scroll',function(){if(!r._t){r._t=1;requestAnimationFrame(function(){r._t=0;st()})}},{passive:true});
    w.querySelector('.nx').addEventListener('click',function(){r.scrollBy({left:Math.max(150,r.clientWidth-150),behavior:'smooth'})});
    setTimeout(st,50);window.addEventListener('resize',st,{passive:true});
  }
  /* thu tu ngau nhien giu nguyen khi khach bam vao san pham roi quay lai */
  var seed=null;try{if(sessionStorage.getItem('dgs_back'))seed=sessionStorage.getItem('dgs_seed')}catch(x){}
  if(!seed){seed=String(Math.random()).slice(2,10);try{sessionStorage.setItem('dgs_seed',seed)}catch(x){}}
  function hs(s){s=String(s)+seed;var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  var seq=0,fresh=[],nextOrd=0,curMax=0,lastMax=0;
  try{lastMax=+localStorage.getItem('dgs_max')||0}catch(x){}
  curMax=lastMax;
  /* chia se */
  function toast(t,ms){var el=document.querySelector('.dgs-toast');if(!el){el=document.createElement('div');el.className='dgs-toast';document.body.appendChild(el)}
    el.textContent=t;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(function(){el.classList.remove('show')},ms||2200)}
  function share(a){if(!a)return;track('dgs_share',{link:a.href});var url=a.href,title=(a.parentElement.querySelector('.line-clamp-3')||a).textContent.trim();
    if(navigator.share){navigator.share({title:title,text:title,url:url}).catch(function(){});return}
    var done=function(){toast('Đã copy link, dán gửi Zalo/Facebook cho bạn bè nhé!')};
    if(navigator.clipboard){navigator.clipboard.writeText(url).then(done,function(){prompt('Copy link:',url)})}else{prompt('Copy link:',url)}}
  /* sap xep + loc */
  var mode='rnd',filt='all';
  try{mode=localStorage.getItem('dgs_sort')||'rnd';filt=localStorage.getItem('dgs_filt')||'all'}catch(x){}
  var FILT={all:function(){return 1},lt100:function(c){return c.dataset.price<100000},m300:function(c){var p=+c.dataset.price;return p>=100000&&p<=300000},gt300:function(c){return c.dataset.price>300000},off70:function(c){return c.dataset.off>=70}};
  function cmp(a,b){
    if(mode==='hot') return b.dataset.off-a.dataset.off||a.dataset.idx-b.dataset.idx;
    if(mode==='asc') return a.dataset.price-b.dataset.price;
    if(mode==='desc') return b.dataset.price-a.dataset.price;
    if(mode==='new') return b.dataset.pid-a.dataset.pid;
    return a.dataset.idx-b.dataset.idx}
  function arrange(list){
    if(mode==='rnd'){list.sort(function(a,b){return hs(a.dataset.pid)-hs(b.dataset.pid)})}
    else list.sort(cmp);
    list.forEach(function(c){c.style.order=mode==='def'?'':(++nextOrd)})}
  function applyFilter(list){list.forEach(function(c){c.classList.toggle('dgs-off',!FILT[filt](c))})}
  function all(){return [].slice.call(document.querySelectorAll('.grid.lg\\:grid-cols-6 > div[data-dgs]'))}
  function reorder(){nextOrd=0;var l=all();arrange(l);applyFilter(l)}
  function tools(){
    var g=document.querySelector('.grid.lg\\:grid-cols-6');
    if(!g||document.getElementById('dgs-tools'))return;
    var w=document.createElement('div');w.id='dgs-tools';
    w.innerHTML='<label class="dgs-sort">Xem theo: <select><option value="def">Mặc định</option><option value="rnd">Ngẫu nhiên</option><option value="hot">% Giảm nhiều nhất</option><option value="asc">Giá thấp → cao</option><option value="desc">Giá cao → thấp</option><option value="new">Mới nhất</option></select></label>'+
      '<div class="dgs-chips"><button data-f="all">Tất cả</button><button data-f="lt100">Dưới 100k</button><button data-f="m300">100k–300k</button><button data-f="gt300">Trên 300k</button><button data-f="off70">Giảm ≥70%</button></div><button type="button" class="dgs-favbtn">♥ Yêu thích (0)</button>';
    g.parentElement.insertBefore(w,g);
    var sel=w.querySelector('select');sel.value=mode;
    sel.addEventListener('change',function(){mode=sel.value;try{localStorage.setItem('dgs_sort',mode)}catch(x){}reorder()});
    var bs=w.querySelectorAll('.dgs-chips button');
    w.querySelector('.dgs-favbtn').addEventListener('click',favPanel);
    function mark(){[].forEach.call(bs,function(b){b.classList.toggle('on',b.dataset.f===filt)})}
    [].forEach.call(bs,function(b){b.addEventListener('click',function(){filt=b.dataset.f;try{localStorage.setItem('dgs_filt',filt)}catch(x){}mark();applyFilter(all())})});
    mark();
  }
  /* giu nut Zalo/FB goc: web ve lai trang (React) co the xoa mat -> dung lai y het nhu cu */
  function keepContact(){
    if(document.readyState==='loading'||document.getElementById('deal-contact-buttons'))return;
    function btn(href,label,img){var b=document.createElement('a');b.href=href;b.target='_blank';b.rel='noopener noreferrer';b.setAttribute('aria-label',label);
      b.style.cssText='width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff;text-decoration:none;box-shadow:0 8px 22px rgba(0,0,0,.18);overflow:hidden;padding:0';
      var i=document.createElement('img');i.src=img;i.alt=label;i.style.cssText='width:42px;height:42px;display:block;object-fit:cover';b.appendChild(i);return b}
    var a=document.createElement('div');a.id='deal-contact-buttons';a.setAttribute('aria-label','Lien he nhanh');
    a.style.cssText='position:fixed;right:18px;bottom:86px;z-index:2147483647;display:flex;flex-direction:column;gap:10px;align-items:center';
    var zl=cf('zalo','https://zalo.me/0981657659'),fb=cf('facebook','https://www.facebook.com/phamkct');
    if(zl)a.appendChild(btn(zl,'Zalo','https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg'));
    if(fb)a.appendChild(btn(fb,'Facebook','https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'));
    document.body.appendChild(a);
  }
  window.addEventListener('load',function(){setTimeout(function(){run('lienhe',keepContact)},1500)});
  /* quay lai dung cho dang xem */
  var rest=null,restT=0,PG=Math.random(),away=false;
  function restore(){
    if(location.pathname!=='/'){away=true;return}
    if(!rest){var b=null;try{b=JSON.parse(sessionStorage.getItem('dgs_back')||'null')}catch(x){}
      if(!b||(b.pg===PG&&!away))return;
      try{sessionStorage.removeItem('dgs_back')}catch(x){} away=false;
      if(Date.now()-b.t>600000)return; rest=b;restT=Date.now()}
    var tg=document.querySelector('.grid.lg\\:grid-cols-6 > div[data-pid="'+rest.pid+'"]');
    if(tg){var off=rest.off;rest=null;
      var go=function(){window.scrollTo(0,Math.max(0,tg.getBoundingClientRect().top+window.scrollY-off))};go();setTimeout(go,350);setTimeout(go,900);return}
    if(Date.now()-restT>15000){rest=null;return}
    var mb=document.querySelector('button[data-dgs-more]');
    if(mb&&Date.now()-lastLoad>900){lastLoad=Date.now();mb.click()}
    setTimeout(scan,1000);
  }
  /* bao so deal moi ke tu lan truoc */
  var newShown=false;
  function newToast(){
    if(newShown||!lastMax)return;var l=all();if(!l.length)return;newShown=true;
    var n=l.filter(function(c){return +c.dataset.pid>lastMax}).length;
    if(n&&!rest)setTimeout(function(){toast('🆕 Có '+n+(n>=l.length?'+':'')+' deal mới kể từ lần trước bạn ghé',4500)},3500);
  }
  /* nut Nhan deal moi ngay -> Page Facebook */
  function follow(){
    var pg=cf('page','https://www.facebook.com/share/19pHVwmoUt/'),pt=cf('pageText','Nhận deal mỗi ngày');
    if(document.getElementById('dgs-follow')||!document.body||!pg)return;
    var a=document.createElement('a');a.id='dgs-follow';a.href=pg;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',pt);
    a.innerHTML='<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 9c-6 0-9.5 4.6-9.5 11 0 4.2-1.6 6.6-3.8 8.6h26.6c-2.2-2-3.8-4.4-3.8-8.6C29.5 13.6 26 9 20 9z" fill="#f5c542" stroke="#b8860b" stroke-width="1.4"/><path d="M13 22c1-4 3-7 6-8" stroke="#fff6c9" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/><circle cx="20" cy="31.5" r="3" fill="#b8860b"/><path d="M14 8.5c-3-3-7-1.5-5.5 1.5 1 2 4 1.6 5.5-1.5zM26 8.5c3-3 7-1.5 5.5 1.5-1 2-4 1.6-5.5-1.5z" fill="#e11d2e" stroke="#9f1239" stroke-width=".8"/><circle cx="20" cy="8.6" r="2.2" fill="#9f1239"/><path d="M18.5 10l-2.5 6M21.5 10l2.5 6" stroke="#e11d2e" stroke-width="1.6" stroke-linecap="round"/><path d="M27 6.5c2-2 5-2 6 0-2 0-3 1-3 3-1-1.6-2-2.4-3-3z" fill="#15803d"/><circle cx="29.5" cy="9.5" r="1.4" fill="#dc2626"/></svg><span></span>';a.lastChild.textContent=pt;
    a.className='mini';document.body.appendChild(a);
    /* dien thoai: cham lan 1 bung chu, cham lan 2 vao link, 4s khong cham thi thu lai; may tinh dung chuot giu nguyen */
    a.addEventListener('pointerdown',function(e){a._tch=!!(e.pointerType&&e.pointerType!=='mouse');a.classList.toggle('tch',a._tch)});
    a.addEventListener('click',function(e){if(!a._tch)return;clearTimeout(a._t);
      if(!a.classList.contains('open')){e.preventDefault();a.classList.add('open');a._t=setTimeout(function(){a.classList.remove('open')},4000)}
      else setTimeout(function(){a.classList.remove('open')},300)});
  }
  /* loi nhac Flash Sale (1 lan / phien): A = bong bong canh tia set khi mo trang;
     B = the truot len o day man hinh neu khach bo qua A va cuon qua o Flash Sale 7 giay. Bam x o A thi khong hien B */
  var ftDone=false,QF=function(){return document.querySelector('a[href="/flash-sale"]')};
  function hl(el,t){el.textContent=t;el.innerHTML=el.innerHTML.replace('Flash Deal','<b>Flash Deal</b>').replace('⚡','<span class="z">⚡</span>')}
  function fx(){var f='',n=TH;if(n==='noel'||n==='tet')for(var k=0;k<7;k++)f+='<s style="left:'+(4+k*13+Math.random()*6|0)+'%;font-size:'+(8+Math.random()*5|0)+'px;animation-duration:'+(3+Math.random()*2.5).toFixed(1)+'s;animation-delay:-'+(Math.random()*4).toFixed(1)+'s">'+(n==='tet'?(k%2?'🌼':'🌸'):'❄')+'</s>';
    return '<em>'+f+'</em><u></u><i aria-label="Đóng">×</i>'+(n==='noel'?'<s class="cap"></s>':'')}
  function goFlash(){var A=QF();if(A)A.click();else location.href='/flash-sale'}
  function ftip(){
    if(ftDone)return;var t=cf('flashTip','Đừng quên kiểm tra xem hôm nay có Flash Deal nào không nha! ⚡');
    if(!t){ftDone=true;return}
    try{if(sessionStorage.getItem('dgs_ftip')){ftDone=true;return}}catch(x){}
    if(!QF())return;
    ftDone=true;try{sessionStorage.setItem('dgs_ftip','1')}catch(x){}
    setTimeout(function(){
      if(!QF())return;
      var d=document.createElement('div');d.id='dgs-ftip';var sp=document.createElement('span');hl(sp,t);d.appendChild(sp);d.insertAdjacentHTML('beforeend',fx());document.body.appendChild(d);
      var st=0;/* 0 dang hien, 1 bam vao, 2 bam x, 3 tu tat */
      function pos(){var A=QF();if(!A)return;var ic=A.querySelector('.rounded-full')||A,r=A.getBoundingClientRect(),c=ic.getBoundingClientRect(),w=d.offsetWidth,h=d.offsetHeight,l=c.right+14,tp;
        d.classList.remove('r','b');
        if(l+w<=innerWidth-8){d.classList.add('r');tp=c.top+c.height/2-h/2;d.style.setProperty('--ay',(h/2-6)+'px')}
        else{d.classList.add('b');l=Math.max(8,Math.min(r.left+8,innerWidth-w-8));tp=r.bottom+6;d.style.setProperty('--ax',Math.max(14,Math.min(w-26,c.left+c.width/2-l-6))+'px')}
        d.style.left=(l+scrollX)+'px';d.style.top=(tp+scrollY)+'px'}
      function bye(s){if(st)return;st=s;d.classList.remove('on');d.classList.add('off');removeEventListener('resize',pos);setTimeout(function(){d.remove()},350)}
      pos();addEventListener('resize',pos);setTimeout(function(){d.classList.add('on')},30);track('dgs_flash_tip',{action:'show'});
      d.addEventListener('click',function(e){if(e.target.tagName==='I'){bye(2);track('dgs_flash_tip',{action:'close'});return}bye(1);track('dgs_flash_tip',{action:'click'});goFlash()});
      setTimeout(function(){bye(3)},9000);
      var off=0,n=0,iv=setInterval(function(){
        if(st===1||st===2||++n>480){clearInterval(iv);return}
        var A=QF(),gone=!A||A.getBoundingClientRect().bottom<0;
        if(gone){if(!st)bye(3);off+=500;if(off>=7000){clearInterval(iv);fcard()}}else off=0;
      },500);
    },1200);
  }
  function fcard(){
    if(/^\/flash-sale/.test(location.pathname)||document.getElementById('dgs-fcard'))return;
    var t=cf('flashCard','Hôm nay có Flash Deal giá sốc đang chờ bạn!');if(!t)return;
    var d=document.createElement('div');d.id='dgs-fcard';d.style.setProperty('--t','8s');
    d.innerHTML='<span class="ic"><svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg></span>';
    var sp=document.createElement('span');sp.className='tx';hl(sp,t);d.appendChild(sp);
    d.insertAdjacentHTML('beforeend','<span class="go">Xem ngay →</span>'+fx());document.body.appendChild(d);track('dgs_flash_card',{action:'show'});
    var gone=false;function bye(){if(gone)return;gone=true;d.classList.remove('on');d.classList.add('off');setTimeout(function(){d.remove()},400)}
    setTimeout(function(){d.classList.add('on')},30);
    d.addEventListener('click',function(e){bye();var x=e.target.tagName==='I';track('dgs_flash_card',{action:x?'close':'click'});if(!x)goFlash()});
    setTimeout(bye,8000);
  }
  /* dien thoai: he lo o danh muc thu 3, mui ten mo, dong "Vuot xem N danh muc", truot goi y 1 lan moi phien */
  /* ===== hoi Zalo: chep san ten + link san pham ===== */
  var ZIMG='https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg';
  function prodText(){var h1=document.querySelector('h1.ant-typography'),s=document.querySelector('.text-3xl.font-semibold.text-red-500');
    return 'Mình muốn hỏi về sản phẩm này:\n'+(h1?h1.textContent.replace(/^\s*Mall\s*/,'').trim():document.title)+(s?'\nGiá: '+s.textContent.trim():'')+'\n'+location.href.split('?')[0]}
  function copyTxt(t){var ok=false;try{var ta=document.createElement('textarea');ta.value=t;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:0;left:0;opacity:0;font-size:16px';
      document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,t.length);ok=document.execCommand('copy');ta.remove()}catch(x){}
    if(!ok&&navigator.clipboard&&navigator.clipboard.writeText){try{return navigator.clipboard.writeText(t).then(function(){return true},function(){return false})}catch(x){}}return ok}
  var ZTIP='<span class="tip" role="tooltip">Chép sẵn tên, giá và link sản phẩm rồi mở Zalo. Bạn chỉ cần dán vào ô chat để hỏi shop.<em>👉 Bấm lần nữa để mở Zalo</em></span>';
  function zqBind(b,where){
    b.addEventListener('pointerdown',function(e){var t=e.pointerType&&e.pointerType!=='mouse';b._tch=t;b.classList.toggle('tch',t)});
    b.addEventListener('click',function(e){
      if(b._tch&&!b.classList.contains('open')){e.preventDefault();[].forEach.call(document.querySelectorAll('.zq.open'),function(x){if(x!==b)x.classList.remove('open')});b.classList.add('open');clearTimeout(b._ot);
        b._ot=setTimeout(function(){b.classList.remove('open')},4000);track('dgs_ask_zalo',{where:where,action:'tip'});return}
      clearTimeout(b._ot);b.classList.remove('open');askZalo(e,where)});
  }
  function askZalo(e,where){var zl=cf('zalo','https://zalo.me/0981657659');if(!zl)return;e.preventDefault();
    var ok=copyTxt(prodText());track('dgs_ask_zalo',{where:where,item_id:(location.pathname.match(/_p(\d+)/)||[])[1]||''});
    var say=function(v){toast(v?'Đã chép tên và link sản phẩm ✓ Dán vào ô chat Zalo để hỏi nhé':'Đang mở Zalo… bạn gửi tên sản phẩm cần hỏi nhé',5000)};
    if(ok&&ok.then)ok.then(say);else say(ok);
    setTimeout(function(){var w=window.open(zl,'_blank');if(w){try{w.opener=null}catch(x){}}else location.href=zl},700)}
  /* ===== thanh Mua ngay dinh day man hinh (dien thoai, trang chi tiet) ===== */
  var barIO=null;
  function buyBtn(){var r=null;[].forEach.call(document.querySelectorAll('form button.ant-btn-primary'),function(b){if(!r&&b.textContent.trim()==='Mua ngay')r=b});return r}
  function setBar(v){var b=document.getElementById('dgs-buy');v=!!(v&&b);if(b)b.classList.toggle('show',v);document.documentElement.classList.toggle('dgs-hasbar',v)}
  function buyBar(){
    var m=location.pathname.match(/_p(\d+)/),bar=document.getElementById('dgs-buy'),go=m&&window.innerWidth<768&&buyBtn();
    if(!go){if(bar){bar.remove();setBar(false)}return}
    var s=document.querySelector('.text-3xl.font-semibold.text-red-500'),o=s&&s.parentElement.querySelector('.line-through');
    if(bar&&bar.dataset.pid===m[1]){var pb=bar.querySelector('.pr b');if(s&&pb.textContent!==s.textContent.trim())pb.textContent=s.textContent.trim();
      if(bar._o!==go){bar._o=go;barIO.disconnect();barIO.observe(go)}return}
    if(bar)bar.remove();
    var zl=OFF.indexOf('hoizalo')<0&&cf('zalo','https://zalo.me/0981657659');
    bar=document.createElement('div');bar.id='dgs-buy';bar.dataset.pid=m[1];
    bar.innerHTML=(zl?'<button type="button" class="zq" aria-label="Hỏi qua Zalo"><img src="'+ZIMG+'" alt="" width="24" height="24"><span>Hỏi Zalo</span>'+ZTIP+'</button>':'')+
      '<div class="pr"><b>'+esc(s?s.textContent.trim():'')+'</b>'+(o?'<s>'+esc(o.textContent.trim())+'</s>':'')+'</div><button type="button" class="go">Mua ngay</button>';
    var nav=document.querySelector('div.sticky.bottom-0'),nh=nav?nav.offsetHeight:0;
    if(nh){bar.style.bottom=nh+'px';bar.style.paddingBottom='8px'}
    document.body.appendChild(bar);
    if(zl)zqBind(bar.querySelector('.zq'),'bar');
    bar.addEventListener('click',function(e){
      if(e.target.closest('.zq'))return;
      if(!e.target.closest('.go'))return;
      var b=buyBtn(),f=b&&b.closest('form');track('dgs_buybar',{item_id:m[1]});
      if(!b)return;
      var need=f&&/Vui lòng chọn phân loại/.test(f.textContent);
      if(need||b.disabled){
        if(f){window.scrollTo({top:Math.max(0,f.getBoundingClientRect().top+window.scrollY-150),behavior:'smooth'});
          f.classList.remove('dgs-need');void f.offsetWidth;f.classList.add('dgs-need')}
        toast(need?'Bạn chọn phân loại hàng rồi bấm Mua ngay nhé':'Bạn xem lại phân loại, số lượng bên dưới nhé',3500);return}
      b.click()});
    bar._o=go;
    if(!barIO)barIO=new IntersectionObserver(function(es){setBar(!es[es.length-1].isIntersecting)});
    barIO.disconnect();barIO.observe(go);
  }
  /* ===== nut len dau trang ===== */
  function toTop(){
    if(document.getElementById('dgs-top'))return;
    var b=document.createElement('button');b.type='button';b.id='dgs-top';b.setAttribute('aria-label','Lên đầu trang');
    b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(b);
    b.addEventListener('click',function(){track('dgs_to_top',{});window.scrollTo({top:0,behavior:'smooth'})});
    var on=false,tk=false,chk=function(){tk=false;var v=window.scrollY>window.innerHeight*2;if(v!==on){on=v;b.classList.toggle('show',v)}};
    window.addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(chk)}},{passive:true});chk();
  }
  /* ===== bao "deal ban luu dang re hon" (1 lan moi phien) ===== */
  var dropDone=false;
  function dropNote(){
    if(dropDone||location.pathname!=='/'||!document.querySelector('.grid.lg\\:grid-cols-6 > div[data-dgs]'))return;dropDone=true;
    try{if(sessionStorage.getItem('dgs_drop'))return}catch(x){}
    var tries=0;setTimeout(function wait(){
      if(document.querySelector('#dgs-ftip.on,#dgs-fcard.on,#dgs-favp')&&++tries<25){setTimeout(wait,1000);return}
      var n=lsGet('dgs_fav').filter(dropped).length;if(!n||document.getElementById('dgs-dropt'))return;
      try{sessionStorage.setItem('dgs_drop','1')}catch(x){}
      var t=document.createElement('button');t.type='button';t.id='dgs-dropt';
      t.innerHTML='<b aria-hidden="true">↓</b><span>'+n+' deal bạn lưu đang rẻ hơn lúc lưu</span><u>Xem</u>';document.body.appendChild(t);
      requestAnimationFrame(function(){requestAnimationFrame(function(){t.classList.add('show')})});
      var close=function(){t.classList.remove('show');setTimeout(function(){t.remove()},400)};
      t.addEventListener('click',function(){close();track('dgs_price_drop',{action:'open',count:n});favPanel()});
      setTimeout(close,8000);track('dgs_price_drop',{action:'show',count:n});
    },2500);
  }
  /* ===== anh bia: khung cao theo ty le anh, khong cat chu ===== */
  function bannerFit(){
    var box=document.querySelector('div.aspect-square.rounded-md.overflow-hidden:not(.dgs-catbox)');if(!box)return;
    var im=box.querySelectorAll('img');if(!im.length)return;
    box.classList.add('dgs-bnbox');
    var cnt={},best=0,r=0;
    [].forEach.call(im,function(i){
      if(!i.naturalWidth){if(!i._dgsL){i._dgsL=1;i.addEventListener('load',function(){run('anhbia',bannerFit)},{once:true})}return}
      var k=(i.naturalWidth/i.naturalHeight).toFixed(2);cnt[k]=(cnt[k]||0)+1;if(cnt[k]>best||(cnt[k]===best&&+k>r)){best=cnt[k];r=+k}});
    if(!r)return;
    if(box._r!==r){box._r=r;box.style.setProperty('--dgs-bnr',r)}
    [].forEach.call(im,function(i){if(!i.naturalWidth)return;var f=Math.abs(i.naturalWidth/i.naturalHeight/r-1)>.04,p=i.parentElement;i.classList.toggle('dgs-bnfit',f);
      if(p&&f&&p._bg!==i.currentSrc){p._bg=i.currentSrc;p.classList.add('dgs-bnfill');p.style.setProperty('--dgs-bg','url("'+i.currentSrc.replace(/"/g,'%22')+'")')}});
  }
  /* quay lai trang (tu Zalo, khoa man hinh...): ve lai nut lien he */
  var redraw=function(){if(document.visibilityState!=='visible')return;var h=document.documentElement;h.classList.add('dgs-redraw');requestAnimationFrame(function(){requestAnimationFrame(function(){h.classList.remove('dgs-redraw')})})};
  document.addEventListener('visibilitychange',redraw);window.addEventListener('pageshow',function(e){if(e.persisted)redraw()});
  function catHint(){
    var a=document.querySelector('a[href="/flash-sale"]');if(!a)return;var row=a.parentElement,box=row&&row.parentElement;
    if(!box||row.classList.contains('dgs-catrow')||row.children.length<3)return;
    row.classList.add('dgs-catrow');box.classList.add('dgs-catbox');
    /* bao cho thanh truot cua CNLG tinh lai kich thuoc o (nhich khung 1px roi tra lai) */
    box.style.width='calc(100% - 1px)';setTimeout(function(){box.style.width=''},120);
    if(!box.querySelector('.dgs-catfade'))box.insertAdjacentHTML('beforeend','<i class="dgs-catfade" aria-hidden="true"><b>›</b></i>');
    var h=box.nextElementSibling;if(!h||!h.classList.contains('dgs-cathint')){h=document.createElement('div');h.className='dgs-cathint';box.insertAdjacentElement('afterend',h)}
    h.textContent='Vuốt xem '+row.children.length+' danh mục →';
    /* vuot toi o cuoi thi an mui ten mo */
    var endChk=function(){var l=row.lastElementChild;if(!l)return;box.classList.toggle('dgs-catend',l.getBoundingClientRect().right<=box.getBoundingClientRect().right+2)};
    new MutationObserver(endChk).observe(row,{attributes:true,attributeFilter:['style']});
    var wr=box.parentElement;
    if(wr&&!wr.querySelector('.dgs-catnav')){wr.classList.add('dgs-catwrap','dgs-atstart');
      wr.insertAdjacentHTML('beforeend','<button type="button" class="dgs-catnav prev" aria-label="Danh mục trước">‹</button><button type="button" class="dgs-catnav next" aria-label="Danh mục tiếp theo">›</button>');
      var navSt=function(){wr.classList.toggle('dgs-atstart',box.scrollLeft<4);wr.classList.toggle('dgs-atend',box.scrollLeft+box.clientWidth>=box.scrollWidth-4)};
      box.addEventListener('scroll',function(){if(!box._nt){box._nt=1;requestAnimationFrame(function(){box._nt=0;navSt()})}},{passive:true});
      wr.addEventListener('click',function(e){var b=e.target.closest('.dgs-catnav');if(!b)return;e.preventDefault();
        var sw=row.firstElementChild?row.firstElementChild.getBoundingClientRect().width:200,step=Math.max(sw,Math.floor(box.clientWidth/sw-1)*sw);
        box.scrollBy({left:b.classList.contains('next')?step:-step,behavior:'smooth'});track('dgs_cat_arrow',{dir:b.classList.contains('next')?'next':'prev'})});
      setTimeout(navSt,300)}
    try{if(!sessionStorage.getItem('dgs_catnudge')){sessionStorage.setItem('dgs_catnudge','1');setTimeout(function(){row.classList.add('dgs-nudge');setTimeout(function(){row.classList.remove('dgs-nudge')},1500)},900)}}catch(x){}
  }
  /* mu Noel cho nut Zalo, Facebook */
  function hats(){if(TH!=='noel'&&TH!=='tet')return;[].forEach.call(document.querySelectorAll('#deal-contact-buttons a'),function(a){if(!a.querySelector('.dgs-hat'))a.insertAdjacentHTML('beforeend','<i class="dgs-hat" aria-hidden="true"></i>')})}
  /* trang chi tiet: dong Tiet kiem + nut Yeu thich */
  function detail(){
    var m=location.pathname.match(/_p(\d+)/);if(!m)return;
    var sale=document.querySelector('.text-3xl.font-semibold.text-red-500');if(!sale)return;
    var row=sale.parentElement,ex=document.getElementById('dgs-detail');
    if(ex){if(ex.dataset.pid===m[1]&&ex.previousElementSibling===row)return;ex.remove()}
    var old=row.querySelector('.line-through'),s=old?num(old.textContent)-num(sale.textContent):0;
    var h1=document.querySelector('h1.ant-typography'),og=document.querySelector('meta[property="og:image"]');
    var cur=num(sale.textContent),x={id:m[1],href:location.pathname,t:h1?h1.textContent.replace(/^\s*Mall\s*/,'').trim():document.title,img:og?og.content:'',p:sale.textContent.trim(),p0:cur,pn:cur,pt:Date.now()};
    var f=OFF.indexOf('giagiam')<0&&fav(m[1]);if(f){seenPrice(f,cur);if(favDirty){favDirty=0;lsSet('dgs_fav',lsGet('dgs_fav'))}}
    var zl=OFF.indexOf('hoizalo')<0&&cf('zalo','https://zalo.me/0981657659');
    var w=document.createElement('div');w.id='dgs-detail';w.dataset.pid=m[1];
    w.innerHTML=(s>0?'<span class="sv">Tiết kiệm '+vnd(s)+'</span>':'')+(f&&cur<f.p0?'<span class="dr">↓ Rẻ hơn '+vnd(f.p0-cur)+' so với lúc bạn lưu</span>':'')+'<button type="button" class="fv"><i class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.6-4.6-9.4-9.3C1.4 8 3.5 4.6 7 4.6c2 0 3.5 1.1 5 2.9 1.5-1.8 3-2.9 5-2.9 3.5 0 5.6 3.4 4.4 6.6-1.8 4.7-9.4 9.3-9.4 9.3z"/></svg></i><span class="tx"></span></button>'+(zl?'<button type="button" class="zq"><img src="'+ZIMG+'" alt="" width="20" height="20">Hỏi qua Zalo'+ZTIP+'</button>':'');
    if(zl)zqBind(w.querySelector('.zq'),'detail');
    var b=w.querySelector('button');
    var tx=b.querySelector('.tx');
    function paint(){var on=isFav(x.id);b.classList.toggle('on',on);tx.textContent=on?'Đã lưu':'Lưu';b.setAttribute('aria-pressed',on?'true':'false');b.setAttribute('aria-label',on?'Bỏ khỏi Yêu thích':'Lưu vào Yêu thích')}
    paint();
    b.addEventListener('click',function(){var l=lsGet('dgs_fav'),on=isFav(x.id);track('dgs_favorite',{action:on?'remove':'add',item_id:String(x.id),where:'detail'});
      if(on){l=l.filter(function(y){return y.id!=x.id});toast('Đã bỏ khỏi Yêu thích')}else{l.unshift(x);l=l.slice(0,60);toast('Đã lưu vào Yêu thích ♥')}
      lsSet('dgs_fav',l);paint();favCount();if(!on){b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')}});
    row.insertAdjacentElement('afterend',w);
    [].forEach.call(row.querySelectorAll('.fv'),function(e){e.remove()});row.classList.add('dgs-prow');row.appendChild(b);
  }
  var lastLoad=0,moreIO=null;
  var busy=false;
  function scan(){busy=false;fresh=[];document.querySelectorAll('.grid.lg\\:grid-cols-6 > div:not([data-dgs])').forEach(function(c){run('the',function(){card(c)})});
    if(fresh.length){if(mode!=='def')arrange(fresh);if(filt!=='all')applyFilter(fresh)}
    if(favDirty){favDirty=0;lsSet('dgs_fav',lsGet('dgs_fav'))}
    run('banner',countdown);run('loc',tools);run('yeuthich',favCount);run('vuaxem',recent);run('lienhe',keepContact);run('lienhe',hats);run('chuong',follow);run('flash',ftip);run('danhmuc',catHint);run('chitiet',detail);run('quaylai',restore);run('toast',newToast);run('taithem',autoMore);run('giagiam',dropNote);run('muangay',buyBar);run('lentop',toTop);run('anhbia',bannerFit)}
  new MutationObserver(function(){if(!busy){busy=true;setTimeout(scan,120)}}).observe(document.body,{childList:true,subtree:true});
  scan();
  /* 4) thanh Hoang Sa - Truong Sa + lien he */
  function countdown(){
    if(document.getElementById('dgs-banner')) return;
    var h=document.querySelector('header'); if(!h||!h.parentElement) return;
    var b1=cf('banner1','Hoàng Sa, Trường Sa là của Việt Nam'),b2=cf('banner2','Mọi câu hỏi, thắc mắc về sản phẩm hay đơn hàng, quý khách vui lòng liên hệ Zalo, Facebook ở góc phải màn hình hoặc SĐT'),ph=cf('phone','0981657659'),phT=cf('phoneText','0981 657 659');
    var msg=(b1?'<i class="dgs-ico" aria-hidden="true"></i><span class="dgs-vn">'+b1+'<i class="dgs-heart">❤️‍🔥</i></span><i class="dgs-sep">·</i>':'')+((b2||ph)?'<span>'+b2+(ph?'<a class="dgs-tel" href="tel:'+ph+'">'+(phT||ph)+'</a>':'')+'</span><i class="dgs-sep">·</i>':'');
    if(!msg)return;
    var w=document.createElement('div');w.id='dgs-banner';
    w.innerHTML='<div class="dgs-track"><div class="dgs-run">'+msg+msg+'</div></div>';
    h.insertAdjacentElement('afterend',w);
    /* luon dinh ngay duoi thanh dau trang khi cuon (may tinh va dien thoai dung 2 thanh khac nhau) */
    var HD=null,lastTop=-1;
    function st(){if(!HD||(HD[0]&&!HD[0].isConnected))HD=[].filter.call(document.querySelectorAll('header > div'),function(d){return getComputedStyle(d).position==='fixed'});
      var b=0;HD.forEach(function(d){var r=d.getBoundingClientRect();if(r.height>0&&r.bottom>b)b=r.bottom});
      var t=Math.max(0,Math.round(b));if(t!==lastTop){lastTop=t;w.style.top=t+'px'}}
    var sk=false;window.addEventListener('scroll',function(){if(!sk){sk=true;requestAnimationFrame(function(){sk=false;st()})}},{passive:true});
    window.addEventListener('resize',function(){HD=null;st()},{passive:true});st();setTimeout(st,800);setTimeout(st,2500);
    /* luc dau: cau Hoang Sa, Truong Sa dung giua man hinh 3s roi moi chay */
    var run=w.querySelector('.dgs-run'),phase=null;
    (function(){
      var tr=w.querySelector('.dgs-track').getBoundingClientRect(),ico=run.querySelector('.dgs-ico').getBoundingClientRect(),vn=run.querySelector('.dgs-vn').getBoundingClientRect();
      var x0=Math.max(0,Math.round((tr.width-(vn.right-ico.left))/2)),half=run.scrollWidth/2;
      run.style.transform='translateX('+x0+'px)';
      setTimeout(function(){
        if(!run.animate||!half){run.style.transform='';w.classList.add('dgs-go');return}
        phase=run.animate([{transform:'translateX('+x0+'px)'},{transform:'translateX('+(-half)+'px)'}],{duration:(x0+half)/half*22000,easing:'linear'});
        if(w.classList.contains('dgs-pause'))phase.pause();
        phase.onfinish=function(){phase=null;run.style.transform='';w.classList.add('dgs-go')};
      },3000);
    })();
    /* dien thoai: cham vao thi dung, bo tay ra 2s thi chay tiep */
    var t=0;function hold(){clearTimeout(t);w.classList.add('dgs-pause');if(phase)phase.pause()}
    function rel(){clearTimeout(t);t=setTimeout(function(){w.classList.remove('dgs-pause');if(phase)phase.play()},2000)}
    if(window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches){w.addEventListener('mouseenter',function(){if(phase)phase.pause()});w.addEventListener('mouseleave',function(){if(phase)phase.play()})}
    if('IntersectionObserver' in window){new IntersectionObserver(function(es){w.classList.toggle('dgs-idle',!es[0].isIntersecting)}).observe(w)}
    w.addEventListener('touchstart',hold,{passive:true});
    w.addEventListener('touchend',rel,{passive:true});
    w.addEventListener('touchcancel',rel,{passive:true});
  }
  /* 5) tu tai them san pham khi cuon toi nut "Xem them" */
  moreIO=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting&&Date.now()-lastLoad>1500){lastLoad=Date.now();e.target.click()}});
  },{rootMargin:'0px 0px 300px 0px'}):null;
  function autoMore(){
    if(!moreIO) return;
    document.querySelectorAll('button.ant-btn:not([data-dgs-more])').forEach(function(b){
      if((b.textContent||'').trim()==='Xem thêm'){b.dataset.dgsMore='1';moreIO.observe(b)}});
    /* khi dang loc ma nut Xem them van nam trong man hinh thi tai tiep */
    if(filt!=='all'){var mb=document.querySelector('button[data-dgs-more]');
      if(mb&&mb.getBoundingClientRect().top<window.innerHeight+300){
        if(Date.now()-lastLoad>1500){lastLoad=Date.now();mb.click()}
        clearTimeout(moreT);moreT=setTimeout(autoMore,1700)}}
  }
  var moreT=0;
  scan();
})();
