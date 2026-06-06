/* ============================================================
   DATA — B1 & B2 English Learning Content
   ============================================================ */

const B1_LESSONS = [
  {
    id: 'b1-present-perfect',
    num: 'Dars 1',
    title: 'Present Perfect Tense',
    summary: 'Hozirgi tugallangan zamonni qo\'llash, have/has + V3 tuzilmasi',
    content: `
      <h1>Present Perfect Tense</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Qoida</h2>
      <p>Present Perfect Tense hozirgi zamondagi natija bilan bog'liq bo'lgan o'tmishdagi harakatni ifodalaydi.</p>
      <p><strong>Tuzilishi:</strong> Subject + have/has + Past Participle (V3)</p>

      <div class="rule-box">
        <strong>Eslab qoling:</strong> "I/you/we/they" bilan <strong>have</strong>, "he/she/it" bilan <strong>has</strong> ishlatiladi.
      </div>

      <h2>Qachon ishlatiladi?</h2>
      <h3>1. Hayotiy tajriba (Life experience)</h3>
      <div class="example-box">
        <p><span class="correct">✓ I have visited London twice.</span></p>
        <p class="translation">Men Londonni ikki marta ziyorat qilganman.</p>
      </div>

      <h3>2. Yaqinda sodir bo'lgan hodisa</h3>
      <div class="example-box">
        <p><span class="correct">✓ She has just finished her homework.</span></p>
        <p class="translation">U hozirgina uy vazifasini tugatdi.</p>
      </div>

      <h3>3. O'tmishda boshlangan va hozir davom etayotgan harakat</h3>
      <div class="example-box">
        <p><span class="correct">✓ We have lived here for ten years.</span></p>
        <p class="translation">Biz bu yerda o'n yildan beri yashaymiz.</p>
      </div>

      <h3>4. Hali tugallanmagan vaqt davri</h3>
      <div class="example-box">
        <p><span class="correct">✓ I have read three books this month.</span></p>
        <p class="translation">Men bu oyda uchta kitob o'qidim.</p>
      </div>

      <h2>Signal so'zlar</h2>
      <ul>
        <li><strong>already</strong> — allaqachon</li>
        <li><strong>yet</strong> — hali (so'roq va inkor gaplarda)</li>
        <li><strong>just</strong> — hozirgina</li>
        <li><strong>ever</strong> — hech qachon (so'roq gaplarda)</li>
        <li><strong>never</strong> — hech qachon (inkor ma'noda)</li>
        <li><strong>for</strong> — davomida (vaqt davri)</li>
        <li><strong>since</strong> — ...dan beri (aniq vaqt)</li>
      </ul>

      <h2>Bo'lishsiz va so'roq shakli</h2>
      <div class="example-box">
        <p><span class="correct">✓ She hasn't seen that movie.</span> (Inkor)</p>
        <p><span class="correct">✓ Have you ever been to Japan?</span> (So'roq)</p>
      </div>

      <h2>Present Perfect vs Past Simple</h2>
      <div class="example-box">
        <p><span class="correct">✓ I have lost my key.</span> (Kalit hali topilmagan — natija muhim)</p>
        <p><span class="correct">✓ I lost my key yesterday.</span> (Aniq vaqt — Past Simple)</p>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> Agar gapda <em>yesterday, last week, in 2010</em> kabi aniq vaqt ko'rsatilgan bo'lsa — Past Simple ishlatiladi. Agar aniq vaqt ko'rsatilmagan bo'lsa — Present Perfect ishlatiladi.
      </div>
    `
  },
  {
    id: 'b1-past-simple-continuous',
    num: 'Dars 2',
    title: 'Past Simple vs Past Continuous',
    summary: 'O\'tmish zamoni — oddiy va davom etgan shakllarining farqi',
    content: `
      <h1>Past Simple vs Past Continuous</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Past Simple</h2>
      <p>O'tmishda tugallangan harakatlarni ifodalaydi.</p>
      <p><strong>Tuzilishi:</strong> Subject + V2 (Past form)</p>
      <div class="example-box">
        <p><span class="correct">✓ I watched a movie last night.</span></p>
        <p class="translation">Men kecha kino ko'rdim.</p>
      </div>

      <h2>Past Continuous</h2>
      <p>O'tmishdagi ma'lum vaqtda davom etayotgan harakatni ifodalaydi.</p>
      <p><strong>Tuzilishi:</strong> Subject + was/were + V-ing</p>
      <div class="example-box">
        <p><span class="correct">✓ I was watching a movie at 8 PM.</span></p>
        <p class="translation">Men soat 8 da kino ko'rayotgan edim.</p>
      </div>

      <h2>Birga ishlatilishi</h2>
      <p>Past Continuous fon harakatni, Past Simple esa uni bo'lgan hodisani ifodalaydi.</p>
      <div class="example-box">
        <p><span class="correct">✓ While I was walking in the park, it started to rain.</span></p>
        <p class="translation">Men parkda yurgan paytimda, yomg'ir yog'a boshladi.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ She was cooking when the phone rang.</span></p>
        <p class="translation">Telefon jiringlaganda u ovqat pishirayotgan edi.</p>
      </div>

      <div class="rule-box">
        <strong>Qoida:</strong> <em>when</em> — Past Simple bilan, <em>while</em> — Past Continuous bilan ko'p ishlatiladi.
      </div>

      <h2>Ikki parallel harakat</h2>
      <div class="example-box">
        <p><span class="correct">✓ While she was reading, he was watching TV.</span></p>
        <p class="translation">U kitob o'qiyotganda, u televizor ko'rayotgan edi.</p>
      </div>
    `
  },
  {
    id: 'b1-conditionals-0-1-2',
    num: 'Dars 3',
    title: 'Conditional Sentences (0, 1, 2)',
    summary: 'Shartli gaplar — haqiqiy va nohaqiqiy shartlar',
    content: `
      <h1>Conditional Sentences (0, 1, 2)</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Zero Conditional — Umumiy haqiqat</h2>
      <p><strong>Tuzilishi:</strong> If + Present Simple, Present Simple</p>
      <p>Har doim to'g'ri bo'lgan haqiqatlar uchun ishlatiladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ If you heat water to 100°C, it boils.</span></p>
        <p class="translation">Agar suvni 100°C gacha qizdirsangiz, u qaynaydi.</p>
      </div>

      <h2>First Conditional — Haqiqiy kelajak</h2>
      <p><strong>Tuzilishi:</strong> If + Present Simple, will + V1</p>
      <p>Kelajakda bo'lishi mumkin bo'lgan real holatlar uchun.</p>
      <div class="example-box">
        <p><span class="correct">✓ If it rains tomorrow, I will stay at home.</span></p>
        <p class="translation">Agar ertaga yomg'ir yog'sa, men uyda qolaman.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ If you study hard, you will pass the exam.</span></p>
        <p class="translation">Agar ko'p o'qisang, imtihondan o'tasan.</p>
      </div>

      <h2>Second Conditional — Nohaqiqiy hozirgi zamon</h2>
      <p><strong>Tuzilishi:</strong> If + Past Simple, would + V1</p>
      <p>Hozirgi zamondagi nohaqiqiy (xayoliy) holatlar uchun.</p>
      <div class="example-box">
        <p><span class="correct">✓ If I had a million dollars, I would travel the world.</span></p>
        <p class="translation">Agar menda million dollar bo'lsa, men dunyoni sayohat qilgan bo'lardim.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ If she were taller, she would play basketball.</span></p>
        <p class="translation">Agar u balandroq bo'lsa, basketbol o'ynagan bo'lardi.</p>
      </div>

      <div class="rule-box">
        <strong>Eslab qoling:</strong> Second Conditional da "I/he/she/it" bilan ham <strong>were</strong> ishlatilishi mumkin (rasmiy uslubda): <em>If I were you...</em>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> First Conditional = real imkoniyat, Second Conditional = xayoliy holat. <br>
        <em>If I win the lottery...</em> (1st — o'ynab yutish mumkin) vs <em>If I won the lottery...</em> (2nd — xayoliy)
      </div>
    `
  },
  {
    id: 'b1-passive-voice',
    num: 'Dars 4',
    title: 'Passive Voice',
    summary: 'Majhul nisbat — be + V3 tuzilmasi',
    content: `
      <h1>Passive Voice (Majhul nisbat)</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Qachon ishlatiladi?</h2>
      <p>Harakatni bajaruvchi emas, balki harakat ob'ekti muhim bo'lganda ishlatiladi.</p>
      <p><strong>Tuzilishi:</strong> Subject + be (to'g'ri shaklda) + Past Participle (V3)</p>

      <h2>Turli zamonlarda Passive</h2>
      <h3>Present Simple Passive</h3>
      <div class="example-box">
        <p><span class="correct">✓ English is spoken in many countries.</span></p>
        <p class="translation">Ingliz tili ko'p mamlakatlarda gaplashiladi.</p>
      </div>

      <h3>Past Simple Passive</h3>
      <div class="example-box">
        <p><span class="correct">✓ The book was written by J.K. Rowling.</span></p>
        <p class="translation">Kitob J.K. Rowling tomonidan yozilgan.</p>
      </div>

      <h3>Present Perfect Passive</h3>
      <div class="example-box">
        <p><span class="correct">✓ The homework has been completed.</span></p>
        <p class="translation">Uy vazifasi bajarildi.</p>
      </div>

      <h3>Future Simple Passive</h3>
      <div class="example-box">
        <p><span class="correct">✓ The results will be announced tomorrow.</span></p>
        <p class="translation">Natijalar ertaga e'lon qilinadi.</p>
      </div>

      <h3>Modal + Passive</h3>
      <div class="example-box">
        <p><span class="correct">✓ This problem can be solved easily.</span></p>
        <p class="translation">Bu muammoni osonlikcha hal qilish mumkin.</p>
      </div>

      <h2>Active dan Passive ga o'zgartirish</h2>
      <div class="example-box">
        <p><strong>Active:</strong> Someone stole my bike.</p>
        <p><strong>Passive:</strong> <span class="correct">My bike was stolen.</span></p>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> "by + agent" faqat kim qilganini aytish muhim bo'lganda qo'shiladi. Ko'pincha tushirib qoldiriladi.
      </div>
    `
  },
  {
    id: 'b1-relative-clauses',
    num: 'Dars 5',
    title: 'Relative Clauses',
    summary: 'Aniqlovchi ergash gaplar — who, which, that, where, whose',
    content: `
      <h1>Relative Clauses (Aniqlovchi ergash gaplar)</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Relative Pronouns</h2>
      <ul>
        <li><strong>who</strong> — odamlar uchun</li>
        <li><strong>which</strong> — narsalar/hayvonlar uchun</li>
        <li><strong>that</strong> — ikkalasi uchun ham</li>
        <li><strong>where</strong> — joy uchun</li>
        <li><strong>whose</strong> — egalik uchun</li>
        <li><strong>when</strong> — vaqt uchun</li>
      </ul>

      <h2>Defining Relative Clauses</h2>
      <p>Kimni/nimani nazarda tutilayotganini aniqlaydi. Vergul ishlatilmaydi. Olib tashlansa gap ma'nosiz bo'ladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ The man who lives next door is a doctor.</span></p>
        <p class="translation">Qo'shni uyda yashaydigan odam shifokor.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ The book that I bought yesterday is very interesting.</span></p>
        <p class="translation">Men kecha sotib olgan kitob juda qiziqarli.</p>
      </div>

      <h2>Non-defining Relative Clauses</h2>
      <p>Qo'shimcha ma'lumot beradi. Vergul bilan ajratiladi. Olib tashlansa gap to'liq bo'lib qoladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ My sister, who lives in London, is a teacher.</span></p>
        <p class="translation">Mening singlim, Londonda yashaydi, o'qituvchi.</p>
      </div>

      <div class="rule-box">
        <strong>Muhim:</strong> Non-defining clause da <strong>that</strong> ishlatilmaydi. Faqat <strong>who/which</strong> ishlatiladi.
      </div>

      <div class="example-box">
        <p><span class="correct">✓ Paris, which is the capital of France, is beautiful.</span></p>
        <p><span class="incorrect">✗ Paris, that is the capital of France, is beautiful.</span></p>
      </div>
    `
  },
  {
    id: 'b1-modal-verbs',
    num: 'Dars 6',
    title: 'Modal Verbs',
    summary: 'Can, could, may, might, must, should, have to',
    content: `
      <h1>Modal Verbs</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Asosiy Modal Fe'llar</h2>

      <h3>Can / Could — Qobiliyat va ruxsat</h3>
      <div class="example-box">
        <p><span class="correct">✓ I can speak three languages.</span> (qobiliyat)</p>
        <p><span class="correct">✓ Can I use your phone?</span> (ruxsat)</p>
        <p><span class="correct">✓ Could you help me?</span> (iltimos — xushmuomala)</p>
      </div>

      <h3>May / Might — Ehtimollik</h3>
      <div class="example-box">
        <p><span class="correct">✓ It may rain tomorrow.</span> (ehtimol — kuchliroq)</p>
        <p><span class="correct">✓ She might come to the party.</span> (ehtimol — kuchsizroq)</p>
      </div>

      <h3>Must / Have to — Majburiyat</h3>
      <div class="example-box">
        <p><span class="correct">✓ You must wear a seatbelt.</span> (qonun/qat'iy qoida)</p>
        <p><span class="correct">✓ I have to wake up early tomorrow.</span> (tashqi majburiyat)</p>
      </div>

      <div class="rule-box">
        <strong>Farq:</strong> <em>must</em> — shaxsiy qaror yoki qat'iy qoida. <em>have to</em> — tashqi holat tufayli majburiyat.
      </div>

      <h3>Should / Ought to — Maslahat</h3>
      <div class="example-box">
        <p><span class="correct">✓ You should eat more vegetables.</span></p>
        <p class="translation">Siz ko'proq sabzavot yeishingiz kerak.</p>
      </div>

      <h3>Mustn't vs Don't have to</h3>
      <div class="example-box">
        <p><span class="correct">✓ You mustn't park here.</span> (taqiqlangan!)</p>
        <p><span class="correct">✓ You don't have to come.</span> (majburiy emas, xohlasang kelishingmumkin)</p>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> <em>mustn't</em> = taqiq, <em>don't have to</em> = shart emas. Bu ikkalasini aralashtirib yubormaslik muhim!
      </div>
    `
  },
  {
    id: 'b1-reported-speech',
    num: 'Dars 7',
    title: 'Reported Speech (Asoslari)',
    summary: 'Bilvosita nutq — "He said that..." tuzilmasi',
    content: `
      <h1>Reported Speech (Bilvosita nutq)</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Nima uchun kerak?</h2>
      <p>Biror kishining aytgan so'zlarini boshqa odamga yetkazish uchun ishlatiladi.</p>

      <h2>Asosiy o'zgarishlar</h2>
      <h3>Zamon o'zgarishi (Backshift)</h3>
      <div class="example-box">
        <p><strong>Direct:</strong> "I <u>am</u> happy." → <strong>Reported:</strong> She said she <u>was</u> happy.</p>
        <p><strong>Direct:</strong> "I <u>like</u> coffee." → <strong>Reported:</strong> He said he <u>liked</u> coffee.</p>
        <p><strong>Direct:</strong> "I <u>will</u> come." → <strong>Reported:</strong> She said she <u>would</u> come.</p>
        <p><strong>Direct:</strong> "I <u>can</u> swim." → <strong>Reported:</strong> He said he <u>could</u> swim.</p>
      </div>

      <h3>Zamon o'zgarish jadvali</h3>
      <ul>
        <li>Present Simple → Past Simple</li>
        <li>Present Continuous → Past Continuous</li>
        <li>Past Simple → Past Perfect</li>
        <li>Present Perfect → Past Perfect</li>
        <li>will → would</li>
        <li>can → could</li>
        <li>may → might</li>
      </ul>

      <h3>Vaqt va joy ifodalari o'zgarishi</h3>
      <ul>
        <li>today → that day</li>
        <li>tomorrow → the next day</li>
        <li>yesterday → the day before</li>
        <li>here → there</li>
        <li>this → that</li>
        <li>now → then</li>
      </ul>

      <h2>So'roq gaplar</h2>
      <div class="example-box">
        <p><strong>Direct:</strong> "Where do you live?"</p>
        <p><strong>Reported:</strong> <span class="correct">He asked where I lived.</span></p>
      </div>
      <div class="example-box">
        <p><strong>Direct:</strong> "Are you coming?"</p>
        <p><strong>Reported:</strong> <span class="correct">She asked if I was coming.</span></p>
      </div>

      <div class="rule-box">
        <strong>Muhim:</strong> Reported question da so'z tartibi to'g'ri gap tartibiga o'zgaradi (yordamchi fe'l bosh fe'ldan keyin kelmaydi).
      </div>
    `
  },
  {
    id: 'b1-comparatives-superlatives',
    num: 'Dars 8',
    title: 'Comparatives & Superlatives',
    summary: 'Qiyoslash darajalari — -er/-est, more/most',
    content: `
      <h1>Comparatives & Superlatives</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Comparative (Qiyoslash darajasi)</h2>
      <p>Ikki narsa/odamni solishtirishda ishlatiladi.</p>

      <h3>Qisqa sifatlar (1-2 bo'g'in)</h3>
      <div class="example-box">
        <p><span class="correct">✓ She is taller than her brother.</span></p>
        <p><span class="correct">✓ This book is cheaper than that one.</span></p>
      </div>

      <h3>Uzun sifatlar (3+ bo'g'in)</h3>
      <div class="example-box">
        <p><span class="correct">✓ English is more interesting than math.</span></p>
        <p><span class="correct">✓ She is more beautiful than her sister.</span></p>
      </div>

      <h2>Superlative (Orttirma daraja)</h2>
      <p>Guruh ichida eng yaxshisi/yomonini ko'rsatishda ishlatiladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ He is the tallest student in the class.</span></p>
        <p><span class="correct">✓ This is the most expensive restaurant in the city.</span></p>
      </div>

      <h2>Irregular forms</h2>
      <ul>
        <li><strong>good</strong> → better → the best</li>
        <li><strong>bad</strong> → worse → the worst</li>
        <li><strong>far</strong> → farther/further → the farthest/furthest</li>
        <li><strong>little</strong> → less → the least</li>
        <li><strong>much/many</strong> → more → the most</li>
      </ul>

      <h2>Foydali tuzilmalar</h2>
      <div class="example-box">
        <p><span class="correct">✓ The more you practice, the better you become.</span></p>
        <p class="translation">Qanchalik ko'p mashq qilsangiz, shunchalik yaxshi bo'lasiz.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ She is not as tall as her brother.</span> (teng emas)</p>
        <p><span class="correct">✓ She is as smart as her brother.</span> (teng)</p>
      </div>
    `
  },
  {
    id: 'b1-gerund-infinitive',
    num: 'Dars 9',
    title: 'Gerund vs Infinitive',
    summary: 'Fe\'ldan keyin -ing yoki to + V1 ishlatish',
    content: `
      <h1>Gerund vs Infinitive</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Gerund (-ing)</h2>
      <p>Ba'zi fe'llardan keyin faqat gerund ishlatiladi:</p>
      <ul>
        <li>enjoy, finish, avoid, mind, suggest, practice, keep, consider, imagine, deny, admit, recommend</li>
      </ul>
      <div class="example-box">
        <p><span class="correct">✓ I enjoy reading books.</span></p>
        <p><span class="correct">✓ She avoids eating fast food.</span></p>
        <p><span class="incorrect">✗ I enjoy to read books.</span></p>
      </div>

      <h2>Infinitive (to + V1)</h2>
      <p>Ba'zi fe'llardan keyin faqat infinitive ishlatiladi:</p>
      <ul>
        <li>want, need, decide, plan, hope, expect, agree, refuse, learn, promise, offer, manage, afford, pretend</li>
      </ul>
      <div class="example-box">
        <p><span class="correct">✓ I want to learn English.</span></p>
        <p><span class="correct">✓ She decided to study abroad.</span></p>
        <p><span class="incorrect">✗ I want learning English.</span></p>
      </div>

      <h2>Ikkalasi ham mumkin (ma'no o'zgaradi)</h2>
      <h3>remember / forget</h3>
      <div class="example-box">
        <p><span class="correct">✓ I remember locking the door.</span> (Qulflaganim esimda — o'tmish)</p>
        <p><span class="correct">✓ Remember to lock the door.</span> (Qulflashni eslab qol — kelajak)</p>
      </div>

      <h3>stop</h3>
      <div class="example-box">
        <p><span class="correct">✓ He stopped smoking.</span> (Chekishni tashladi)</p>
        <p><span class="correct">✓ He stopped to smoke.</span> (Chekish uchun to'xtadi)</p>
      </div>

      <h3>try</h3>
      <div class="example-box">
        <p><span class="correct">✓ Try eating less sugar.</span> (Tajriba sifatida sinab ko'r)</p>
        <p><span class="correct">✓ Try to eat less sugar.</span> (Harakat qil)</p>
      </div>
    `
  },
  {
    id: 'b1-articles',
    num: 'Dars 10',
    title: 'Articles (a, an, the)',
    summary: 'Artikllarni to\'g\'ri ishlatish qoidalari',
    content: `
      <h1>Articles: a, an, the</h1>
      <span class="lesson-level-tag b1-tag">B1 — Intermediate</span>

      <h2>Indefinite Articles: a / an</h2>
      <p>Birinchi marta tilga olinayotgan yoki umumiy narsa uchun.</p>
      <div class="example-box">
        <p><span class="correct">✓ I saw a dog in the park.</span> (birinchi marta)</p>
        <p><span class="correct">✓ She is an engineer.</span> (kasb)</p>
      </div>

      <div class="rule-box">
        <strong>a</strong> — undosh tovush bilan boshlanuvchi so'zlar oldida: a book, a university (yu- tovushi)<br>
        <strong>an</strong> — unli tovush bilan boshlanuvchi so'zlar oldida: an apple, an hour (h tovushi eshitilmaydi)
      </div>

      <h2>Definite Article: the</h2>
      <p>Ma'lum, aniq narsa haqida gapirganda.</p>
      <div class="example-box">
        <p><span class="correct">✓ I saw a dog. The dog was very friendly.</span> (ikkinchi marta — allaqachon ma'lum)</p>
        <p><span class="correct">✓ The sun is very bright today.</span> (yagona narsa)</p>
      </div>

      <h2>"The" ishlatiladigan holatlar</h2>
      <ul>
        <li>Yagona narsalar: the sun, the moon, the Earth</li>
        <li>Superlative bilan: the best, the tallest</li>
        <li>Okeanlar, dengizlar, daryolar: the Pacific, the Nile</li>
        <li>Mamlakatlar (ko'plik/respublika): the USA, the UK, the Netherlands</li>
        <li>Musical instruments: play the piano</li>
      </ul>

      <h2>Artikl ishlatilmaydigan holatlar</h2>
      <ul>
        <li>Umumiy tushunchalar: Life is beautiful. / Music is relaxing.</li>
        <li>Sport turlari: play football, play tennis</li>
        <li>Tillar: speak English</li>
        <li>Ko'pchilik mamlakatlar: France, Japan, Uzbekistan</li>
        <li>Ovqat vaqtlari: have breakfast, have lunch</li>
      </ul>

      <div class="tip-box">
        <strong>Maslahat:</strong> Artikl tanlashda o'zingizga so'rang: "Bu narsa tinglovchiga ma'lummi?" Ha — <em>the</em>, Yo'q — <em>a/an</em>.
      </div>
    `
  }
];

