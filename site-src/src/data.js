// ============================================================
// 八年级14班 · 班级文化网站 —— 全部内容数据
// 修改本站任何文字、照片、栏目，都在这个文件里改。
// ============================================================

export const site = {
  name: '八年级14班',
  school: '2025 级 · 临沂郑旺中学',
  slogan: '星耀 · 自信自强 闪闪发光',
  emblem: '星耀',
  logo: '/photos/logo.png',
  // 班级规模：线上当前展示 50 人，请与班委确认是 48 还是 50
  size: '50 人',
  intro: [
    '五十个性格各异的少年，在同一个秋天走进了同一间教室。从开学连名字都叫不全，到现在一个眼神就知道对方想干什么。',
    '班徽上是「星耀」两个字，底下写着「自信自强 · 闪闪发光」。每个人都能被看见，这就是我们想要的样子。'
  ],
  stats: [
    { value: '50', label: '位同学' },
    { value: '1', label: '个班集体' },
    { value: '2026', label: '始于金秋' },
    { value: '∞', label: '一起的回忆' }
  ],
  // 主页背景黑板（班级文化墙）
  blackboard: '/photos/blackboard.jpg'
}

// ---- 主导航（顺序即展示顺序）----
export const nav = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '简介' },
  { id: 'teachers', label: '师者' },
  { id: 'gallery', label: '风采' },
  { id: 'timeline', label: '纪事' },
  { id: 'pact', label: '班规' },
  { id: 'honors', label: '荣誉' },
  { id: 'study', label: '学苑' },
  { id: 'members', label: '班委' },
  { id: 'voices', label: '寄语' }
]

// ---- 师者 ----
export const teachers = {
  head: {
    role: '班主任',
    subject: '体育',
    name: '彭老师',
    word: '十四同心，锐进不息。愿少年心怀热忱，踏实前行，向阳成长。'
  },
  list: [
    { subject: '语文', name: '王老师' },
    { subject: '数学', name: '徐老师' },
    { subject: '英语', name: '赵老师' },
    { subject: '道法', name: '陈老师' },
    { subject: '数学 · 七年级', name: '周老师' },
    { subject: '语文 · 七年级', name: '彭老师' }
  ]
}

// ---- 班级公约 ----
export const pact = {
  lead: '十四同心，锐进不息。',
  rules: [
    '上课铃响之前坐好，把上一节课的尾巴收干净。',
    '别人发言时看着他，不打断，哪怕你不同意。',
    '作业自己做。做不完可以说明，但不要抄。',
    '教室是我们共同的家：地面、桌面、后墙，谁都别弄乱。',
    '不说伤人的话。玩笑的底线，是对方也在笑。',
    '值日当天认真值日，不推给下一个人。',
    '课堂和自习不说闲话，把注意力留给眼前的事。',
    '有困难先说出来。班里没有谁需要自己一个人扛。',
    '集体活动尽量都在。你的位置，别人替不了。',
    '考好了不炫耀，考砸了不放弃，下一次一起再来。'
  ],
  sign: '八年级14班 全体同学 · 共同订立'
}

// ---- 学习秘诀（学苑）----
export const study = [
  { subject: '语文', tip: '每天读一点、抄一点。摘抄本写满一百句，作文就不缺话说了。' },
  { subject: '数学', tip: '错题本比新题册有用。同一道题隔一周再做一遍，才叫真的会。' },
  { subject: '英语', tip: '单词靠高频小步：一天二十个、连过六遍，胜过一天硬背一百二十个。' },
  { subject: '物理', tip: '先画图，再列式。想不清楚的过程，多半是图没画对。' },
  { subject: '记忆类', tip: '睡前十分钟过一遍，早上起来再回忆一次，是记得最牢的组合。' },
  { subject: '通用', tip: '番茄钟二十五分钟。开始最难，一旦坐下就赢了一半。' },
  { subject: '历史', tip: '大事年表贴在床头，睡前扫一眼，比考前突击强。' },
  { subject: '地理', tip: '地图册当漫画看，看多了考试时脑子里自己会蹦出图。' },
  { subject: '生物', tip: '结构图自己动手画一遍，胜过背三遍书。' },
  { subject: '作文', tip: '素材本记三样：一句好话、一件小事、一个真感受，考试直接用。' }
]