const B2_LESSONS = [
  {
    id: 'b2-mixed-conditionals',
    num: 'Dars 1',
    title: 'Mixed Conditionals',
    summary: 'Aralash shartli gaplar — turli zamonlar kombinatsiyasi',
    content: `
      <h1>Mixed Conditionals</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Nima uchun "mixed"?</h2>
      <p>Mixed conditionals — Second va Third conditional elementlarini aralashtirib, turli vaqt oralig'idagi shartli gaplarni ifodalaydi.</p>

      <h2>Type 1: Past condition → Present result</h2>
      <p><strong>Tuzilishi:</strong> If + Past Perfect, would + V1</p>
      <p>O'tmishdagi boshqacha harakat hozirgi natijaga ta'sir qiladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ If I had studied medicine, I would be a doctor now.</span></p>
        <p class="translation">Agar men tibbiyotni o'qiganimda, hozir shifokor bo'lardim.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ If she hadn't moved to London, she wouldn't live there now.</span></p>
        <p class="translation">Agar u Londonga ko'chmaganda, hozir u yerda yashamagan bo'lardi.</p>
      </div>

      <h2>Type 2: Present condition → Past result</h2>
      <p><strong>Tuzilishi:</strong> If + Past Simple, would have + V3</p>
      <p>Hozirgi doimiy holat o'tmishdagi natijaga ta'sir qiladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ If I were braver, I would have asked her out.</span></p>
        <p class="translation">Agar men jasurroq bo'lganimda, uni chaqirgan bo'lardim.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ If he weren't so lazy, he would have finished the project.</span></p>
        <p class="translation">Agar u shunchalik dangasa bo'lmaganda, loyihani tugatgan bo'lardi.</p>
      </div>

      <div class="rule-box">
        <strong>Muhim farq:</strong><br>
        Type 1: O'tmish → Hozir (If + had V3, would + V1)<br>
        Type 2: Hozir → O'tmish (If + V2, would have + V3)
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> Mixed conditionals ni tushunish uchun savol bering: "Qaysi qism hozirgi zamon, qaysi qism o'tmish?" — keyin qoida qo'llang.
      </div>
    `
  },
  {
    id: 'b2-advanced-passive',
    num: 'Dars 2',
    title: 'Advanced Passive Structures',
    summary: 'Murakkab majhul tuzilmalar — It is said that..., He is believed to...',
    content: `
      <h1>Advanced Passive Structures</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Impersonal Passive</h2>
      <p>Rasmiy uslubda, ayniqsa yangiliklar va ilmiy matnlarda qo'llaniladi.</p>

      <h3>It + passive + that clause</h3>
      <div class="example-box">
        <p><span class="correct">✓ It is said that he is very rich.</span></p>
        <p class="translation">Aytishlaricha, u juda boy.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ It is believed that the Earth is 4.5 billion years old.</span></p>
        <p class="translation">Yer 4.5 milliard yosh deb hisoblanadi.</p>
      </div>

      <h3>Subject + passive + to-infinitive</h3>
      <div class="example-box">
        <p><span class="correct">✓ He is said to be very rich.</span></p>
        <p><span class="correct">✓ She is known to have worked in Japan.</span> (o'tmish — to have + V3)</p>
      </div>

      <h2>Ko'p ishlatiladigan fe'llar</h2>
      <ul>
        <li>say → It is said that... / He is said to...</li>
        <li>believe → It is believed that... / She is believed to...</li>
        <li>think → It is thought that...</li>
        <li>know → It is known that... / He is known to...</li>
        <li>report → It is reported that...</li>
        <li>expect → It is expected that... / They are expected to...</li>
        <li>consider → It is considered that... / He is considered to be...</li>
      </ul>

      <h2>Have/Get something done</h2>
      <p>Biror ishni boshqa kishiga qildirish.</p>
      <div class="example-box">
        <p><span class="correct">✓ I had my car repaired.</span> (Mashinamni ta'mirlatdim.)</p>
        <p><span class="correct">✓ She got her hair cut.</span> (Sochini oldirdi.)</p>
      </div>

      <div class="rule-box">
        <strong>Tuzilishi:</strong> have/get + object + past participle (V3)
      </div>
    `
  },
  {
    id: 'b2-inversion',
    num: 'Dars 3',
    title: 'Inversion',
    summary: 'Inversiya — rasmiy uslubda so\'z tartibini o\'zgartirish',
    content: `
      <h1>Inversion (Inversiya)</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Nima bu?</h2>
      <p>Inversion — gap boshida yordamchi fe'l egadan oldin kelishi. Rasmiy uslub va ta'kidlash uchun ishlatiladi.</p>

      <h2>Negative adverbs bilan</h2>
      <h3>Never</h3>
      <div class="example-box">
        <p><span class="correct">✓ Never have I seen such a beautiful sunset.</span></p>
        <p class="translation">Men hech qachon bunday chiroyli quyosh botishini ko'rmaganman.</p>
      </div>

      <h3>Rarely / Seldom</h3>
      <div class="example-box">
        <p><span class="correct">✓ Rarely does she make mistakes.</span></p>
        <p class="translation">U kamdan-kam xato qiladi.</p>
      </div>

      <h3>Not only ... but also</h3>
      <div class="example-box">
        <p><span class="correct">✓ Not only did he pass the exam, but he also got the highest score.</span></p>
        <p class="translation">U nafaqat imtihondan o'tdi, balki eng yuqori ball oldi.</p>
      </div>

      <h3>Hardly / Scarcely ... when</h3>
      <div class="example-box">
        <p><span class="correct">✓ Hardly had I arrived when it started raining.</span></p>
        <p class="translation">Men yetib kelishim bilanoq yomg'ir yog'a boshladi.</p>
      </div>

      <h3>No sooner ... than</h3>
      <div class="example-box">
        <p><span class="correct">✓ No sooner had she left than the phone rang.</span></p>
      </div>

      <h3>Only after / Only when / Only if</h3>
      <div class="example-box">
        <p><span class="correct">✓ Only after reading the book did I understand the movie.</span></p>
        <p><span class="correct">✓ Only when you study hard will you succeed.</span></p>
      </div>

      <h3>Under no circumstances / On no account</h3>
      <div class="example-box">
        <p><span class="correct">✓ Under no circumstances should you open this door.</span></p>
      </div>

      <div class="rule-box">
        <strong>Qoida:</strong> Salbiy/cheklovchi so'z gap boshiga chiqqanda → yordamchi fe'l + ega + asosiy fe'l
      </div>
    `
  },
  {
    id: 'b2-cleft-sentences',
    num: 'Dars 4',
    title: 'Cleft Sentences',
    summary: 'Ta\'kidlash gaplari — It is/was... that/who...',
    content: `
      <h1>Cleft Sentences (Ta'kidlash gaplari)</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>It-cleft</h2>
      <p><strong>Tuzilishi:</strong> It is/was + ta'kidlanayotgan qism + that/who + gap qoldig'i</p>
      <div class="example-box">
        <p><strong>Oddiy:</strong> John broke the window.</p>
        <p><span class="correct">✓ It was John who broke the window.</span> (kim — ta'kidlash)</p>
        <p><span class="correct">✓ It was the window that John broke.</span> (nimani — ta'kidlash)</p>
      </div>

      <h2>What-cleft (Pseudo-cleft)</h2>
      <p><strong>Tuzilishi:</strong> What + clause + is/was + ta'kidlanayotgan qism</p>
      <div class="example-box">
        <p><strong>Oddiy:</strong> I need a holiday.</p>
        <p><span class="correct">✓ What I need is a holiday.</span></p>
      </div>
      <div class="example-box">
        <p><strong>Oddiy:</strong> She loves his smile.</p>
        <p><span class="correct">✓ What she loves is his smile.</span></p>
      </div>

      <h2>All-cleft</h2>
      <div class="example-box">
        <p><span class="correct">✓ All I want is peace and quiet.</span></p>
        <p class="translation">Men xohlagan yagona narsa — tinchlik va sukunat.</p>
      </div>

      <h2>The thing/reason/place/person cleft</h2>
      <div class="example-box">
        <p><span class="correct">✓ The reason I'm calling is to ask for your help.</span></p>
        <p><span class="correct">✓ The thing that surprised me was her reaction.</span></p>
        <p><span class="correct">✓ The person who helped me was my neighbor.</span></p>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> Cleft sentences yozma ingliz tilida, ayniqsa esseylar va rasmiy matnlarda keng qo'llaniladi. IELTS Writing uchun juda foydali!
      </div>
    `
  },
  {
    id: 'b2-advanced-reported-speech',
    num: 'Dars 5',
    title: 'Advanced Reported Speech',
    summary: 'Murakkab bilvosita nutq — turli gap turlari va iboralar',
    content: `
      <h1>Advanced Reported Speech</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Reporting verbs bilan turli tuzilmalar</h2>

      <h3>Verb + to-infinitive</h3>
      <p>agree, offer, promise, refuse, threaten, claim</p>
      <div class="example-box">
        <p><strong>Direct:</strong> "I'll help you." → <span class="correct">He offered to help me.</span></p>
        <p><strong>Direct:</strong> "I won't tell anyone." → <span class="correct">She promised not to tell anyone.</span></p>
      </div>

      <h3>Verb + object + to-infinitive</h3>
      <p>advise, ask, beg, encourage, invite, order, persuade, remind, tell, warn</p>
      <div class="example-box">
        <p><strong>Direct:</strong> "Please sit down." → <span class="correct">He asked me to sit down.</span></p>
        <p><strong>Direct:</strong> "Don't touch that!" → <span class="correct">She warned me not to touch that.</span></p>
      </div>

      <h3>Verb + -ing</h3>
      <p>admit, deny, recommend, suggest</p>
      <div class="example-box">
        <p><strong>Direct:</strong> "Yes, I broke it." → <span class="correct">He admitted breaking it.</span></p>
        <p><strong>Direct:</strong> "Let's go to the cinema." → <span class="correct">She suggested going to the cinema.</span></p>
      </div>

      <h3>Verb + preposition + -ing</h3>
      <p>apologize for, insist on, accuse of, congratulate on</p>
      <div class="example-box">
        <p><strong>Direct:</strong> "Sorry I'm late." → <span class="correct">He apologized for being late.</span></p>
        <p><strong>Direct:</strong> "You stole my idea!" → <span class="correct">She accused him of stealing her idea.</span></p>
      </div>

      <div class="rule-box">
        <strong>Muhim:</strong> Reporting verb tanlash gapdagi ma'noni aniqroq ifodalaydi. "Said" o'rniga aniqroq fe'l ishlatish — yuqori daraja ko'rsatkichi!
      </div>
    `
  },
  {
    id: 'b2-wish-if-only',
    num: 'Dars 6',
    title: 'Wish & If only',
    summary: 'Afsuslanish va tilaklarni ifodalash',
    content: `
      <h1>Wish & If only</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Hozirgi zamonga nisbatan afsuslanish</h2>
      <p><strong>Tuzilishi:</strong> wish / if only + Past Simple</p>
      <div class="example-box">
        <p><span class="correct">✓ I wish I spoke French.</span></p>
        <p class="translation">Qani edi men fransuzcha gaplashsam.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ If only I had more free time.</span></p>
        <p class="translation">Qani edi ko'proq bo'sh vaqtim bo'lsa.</p>
      </div>

      <h2>O'tmishga nisbatan afsuslanish</h2>
      <p><strong>Tuzilishi:</strong> wish / if only + Past Perfect</p>
      <div class="example-box">
        <p><span class="correct">✓ I wish I had studied harder at school.</span></p>
        <p class="translation">Qani edi maktabda ko'proq o'qiganimda.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ If only I hadn't said that.</span></p>
        <p class="translation">Qani edi shunday demaganImda.</p>
      </div>

      <h2>Bezovtalik / g'azab ifodalash</h2>
      <p><strong>Tuzilishi:</strong> wish + would + V1</p>
      <div class="example-box">
        <p><span class="correct">✓ I wish you would stop making so much noise.</span></p>
        <p class="translation">Shuncha shovqin qilishni to'xtatib qo'ysangiz edi.</p>
      </div>
      <div class="example-box">
        <p><span class="correct">✓ I wish it would stop raining.</span></p>
        <p class="translation">Qani edi yomg'ir to'xtasa.</p>
      </div>

      <div class="rule-box">
        <strong>Muhim:</strong> "wish + would" o'zingiz haqida ishlatilmaydi.<br>
        <span class="incorrect">✗ I wish I would be taller.</span><br>
        <span class="correct">✓ I wish I were taller.</span>
      </div>

      <div class="tip-box">
        <strong>If only</strong> = wish, lekin kuchliroq emotsional bo'yoq beradi. Ikkalasi ham bir xil grammatik qoidalarga bo'ysunadi.
      </div>
    `
  },
  {
    id: 'b2-subjunctive',
    num: 'Dars 7',
    title: 'Subjunctive Mood',
    summary: 'Shart mayli — rasmiy uslubda ishlatish',
    content: `
      <h1>Subjunctive Mood (Shart mayli)</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Present Subjunctive</h2>
      <p>Rasmiy uslubda tavsiya, buyruq yoki talab ifodalovchi fe'llardan keyin ishlatiladi.</p>
      <p><strong>Tuzilishi:</strong> that + subject + base form (V1, -s qo'shilmaydi)</p>

      <div class="example-box">
        <p><span class="correct">✓ The teacher insisted that he study harder.</span> (studies emas!)</p>
        <p><span class="correct">✓ It is essential that she be on time.</span> (is emas!)</p>
        <p><span class="correct">✓ I recommend that he take this course.</span> (takes emas!)</p>
      </div>

      <h2>Subjunctive talab qiladigan fe'llar</h2>
      <ul>
        <li>recommend, suggest, insist, demand, request, require, propose, urge</li>
      </ul>

      <h2>Subjunctive talab qiladigan sifatlar</h2>
      <ul>
        <li>essential, important, necessary, vital, crucial, imperative</li>
      </ul>
      <div class="example-box">
        <p><span class="correct">✓ It is important that every student be present.</span></p>
        <p><span class="correct">✓ It is vital that the report be submitted on time.</span></p>
      </div>

      <h2>Were (Past Subjunctive)</h2>
      <p>Nohaqiqiy holatlarni ifodalashda barcha shaxslar bilan <strong>were</strong> ishlatiladi.</p>
      <div class="example-box">
        <p><span class="correct">✓ If I were you, I would accept the offer.</span></p>
        <p><span class="correct">✓ She acts as if she were the boss.</span></p>
        <p><span class="correct">✓ I wish he were here.</span></p>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> Kundalik gapda "was" ham qabul qilinadi, lekin rasmiy yozuvda va IELTS/CAE imtihonlarida "were" to'g'ri javob hisoblanadi.
      </div>
    `
  },
  {
    id: 'b2-phrasal-verbs',
    num: 'Dars 8',
    title: 'Advanced Phrasal Verbs',
    summary: 'Murakkab phrasal fe\'llar va ularning qo\'llanilishi',
    content: `
      <h1>Advanced Phrasal Verbs</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Nima uchun muhim?</h2>
      <p>Phrasal verbs ingliz tilining tabiiy qismi. B2 darajada ularni tushunish va to'g'ri qo'llash juda muhim.</p>

      <h2>Asosiy B2 Phrasal Verbs</h2>

      <h3>Ish va ta'lim</h3>
      <ul>
        <li><strong>come up with</strong> — g'oya topmoq: <em>She came up with a brilliant idea.</em></li>
        <li><strong>carry out</strong> — bajarmoq: <em>They carried out the research successfully.</em></li>
        <li><strong>figure out</strong> — tushunmoq: <em>I can't figure out this math problem.</em></li>
        <li><strong>bring up</strong> — mavzuni ko'tarmoq: <em>He brought up an interesting point.</em></li>
        <li><strong>put off</strong> — kechiktirmoq: <em>Don't put off your homework.</em></li>
      </ul>

      <h3>Munosabatlar</h3>
      <ul>
        <li><strong>get along with</strong> — chiqishmoq: <em>She gets along with everyone.</em></li>
        <li><strong>look up to</strong> — hurmat qilmoq: <em>I look up to my parents.</em></li>
        <li><strong>fall out with</strong> — arazlashmoq: <em>They fell out with each other over money.</em></li>
        <li><strong>make up</strong> — yarashmoq: <em>They had a fight but made up later.</em></li>
      </ul>

      <h3>Kundalik hayot</h3>
      <ul>
        <li><strong>run out of</strong> — tugamoq: <em>We've run out of milk.</em></li>
        <li><strong>look into</strong> — tekshirmoq: <em>The police are looking into the case.</em></li>
        <li><strong>cut down on</strong> — kammaytirmoq: <em>You should cut down on sugar.</em></li>
        <li><strong>keep up with</strong> — orqada qolmaslik: <em>It's hard to keep up with technology.</em></li>
        <li><strong>come across</strong> — tasodifan topmoq: <em>I came across an old photo.</em></li>
      </ul>

      <div class="rule-box">
        <strong>Separable vs Inseparable:</strong><br>
        Separable: <em>Turn off the light</em> = <em>Turn the light off</em> = <em>Turn it off</em><br>
        Inseparable: <em>Look after the children</em> ≠ <em>Look the children after</em>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> Phrasal verblarni kontekstda o'rganing. Har kuni 2-3 ta yangi phrasal verb yozing va gap tuzib mashq qiling.
      </div>
    `
  },
  {
    id: 'b2-future-forms',
    num: 'Dars 9',
    title: 'Advanced Future Forms',
    summary: 'Kelajak zamonining turli shakllari va farqlari',
    content: `
      <h1>Advanced Future Forms</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Future Continuous</h2>
      <p><strong>Tuzilishi:</strong> will be + V-ing</p>
      <p>Kelajakda ma'lum vaqtda davom etayotgan harakat.</p>
      <div class="example-box">
        <p><span class="correct">✓ This time tomorrow, I will be flying to London.</span></p>
        <p class="translation">Ertaga shu paytda men Londonga uchayotgan bo'laman.</p>
      </div>

      <h2>Future Perfect</h2>
      <p><strong>Tuzilishi:</strong> will have + V3</p>
      <p>Kelajakdagi ma'lum vaqtgacha tugagan harakat.</p>
      <div class="example-box">
        <p><span class="correct">✓ By next year, I will have graduated from university.</span></p>
        <p class="translation">Kelasi yilgacha men universitetni tugatgan bo'laman.</p>
      </div>

      <h2>Future Perfect Continuous</h2>
      <p><strong>Tuzilishi:</strong> will have been + V-ing</p>
      <p>Kelajakdagi ma'lum vaqtgacha davom etgan harakat (davomiylik ta'kidlanadi).</p>
      <div class="example-box">
        <p><span class="correct">✓ By December, I will have been working here for 5 years.</span></p>
        <p class="translation">Dekabrgacha men bu yerda 5 yil ishlagan bo'laman.</p>
      </div>

      <h2>be about to / be on the verge of</h2>
      <div class="example-box">
        <p><span class="correct">✓ The meeting is about to start.</span> (hozirgina boshlanmoqchi)</p>
        <p><span class="correct">✓ She is on the verge of quitting her job.</span> (deyarli ... qilmoqda)</p>
      </div>

      <h2>be due to / be bound to</h2>
      <div class="example-box">
        <p><span class="correct">✓ The train is due to arrive at 3 PM.</span> (rejadagi)</p>
        <p><span class="correct">✓ She is bound to succeed.</span> (albatta ... qiladi)</p>
      </div>

      <div class="tip-box">
        <strong>Maslahat:</strong> Turli future formalarni to'g'ri tanlash — B2 darajaning muhim ko'rsatkichi. "will" dan boshqa shakllarni ham faol ishlating!
      </div>
    `
  },
  {
    id: 'b2-linking-words',
    num: 'Dars 10',
    title: 'Advanced Linking Words & Discourse Markers',
    summary: 'Bog\'lovchi so\'zlar va matn strukturasi',
    content: `
      <h1>Advanced Linking Words & Discourse Markers</h1>
      <span class="lesson-level-tag b2-tag">B2 — Upper-Intermediate</span>

      <h2>Contrast (Qarama-qarshilik)</h2>
      <ul>
        <li><strong>However</strong> — Biroq: <em>The test was difficult. However, most students passed.</em></li>
        <li><strong>Nevertheless / Nonetheless</strong> — Shunga qaramay: <em>He was tired. Nevertheless, he continued working.</em></li>
        <li><strong>Although / Even though</strong> — Garchi: <em>Although it was raining, we went for a walk.</em></li>
        <li><strong>Despite / In spite of</strong> + noun/-ing: <em>Despite being tired, she finished the project.</em></li>
        <li><strong>Whereas / While</strong> — ...bo'lsa-da: <em>She loves coffee, whereas her husband prefers tea.</em></li>
      </ul>

      <h2>Cause & Result (Sabab va natija)</h2>
      <ul>
        <li><strong>Therefore / Consequently / As a result</strong>: <em>He didn't study. Consequently, he failed the exam.</em></li>
        <li><strong>Due to / Owing to</strong> + noun: <em>The flight was delayed due to bad weather.</em></li>
        <li><strong>Since / As</strong>: <em>Since you're here, let's start.</em></li>
      </ul>

      <h2>Addition (Qo'shimcha)</h2>
      <ul>
        <li><strong>Furthermore / Moreover / In addition</strong>: <em>The hotel is expensive. Moreover, the service is poor.</em></li>
        <li><strong>Not only ... but also</strong>: <em>She is not only smart but also hardworking.</em></li>
        <li><strong>On top of that</strong>: <em>The food was bad. On top of that, the waiter was rude.</em></li>
      </ul>

      <h2>Exemplification (Misol keltirish)</h2>
      <ul>
        <li><strong>For instance / For example</strong></li>
        <li><strong>Such as</strong></li>
        <li><strong>In particular / Particularly</strong></li>
      </ul>

      <h2>Conclusion (Xulosa)</h2>
      <ul>
        <li><strong>In conclusion / To sum up / All in all</strong></li>
        <li><strong>On the whole / Overall</strong></li>
        <li><strong>Taking everything into account</strong></li>
      </ul>

      <div class="tip-box">
        <strong>IELTS/CAE Maslahat:</strong> Esseyda turli linking words ishlatish — yuqori ball olish kaliti. Lekin haddan tashqari ko'p ishlatmang — tabiiy bo'lishi kerak!
      </div>
    `
  }
];

/* ============================================================
   PRACTICE EXERCISES
   ============================================================ */
const B1_PRACTICE = [
  {
    topic: 'Present Perfect',
    exercises: [
      { type: 'choice', question: 'I ___ to Paris three times.', options: ['have been', 'was', 'am being', 'had been'], correct: 0 },
      { type: 'choice', question: 'She ___ her homework yet.', options: ['didn\'t finish', 'hasn\'t finished', 'don\'t finish', 'won\'t finish'], correct: 1 },
      { type: 'choice', question: '___ you ever ___ sushi?', options: ['Did / eat', 'Have / eaten', 'Do / eat', 'Are / eating'], correct: 1 },
      { type: 'fill', question: 'They ___ (live) here since 2010.', answer: 'have lived' },
      { type: 'fill', question: 'He ___ (just / arrive) at the office.', answer: 'has just arrived' },
    ]
  },
  {
    topic: 'Past Simple vs Past Continuous',
    exercises: [
      { type: 'choice', question: 'While I ___ dinner, the phone rang.', options: ['cooked', 'was cooking', 'am cooking', 'have cooked'], correct: 1 },
      { type: 'choice', question: 'She ___ a book when I arrived.', options: ['reads', 'read', 'was reading', 'has read'], correct: 2 },
      { type: 'choice', question: 'We ___ football when it started to rain.', options: ['played', 'were playing', 'play', 'have played'], correct: 1 },
      { type: 'fill', question: 'I ___ (walk) to school when I ___ (see) an accident.', answer: 'was walking, saw' },
      { type: 'choice', question: 'What ___ at 9 PM last night?', options: ['did you do', 'were you doing', 'have you done', 'do you do'], correct: 1 },
    ]
  },
  {
    topic: 'Conditionals (0, 1, 2)',
    exercises: [
      { type: 'choice', question: 'If you heat ice, it ___.', options: ['melts', 'will melt', 'would melt', 'melted'], correct: 0 },
      { type: 'choice', question: 'If it rains tomorrow, I ___ at home.', options: ['stay', 'stayed', 'will stay', 'would stay'], correct: 2 },
      { type: 'choice', question: 'If I ___ a lot of money, I would travel the world.', options: ['have', 'had', 'will have', 'having'], correct: 1 },
      { type: 'fill', question: 'If she ___ (study) hard, she will pass the exam.', answer: 'studies' },
      { type: 'choice', question: 'If I were you, I ___ that job.', options: ['will take', 'would take', 'take', 'took'], correct: 1 },
    ]
  },
  {
    topic: 'Passive Voice',
    exercises: [
      { type: 'choice', question: 'English ___ in many countries.', options: ['speaks', 'is spoken', 'speaking', 'spoke'], correct: 1 },
      { type: 'choice', question: 'The Mona Lisa ___ by Leonardo da Vinci.', options: ['painted', 'was painted', 'is painted', 'painting'], correct: 1 },
      { type: 'fill', question: 'The cake ___ (make) by my mother yesterday.', answer: 'was made' },
      { type: 'choice', question: 'The new hospital ___ next year.', options: ['will build', 'will be built', 'is building', 'builds'], correct: 1 },
      { type: 'fill', question: 'This song ___ (write) in 1965.', answer: 'was written' },
    ]
  },
  {
    topic: 'Modal Verbs',
    exercises: [
      { type: 'choice', question: 'You ___ park here. It\'s not allowed.', options: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'couldn\'t'], correct: 0 },
      { type: 'choice', question: 'You ___ come if you don\'t want to. It\'s optional.', options: ['mustn\'t', 'don\'t have to', 'can\'t', 'won\'t'], correct: 1 },
      { type: 'choice', question: 'She ___ be at work. Her car is in the parking lot.', options: ['can', 'must', 'should', 'would'], correct: 1 },
      { type: 'choice', question: 'You ___ eat more fruits and vegetables.', options: ['must', 'should', 'can', 'would'], correct: 1 },
      { type: 'fill', question: '___ you help me with this bag, please?', answer: 'Could' },
    ]
  }
];