// ---- 推荐书单 ----
export const books = [
  { title: '《平凡的世界》', tag: '小说', note: '写给所有不甘心的人。' },
  { title: '《三体》', tag: '科幻', note: '把整个宇宙装进脑子，晚自习都显得小了。' },
  { title: '《万历十五年》', tag: '历史', note: '一年写尽一个王朝，读史绕不开的神作。' },
  { title: '《乡土中国》', tag: '社科', note: '高中必读。现在读，你就是先跑的那一批。' },
  { title: '《苏菲的世界》', tag: '哲学', note: '一本小说讲完西方哲学史，入门天花板。' },
  { title: '《时间简史》', tag: '科普', note: '霍金带你从黑洞一路回到大爆炸。' },
  { title: '《呐喊》', tag: '文学', note: '课本之外，更锋利的鲁迅。' },
  { title: '《红楼梦》', tag: '古典', note: '啃下来它，阅读理解从此心里有底。' },
  { title: '《人类群星闪耀时》', tag: '传记', note: '十四个改写人类命运的时刻。' },
  { title: '《苏东坡传》', tag: '传记', note: '人生再难，也能活得有意思。' },
  { title: '《万物简史》', tag: '科普', note: '把科学讲成故事，看得停不下来。' },
  { title: '《唐诗三百首》', tag: '诗词', note: '每天一首，三年就是一千首。' },
  { title: '《人类简史》', tag: '历史', note: '换个尺度，重新看我们自己。' },
  { title: '《小王子》', tag: '小说', note: '长大以后更该重读的一本。' }
]

// ---- 班委 ----
export const members = [
  { role: '班长', names: ['高蔚然', '刘宸'] },
  { role: '学习委员', names: ['郭颖颖'] },
  { role: '纪律委员', names: ['何浩晨'] },
  { role: '卫生委员', names: ['赵航'] },
  { role: '心理委员', names: ['周梦瑶'] },
  { role: '体育委员', names: ['王帅涛', '王优璇'] },
  { role: '语文课代表', names: ['高蔚然', '赵航', '刘宸'] },
  { role: '数学课代表', names: ['宋雨辰'] },
  { role: '英语课代表', names: ['郭颖颖', '刘梓萱', '邰若童', '李禹诺'] },
  { role: '道法课代表', names: ['邵栎瑧'] },
  { role: '历史课代表', names: ['李辰希'] },
  { role: '地理课代表', names: ['高子豪', '赵航'] },
  { role: '生物课代表', names: ['马建智'] }
]

// ---- 照片墙（风采）----
export const gallery = [
  { src: '/photos/classroom-group.jpg', alt: '全班同学坐在教室里对着镜头比手势的大合影', caption: '教室里 · 我们的第一张全家福' },
  { src: '/photos/sports-2026-relay.jpg', alt: '2026秋季田径运动会接力赛，同学在红色跑道上奋力奔跑', caption: '运动会 · 交棒的一刻' },
  { src: '/photos/sports-2026-march-in.jpg', alt: '运动会入场式，队伍举着班牌走过跑道', caption: '入场式 · 迈着整齐的步子' },
  { src: '/photos/sports-2026-class-march.jpg', alt: '八年级十四班运动会上全班坐在看台合影', caption: '运动会 · 我们的看台' },
  { src: '/photos/sports-2026-girls-awards.jpg', alt: '女生们举着奖状，身后是操场与树木', caption: '运动会 · 女生们的奖状' },
  { src: '/photos/sports-2026-boys-awards.jpg', alt: '男生们在健身器材旁举着奖状合影', caption: '运动会 · 男生们的奖状' },
  { src: '/photos/military-group.jpg', alt: '军训结束后全班在操场合影，队伍中间举着锦旗和奖状', caption: '军训 · 那面锦旗和那张奖状' },
  { src: '/photos/chorus-stage.jpg', alt: '红歌合唱比赛舞台上同学们挥动旗帜', caption: '红歌比赛 · 旗子举起来的那一刻' },
  { src: '/photos/study-tour.jpg', alt: '本草研学活动，全班在绿色旗帜前排成三排合影', caption: '研学 · 绿旗底下的大合影' },
  { src: '/photos/class-party.jpg', alt: '夜晚的教室里摆满零食，同学们围坐在一起', caption: '联欢 · 桌上摆满了零食' },
  { src: '/photos/outdoor-group.jpg', alt: '秋日操场上全班同学坐在课桌前合影', caption: '操场 · 把教室搬到太阳底下' },
  { src: '/photos/chorus-cards.jpg', alt: '合唱比赛中同学们举起写有字的牌子', caption: '合唱 · 举着字牌唱完整首' },
  { src: '/photos/hike-c.jpg', alt: '远足路上同学们沿着河堤列队前行', caption: '远足 · 沿着河堤一直走' },
  { src: '/photos/hike-d.jpg', alt: '远足队伍走在公路上，有老师穿红马甲随行', caption: '远足 · 老师穿着红马甲走在最前面' },
  { src: '/photos/rest-a.jpg', alt: '远足途中同学们坐在草地上，书包堆在旁边休息', caption: '中途休息 · 书包堆成一座小山' },
  { src: '/photos/flag-line.jpg', alt: '同学们穿着迷彩服在国旗下整齐列队', caption: '列队 · 国旗在上头' },
  { src: '/photos/assembly-line.jpg', alt: '操场上全校集会，同学们站成整齐的队列', caption: '集会 · 站成一条笔直的线' },
  { src: '/photos/bookshelf.jpg', alt: '教室图书角的木质书架上摆满被翻旧的书，旁边贴着中小学生守则', caption: '图书角 · 被翻旧的那些书' },
  { src: '/photos/classroom-empty.jpg', alt: '放学后空无一人的教室，桌椅上还留着书包', caption: '放学后 · 只剩桌椅和书包' }
]