const B2_PRACTICE = [
  {
    topic: 'Mixed Conditionals',
    exercises: [
      { type: 'choice', question: 'If I had studied law, I ___ a lawyer now.', options: ['would be', 'will be', 'am', 'would have been'], correct: 0 },
      { type: 'choice', question: 'If she weren\'t so shy, she ___ the speech yesterday.', options: ['would give', 'would have given', 'gave', 'had given'], correct: 1 },
      { type: 'fill', question: 'If I ___ (not / miss) the train, I would be at work now.', answer: 'hadn\'t missed' },
      { type: 'choice', question: 'If he were more careful, he ___ the mistake last week.', options: ['wouldn\'t make', 'wouldn\'t have made', 'didn\'t make', 'won\'t make'], correct: 1 },
      { type: 'fill', question: 'If they ___ (move) to Spain, they would speak Spanish now.', answer: 'had moved' },
    ]
  },
  {
    topic: 'Advanced Passive',
    exercises: [
      { type: 'choice', question: 'He ___ to be the richest man in the city.', options: ['is said', 'says', 'is saying', 'said'], correct: 0 },
      { type: 'choice', question: 'It ___ that the company will close next month.', options: ['reports', 'is reported', 'reporting', 'has reporting'], correct: 1 },
      { type: 'fill', question: 'I had my car ___ (repair) last week.', answer: 'repaired' },
      { type: 'choice', question: 'She got her hair ___ at the salon.', options: ['cut', 'cutting', 'to cut', 'cuts'], correct: 0 },
      { type: 'fill', question: 'The suspect is believed ___ (leave) the country.', answer: 'to have left' },
    ]
  },
  {
    topic: 'Inversion',
    exercises: [
      { type: 'choice', question: 'Never ___ such a beautiful place.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], correct: 1 },
      { type: 'choice', question: 'Not only ___ the exam, but he also got the highest score.', options: ['he passed', 'did he pass', 'he did pass', 'passed he'], correct: 1 },
      { type: 'fill', question: 'Rarely ___ she make mistakes in her work.', answer: 'does' },
      { type: 'choice', question: 'Hardly ___ arrived when the meeting started.', options: ['I had', 'had I', 'I have', 'did I'], correct: 1 },
      { type: 'choice', question: 'Only after the exam ___ how difficult it was.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], correct: 1 },
    ]
  },
  {
    topic: 'Wish & If only',
    exercises: [
      { type: 'choice', question: 'I wish I ___ more time to travel.', options: ['have', 'had', 'will have', 'having'], correct: 1 },
      { type: 'choice', question: 'If only I ___ that email yesterday!', options: ['didn\'t send', 'hadn\'t sent', 'don\'t send', 'won\'t send'], correct: 1 },
      { type: 'choice', question: 'I wish you ___ making so much noise!', options: ['stop', 'stopped', 'would stop', 'will stop'], correct: 2 },
      { type: 'fill', question: 'She wishes she ___ (can) speak Japanese.', answer: 'could' },
      { type: 'fill', question: 'If only he ___ (be) more patient with his students.', answer: 'were' },
    ]
  },
  {
    topic: 'Linking Words',
    exercises: [
      { type: 'choice', question: '___ the rain, the match continued.', options: ['Despite', 'Although', 'However', 'Therefore'], correct: 0 },
      { type: 'choice', question: 'He failed the exam. ___, he didn\'t give up.', options: ['Therefore', 'Moreover', 'Nevertheless', 'Furthermore'], correct: 2 },
      { type: 'choice', question: '___ being tired, she finished all her homework.', options: ['However', 'In spite of', 'Therefore', 'Moreover'], correct: 1 },
      { type: 'choice', question: 'The restaurant is expensive. ___, the food is excellent.', options: ['Therefore', 'However', 'Furthermore', 'Due to'], correct: 1 },
      { type: 'fill', question: 'The flight was cancelled ___ to bad weather.', answer: 'due' },
    ]
  }
];

/* ============================================================
   TESTS — 20 questions each
   ============================================================ */
const B1_TEST = [
  { question: 'I ___ never ___ to Australia.', options: ['have / been', 'has / been', 'did / be', 'was / being'], correct: 0 },
  { question: 'She ___ a letter when the doorbell rang.', options: ['wrote', 'was writing', 'writes', 'has written'], correct: 1 },
  { question: 'If you ___ water to 100°C, it boils.', options: ['will heat', 'heat', 'heated', 'would heat'], correct: 1 },
  { question: 'If I had more money, I ___ a new car.', options: ['buy', 'will buy', 'would buy', 'bought'], correct: 2 },
  { question: 'This bridge ___ in 1890.', options: ['built', 'was built', 'is built', 'has built'], correct: 1 },
  { question: 'The man ___ lives next door is very friendly.', options: ['which', 'what', 'who', 'whose'], correct: 2 },
  { question: 'You ___ drive without a license. It\'s illegal.', options: ['don\'t have to', 'mustn\'t', 'shouldn\'t', 'needn\'t'], correct: 1 },
  { question: 'She told me that she ___ busy the next day.', options: ['will be', 'would be', 'is', 'was being'], correct: 1 },
  { question: 'This is ___ movie I\'ve ever seen.', options: ['the best', 'the better', 'the most good', 'the goodest'], correct: 0 },
  { question: 'I enjoy ___ in the morning.', options: ['to run', 'running', 'run', 'ran'], correct: 1 },
  { question: 'If she ___ harder, she will pass the exam.', options: ['study', 'studies', 'studied', 'will study'], correct: 1 },
  { question: '___ I help you with your bags?', options: ['Will', 'Shall', 'Would', 'Do'], correct: 1 },
  { question: 'He has been living here ___ 2015.', options: ['for', 'since', 'from', 'during'], correct: 1 },
  { question: 'The book ___ you recommended was excellent.', options: ['who', 'where', 'which', 'whose'], correct: 2 },
  { question: 'She\'s ___ than her sister.', options: ['more tall', 'taller', 'more taller', 'tallest'], correct: 1 },
  { question: 'I decided ___ a new language.', options: ['learning', 'to learn', 'learn', 'learned'], correct: 1 },
  { question: 'The results ___ announced tomorrow.', options: ['will', 'will be', 'are being', 'have been'], correct: 1 },
  { question: 'While they ___, someone stole their car.', options: ['slept', 'were sleeping', 'sleep', 'have slept'], correct: 1 },
  { question: '___ university is she going to?', options: ['What', 'Which', 'Who', 'Where'], correct: 1 },
  { question: 'You don\'t ___ to come if you don\'t want to.', options: ['must', 'should', 'have', 'need'], correct: 2 },
];

const B2_TEST = [
  { question: 'If I had accepted the job, I ___ in London now.', options: ['would live', 'will live', 'would have lived', 'lived'], correct: 0 },
  { question: 'It ___ that the president will resign.', options: ['reports', 'is reported', 'has reported', 'reporting'], correct: 1 },
  { question: 'Never ___ such a difficult exam.', options: ['I have taken', 'have I taken', 'I took', 'did I took'], correct: 1 },
  { question: 'What I really need ___ a long holiday.', options: ['are', 'is', 'were', 'being'], correct: 1 },
  { question: 'She apologized ___ being late.', options: ['to', 'about', 'for', 'of'], correct: 2 },
  { question: 'I wish I ___ speak Chinese.', options: ['can', 'could', 'would', 'will'], correct: 1 },
  { question: 'The teacher insisted that he ___ the assignment again.', options: ['does', 'did', 'do', 'doing'], correct: 2 },
  { question: 'She came ___ with a brilliant solution.', options: ['out', 'up', 'across', 'over'], correct: 1 },
  { question: 'By next month, I ___ here for exactly two years.', options: ['will work', 'will have been working', 'am working', 'have worked'], correct: 1 },
  { question: '___ the bad weather, the event was a success.', options: ['Although', 'Despite', 'However', 'Therefore'], correct: 1 },
  { question: 'If she weren\'t afraid of flying, she ___ to Australia last year.', options: ['would travel', 'would have traveled', 'traveled', 'had traveled'], correct: 1 },
  { question: 'He is known ___ a very generous person.', options: ['being', 'to be', 'that he is', 'for be'], correct: 1 },
  { question: 'Not only ___ the exam, but she also got the highest score.', options: ['she passed', 'did she pass', 'she did pass', 'passed she'], correct: 1 },
  { question: 'If only I ___ more time to prepare for the interview.', options: ['have', 'had', 'will have', 'would have'], correct: 1 },
  { question: 'He threatened ___ the police.', options: ['calling', 'to call', 'call', 'called'], correct: 1 },
  { question: 'She had her computer ___ last week.', options: ['repair', 'repaired', 'repairing', 'to repair'], correct: 1 },
  { question: 'Hardly had I sat down ___ the phone rang.', options: ['than', 'when', 'that', 'as'], correct: 1 },
  { question: 'This time next week, I ___ on a beach in Thailand.', options: ['will lie', 'will be lying', 'am lying', 'lie'], correct: 1 },
  { question: 'The company closed ___ to financial problems.', options: ['because', 'due', 'despite', 'although'], correct: 1 },
  { question: 'It is essential that every student ___ present at the meeting.', options: ['is', 'be', 'will be', 'was'], correct: 1 },
];