// ---- 班级动态 / 公告栏（纪事）----
// 基于班级真实活动整理；请在数组头部不断追加最新动态。
export const timeline = [
  {
    date: '2026 · 秋',
    tag: '运动会',
    title: '2026 秋季田径运动会',
    text: '跑道上交棒、看台上呐喊。这一届运动会，我们捧回了一张又一张奖状。'
  },
  {
    date: '2026 · 秋',
    tag: '日常',
    title: '新的学期，新的黑板报',
    text: '升入八年级，教室换了，我们的故事还在继续。更多动态陆续更新中。'
  },
  {
    date: '研学',
    tag: '活动',
    title: '本草研学 · 绿旗底下的合影',
    text: '全班一起参加本草文化研学，在绿色旗帜前排成三排，留下一张大大的合影。'
  },
  {
    date: '联欢',
    tag: '活动',
    title: '班级联欢 · 桌上摆满了零食',
    text: '夜晚的教室里亮着灯，同学们围坐在一起，那是属于我们的热闹。'
  },
  {
    date: '红歌',
    tag: '比赛',
    title: '红歌合唱 · 旗子举起来的那一刻',
    text: '合唱比赛舞台上，同学们挥舞旗帜、举起字牌，把一首红歌唱完整。'
  },
  {
    date: '军训',
    tag: '集体',
    title: '军训 · 那面锦旗和那张奖状',
    text: '迷彩服、国旗下整齐的队列，军训结束时的合影里，我们举着锦旗和奖状。'
  },
  {
    date: '2025 · 秋',
    tag: '起点',
    title: '我们在八年级14班相遇',
    text: '五十个少年在同一个秋天走进同一间教室。这是所有故事的开头。'
  }
]

// ---- 荣誉墙 / 奖状 ----
// 荣誉均来自班级照片与活动记录；细节请班委补充完善。
export const honors = [
  {
    year: '2026 秋 · 运动会',
    title: '女子乙组 800 米 · 第一名',
    org: '郭祖颖',
    note: '来源：获奖照片 · 奖状'
  },
  {
    year: '2026 秋 · 运动会',
    title: '男子 400 米 · 第一名',
    org: '李辰希',
    note: '来源：获奖照片 · 奖状'
  },
  {
    year: '2026 秋 · 运动会',
    title: '男子长跑项目 · 第一名',
    org: '于长永',
    note: '具体项目（800米/3000米）以奖状为准，待班委确认'
  },
  {
    year: '2026 秋 · 运动会',
    title: '女子乙组 仰卧起坐 · 团体第六名',
    org: '班级女子团体',
    note: '来源：获奖照片 · 奖状'
  },
  {
    year: '2026 秋 · 运动会',
    title: '女子乙组 4×100 米 · 团体第七名',
    org: '班级女子团体',
    note: '来源：获奖照片 · 奖状'
  },
  {
    year: '2026 秋 · 运动会',
    title: '男子 400 米 · 第六名',
    org: '八年级14班',
    note: '来源：获奖照片 · 奖状'
  },
  {
    year: '2026 秋 · 运动会',
    title: '男子引体向上 · 第七名',
    org: '八年级14班',
    note: '来源：获奖照片 · 奖状'
  },
  {
    year: '待补充',
    title: '欢迎投稿',
    org: '有荣誉的同学随时告诉班委',
    note: '个人/集体荣誉都可上榜'
  }
]

// ---- 中考 / 毕业倒计时 ----
// 目标日期请按真实中考/毕业日期在“target”处修改（YYYY-MM-DD）。
export const countdown = {
  label: '距中考 · 毕业还有',
  target: '2028-06-15',
  note: '目标日期可在 src/data.js 中修改'
}

// ---- 寄语（voices）----
export const voices = [
  { role: '班主任 · 彭老师', word: '十四同心，锐进不息。愿少年心怀热忱，踏实前行，向阳成长。' }
]

// ---- 关于本站 ----
export const about = {
  title: '关于本站',
  paragraphs: [
    '这个网站像一个时间胶囊，记录了我们的点点滴滴。',
    '页面由 VMV 开发，内容由班级成员和老师整理，如有疏漏，请联系：班主任（18366552810）或网站维护者 3347123386@qq.com'
  ],
  facts: [
    { k: '设计与开发', v: 'VMV', hl: true },
    { k: '内容整理', v: '八年级14班班委' },
    { k: '班级规模', v: site.size },
    { k: '技术栈', v: 'Vue 3 + Vite' },
    { k: '托管部署', v: 'Cloudflare Pages' },
    { k: '上线时间', v: '2026 年 9 月' }
  ],
  repo: 'https://github.com/TSVMV/banji-8-14'
}

// ---- 联系 ----
export const contact = {
  address: '临沂郑旺中学 · 八年级14班教室',
  teacher: '班主任 18366552810',
  maintainer: '网站维护 3347123386@qq.com',
  note: '本页面由八年级14班同学共同整理维护，照片归原作者所有。'
}
