import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // ver/prod
    startTime: '',
    endTime: '',
    ipAddress: '',
    email: '',
    form__A1a: '',
    form__A1b: '',
    form__A1bOther: '',
    form__A1c: [],
    form__A1cOther: '',
    form__A2: [],
    form__A2Other: '',
    form__A3: '',
    form__A4: '',
    form__B6: [],
    SecondStepValues: [
      {
        headingTop: '【B-1-a】エリア',
        heading: 'オフィスビルの立地するエリア（サブマーケット）の品質に関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: 'エリア内におけるオフィスビルの立地の良さ', name: 'entry.1596063298'
      },
      {
        saveValue: '', title: 'エリア内において競合となる新規供給が少ないこと', name: 'entry.715677671'
      },
      {
        saveValue: '', title: 'エリアおよび住所が表すブランド力', name: 'entry.349884610'
      },
      {
        headingTop: '【B-1-b】周辺環境',
        heading: 'オフィスビルの周辺環境の品質に関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: '空気質が良いこと（大気が汚染されていないこと）', name: 'entry.1749870772'
      },
      {
        saveValue: '', title: '治安が良いこと', name: 'entry.1565388327'
      },
      {
        saveValue: '', title: '騒音が少ないこと', name: 'entry.361422912'
      },
      {
        saveValue: '', title: '自然災害（洪水、地震など）の発生リスクが低いこと', name: 'entry.491426986'
      },
      {
        saveValue: '', title: '現在または将来の気候変動に対する脆弱性が低いこと ', name: 'entry.1600635822'
      },
      {
        saveValue: '', title: '産業に起因する事故・災害（例：周辺の化学工場からの有害物質の漏出等）のリスクが低いこと', name: 'entry.403759796'
      },
      {
        headingTop: '【B-1-c】交通利便性',
        heading: 'オフィスビルの交通利便性に関して、以下の各要素がどの程度重要であるかをお答えください',
        saveValue: '', title: '公共交通機関（駅）との距離が近いこと', name: 'entry.1380963284'
      },
      {
        saveValue: '', title: '業務リソース（労働力、顧客、その他のサービスなど）にアクセスしやすいこと', name: 'entry.1934293507'
      },
      {
        saveValue: '', title: '車でのアクセスの良さ', name: 'entry.2019436977'
      },
      {
        saveValue: '', title: '都心部の業務集積地に近いこと', name: 'entry.1928637170'
      },
      {
        headingTop: '【B-1-d】立地に関する総合的な重要度',
        heading: 'オフィスビルの立地の全体的な品質を評価する際に、総合的な重要度をお答えください。',
        saveValue: '', title: 'エリア', name: 'entry.1326416182'
      },
      {
        saveValue: '', title: '周辺環境', name: 'entry.1074008914'
      },
      {
        saveValue: '', title: '交通利便性', name: 'entry.1694133463'
      },
    ],
    ThirdStepValues: [
      {
        headingTop: '【B-2-a】美観',
        heading: 'オフィスビルの美観に関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: 'オフィスビルの内装の美しさ', name: 'entry.443690947'
      },
      {
        saveValue: '', title: 'オフィスビルの外部の美しさ', name: 'entry.1590982462'
      },
      {
        saveValue: '', title: 'ビルのエントランスの高級感', name: 'entry.1089219080'
      },
      {
        saveValue: '', title: 'オフィスビル内部からの眺望', name: 'entry.1014224964'
      },
      {
        headingTop: '【B-2-b】柔軟性',
        heading: 'オフィスビルを長期的に使い続けるための柔軟性を評価する際に、次の5つの要素の相対的な重要度をお答えください。',
        saveValue: '', title: '柔軟に区画を分割できること', name: 'entry.145894501'
      },
      {
        saveValue: '', title: '新しい働き方に適応できること', name: 'entry.933796722'
      },
      {
        saveValue: '', title: 'オフィスビルとそのシステムの保守が容易であること', name: 'entry.138184558'
      },
      {
        saveValue: '', title: '用途変更が可能であること（オフィス→住宅・店舗など）', name: 'entry.231733092'
      },
      {
        saveValue: '', title: 'オフィスビルが構造上の問題を抱えていないこと', name: 'entry.690137945'
      },
      {
        headingTop: '【B-2-c】環境性能',
        heading: 'オフィスビルの環境性能を評価する際に、以下の要素の相対的な重要度をお答えください。',
        saveValue: '', title: '断熱性が高いこと', name: 'entry.379090810'
      },
      {
        saveValue: '', title: '再生可能エネルギーを使用していること', name: 'entry.1062857303'
      },
      {
        saveValue: '', title: '雨水・排水を分別・処理・再利用していること', name: 'entry.2059606693'
      },
      {
        saveValue: '', title: '一酸化炭素及二酸化炭素の排出量を制御していること', name: 'entry.327441324'
      },
      {
        saveValue: '', title: '運用における環境への負荷が低いこと（廃棄物、排気、下水など）', name: 'entry.1555418987'
      },
      {
        saveValue: '', title: '建物の建築や除却における環境への負荷が低いこと', name: 'entry.1010985958'
      },
      {
        saveValue: '', title: '建物が環境認証（CASBEE、LEED、DBJグリーンビル認証等）を取得していること', name: 'entry.760702362'
      },
      {
        headingTop: '【B-2-d】リスクマネジメント',
        heading: 'リスクマネジメントの品質に関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: 'BCP対応（発電機、インターネットアクセスの冗長化など）がなされていること', name: 'entry.585098146'
      },
      {
        saveValue: '', title: '最新の規制に対応してこと', name: 'entry.1918453531'
      },
      {
        saveValue: '', title: '防火設備（検知システム、スプリンクラーなど）が設置されていること', name: 'entry.1175353644'
      },
      {
        saveValue: '', title: '天災および人災のリスクの顕在化を未然に防止する対策がされていること', name: 'entry.670128678'
      },
      {
        saveValue: '', title: 'サイバー攻撃へのオフィスビル設備の対応がなされていること', name: 'entry.1223224401'
      },
      {
        saveValue: '', title: '建物が防犯・犯罪抑止に寄与するよう配慮（就業者および訪問者の入退出管理など）がなされていること', name: 'entry.1841547012'
      },
      {
        saveValue: '', title: '災害発生時への対応（帰宅困難者の受け入れ体制整備等）がなされていること', name: 'entry.926101027'
      },
      {
        headingTop: '【B-2-e】オフィスビルの構造・設備の品質に関する総合的重要度',
        heading: '最後に、オフィスビルの構造・設備の全体的な品質を評価する際に、以下の4つのカテゴリの相対的な重要度をお答えください。',
        saveValue: '', title: '美観', name: 'entry.995081763'
      },
      {
        saveValue: '', title: '耐久性', name: 'entry.462353532'
      },
      {
        saveValue: '', title: '環境性能', name: 'entry.690886419'
      },
      {
        saveValue: '', title: 'リスクマネジメント', name: 'entry.2118436248'
      },
    ],
    FourthStepValues: [
      {
        headingTop: '【B-3-a】柔軟性',
        heading: 'ワークスペースの柔軟性の観点から、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: 'レイアウトの柔軟性が高いこと（大規模な工事をせずにワークスペースを変更、分割できること）	', name: 'entry.647646256'
      },
      {
        saveValue: '', title: 'スペース利用効率が高いこと（専用室内で高い一人当たり面積効率を達成できること）	', name: 'entry.1052325434'
      },
      {
        saveValue: '', title: 'フロア内の移動効率が高いこと（同じフロアで動きやすい）', name: 'entry.1456452397'
      },
      {
        saveValue: '', title: 'フロア間の移動効率が高いこと（フロア間での移動がしやすい）', name: 'entry.1994192956'
      },
      {
        saveValue: '', title: 'ユニバーサルデザインに配慮がなされていること（障害者のためのアクセシビリティが確保されている）', name: 'entry.570752003'
      },
      {
        headingTop: '【B-3-b】快適性',
        heading: 'ワークスペース内の快適さに関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: '快適な温度環境が実現できること（各個人の快適な温度に制御・調整する）', name: 'entry.439542907'
      },
      {
        saveValue: '', title: '快適な照明が設置されていること（各個人に快適な照明レベルに調整できる）', name: 'entry.669421935'
      },
      {
        saveValue: '', title: '室内空気環境が良いこと（換気および空気清浄性能）', name: 'entry.1806496428'
      },
      {
        saveValue: '', title: '集中管理・制御システムが設定されていること（集中コントロールによりすべての設備を制御可能）', name: 'entry.2088118367'
      },
      {
        saveValue: '', title: '快適な音響環境が提供されていること（静かなワークスペースを提供する能力）', name: 'entry.853577546'
      },
      {
        headingTop: '【B-3-c】通信環境',
        heading: 'オフィスビルの通信・インターネット設備の品質に関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: 'インターネット接続の品質が高い（回線速度・安定性）こと	', name: 'entry.1236852325'
      },
      {
        saveValue: '', title: 'オフィスビル内で全ての携帯電話キャリア電波を受信できること', name: 'entry.10718465'
      },
      {
        saveValue: '', title: '通信設備のセキュリティ性能が高いこと（システムの信頼性と冗長性）', name: 'entry.1018422250'
      },
      {
        saveValue: '', title: '最新の技術に合わせて通信設備が更新できること（柔軟性のある配線容量やEPSの余裕）', name: 'entry.1762388393'
      },
      {
        headingTop: '【B-3-d】テナントのための共用スペース',
        heading: '在館者向けの共用スペースの品質に関して、以下の各要素がどの程度重要であるかをお答えください。',
        saveValue: '', title: 'テナント向けのカフェテリアがあること（ビル側が提供する食堂またはミニキッチン・給湯室の充実）	', name: 'entry.1564348920'
      },
      {
        saveValue: '', title: '共用のビジネスサポート設備があること（コピー機設備など）', name: 'entry.645760103'
      },
      {
        saveValue: '', title: 'テナント従業員向けの福利厚生サービスがあること（託児所、スポーツジムなど）', name: 'entry.465158849'
      },
      {
        saveValue: '', title: '多様性に配慮された共用施設等（祈祷室、ハラルフード調理施設等）が設けられていること', name: 'entry.728921133'
      },
      {
        headingTop: '【B-3-e】オフィスビルの室内環境に関する総合的な重要度',
        heading: 'オフィスビルの室内環境（ワークススペース・執務環境）の全体的な品質を評価する際に、以下の各要素の相対的な重要度をお答えください。',
        saveValue: '', title: 'ワークスペースの柔軟性	', name: 'entry.1938175913'
      },
      {
        saveValue: '', title: 'ワークスペースの快適性', name: 'entry.2003250193'
      },
      {
        saveValue: '', title: 'ワークスペースの通信環境', name: 'entry.768236881'
      },
      {
        saveValue: '', title: 'テナントのための共用スペース', name: 'entry.85964479'
      },
    ],
    FifthStepValues: [
      {
        headingTop: '【B-4-a】オフィスビルの品質に関する総合的な重要度',
        heading: 'オフィスビルの全体的な品質を評価する際に、以下の要素の相対的な重要度をお答えください。',
        saveValue: '', title: '立地', name: 'entry.1084405723'
      },
      {
        saveValue: '', title: '建物品質', name: 'entry.736020748'
      },
      {
        saveValue: '', title: '室内環境（ワークスペース・執務環境）の品質', name: 'entry.1678026014'
      },
    ],
    FifthStepValuesCalculation: [
      {
        headingTop: '【B-4-b】オフィスビルの品質に関する総合的な重要度 ',
        heading: '上記の要素の重要度を合計100％となるよう配分してご回答ください。',
        notes: '※下記の3項目は合計100になるよう、数字を入力してください。',
        saveValue: '', label: '立地', name: 'entry.526171916'
      },
      {
        saveValue: '', label: '建物品質', name: 'entry.330108556'
      },
      {
        saveValue: '', label: '室内環境（ワークスペース・執務環境）の品質', name: 'entry.1165875286'
      },
    ],
    FifthStepValuesCalculationSec: [
      {
        headingTop: '【B-4-c】関係者の意見の重要度',
        heading: '評価をするには、さまざまな関係者に相談する必要がありますが、以下に挙げる関係者の意見の重要度をどのようにお考えですか。合計100％となるようご回答ください。',
        notes: '※下記の6項目は合計100になるよう、数字を入力してください。',
        saveValue: '', label: '不動産業者/不動産専門家', name: 'entry.930161498'
      },
      {
        saveValue: '', label: 'テナント/ユーザー', name: 'entry.2028689641'
      },
      {
        saveValue: '', label: 'プロパティマネージャー', name: 'entry.846815884'
      },
      {
        saveValue: '', label: '建築家/エンジニア', name: 'entry.918909121'
      },
      {
        saveValue: '', label: '不動産開発業者', name: 'entry.1396327125'
      },
      {
        saveValue: '', label: '銀行/財政支援者/保険会社', name: 'entry.35301716'
      },
    ],
    SixthStepValues: [
      {
        headingTop: '【C-1】インカムの安定性',
        heading: 'オフィスビルに対する投資について、インカムの安定性を評価する際に、以下の要素の相対的な重要度をお答えください',
        saveValue: '', title: '空室率の低さ・リースアップの容易さ', name: 'entry.1713259411'
      },
      {
        saveValue: '', title: 'テナントの与信', name: 'entry.1207521183'
      },
      {
        saveValue: '', title: 'テナント契約の内容（賃料改定条項、中途解約条項、解除条項等）', name: 'entry.466105716'
      },
      {
        saveValue: '', title: 'テナントがESGに適合した行動・事業を行っている', name: 'entry.455558541'
      },
      {
        headingTop: '【C-2】キャピタルロスのリスク',
        heading: 'オフィスビルに対する投資について、キャピタルロスのリスクを評価する際に、以下の要素の相対的な重要度をお答えください',
        saveValue: '', title: '保守的な評価をすること', name: 'entry.1691847972'
      },
      {
        saveValue: '', title: '市場環境や市況トレンドが良好であること', name: 'entry.24060733'
      },
      {
        saveValue: '', title: '高い流動性（安全で短期での迅速な取引が可能なこと）', name: 'entry.1214389339'
      },
      {
        headingTop: '【C-3】上記の総合的な重要度',
        heading: '上記2問でお伺いした要素を総合して、オフィスビルの投資について考える際に、以下の要素の相対的な重要度をお答えください',
        saveValue: '', title: 'インカムの安定性が高い', name: 'entry.1455357995'
      },
      {
        saveValue: '', title: 'キャピタルロスのリスクが低い', name: 'entry.1142148979'
      }
    ],
    SeventhStepValues: [
      {
        headingTop: '【D-1】総合的な財務的・非財務的要素の重要度',
        heading: 'オフィスビルに対する投資を決定する上で、B. およびC. でお伺いした財務的および非財務的要素の相対的な重要度をお答えください',
        saveValue: '', title: '対象とするオフィスビルの全体的な品質（立地・建物・室内環境）', name: 'entry.1623023944'
      },
      {
        saveValue: '', title: '将来のキャッシュフローの安定性（インカムの安定性とキャピタルロスのリスク低減）', name: 'entry.1576932488'
      },
    ],
    radioItems: [
      {label: 'あまり重要ではない', val:'あまり重要ではない'},
      {label: 'やや重要', val:'やや重要'},
      {label: '重要', val:'重要'},
      {label: '非常に重要	', val:'非常に重要'},
      {label: '極めて重要', val:'極めて重要'}
    ]
  },
  mutations: {
    setSecondSaveValue(state, payload) {
      state.SecondStepValues = payload.SecondStepValues
    },
    setThirdSaveValue(state, payload) {
      state.ThirdStepValues = payload.ThirdStepValues
    },
    setFourthSaveValue(state, payload) {
      state.FourthStepValues = payload.FourthStepValues
    },
    setFifthSaveValue(state, payload) {
      state.FifthStepValues = payload.FifthStepValues
    },
    setFifthSaveValueCalculation(state, payload) {
      state.FifthStepValuesCalculation = payload.FifthStepValuesCalculation
    },
    setFifthSaveValueCalculationSec(state, payload) {
      state.FifthStepValuesCalculationSec = payload.FifthStepValuesCalculationSec
    },
    setSixthSaveValue(state, payload) {
      state.SixthStepValues = payload.SixthStepValues
    },
    setSeventhSaveValue(state, payload) {
      state.SeventhStepValues = payload.SeventhStepValues
    },
    setRadioItem(state, payload) {
      state.radioItems = payload.radioItems
    },
    setStartTime(state, payload) {
      state.startTime = payload.startTime;
    },
    setEndTime(state, payload) {
      state.endTime = payload.endTime;
    },
    setEmail(state, payload) {
      state.email = payload.email;
    },
    setFormA1a(state, payload) {
      state.form__A1a = payload.form__A1a;
    },
    setFormA1b(state, payload) {
      state.form__A1b = payload.form__A1b;
    },
    setFormA1bOther(state, payload) {
      state.form__A1bOther = payload.form__A1bOther;
    },
    setFormA1c(state, payload) {
      state.form__A1c = payload.form__A1c;
    },
    setFormA1cOther(state, payload) {
      state.form__A1cOther = payload.form__A1cOther;
    },
    setFormA2(state, payload) {
      state.form__A2 = payload.form__A2;
    },
    setFormA2Other(state, payload) {
      state.form__A2Other = payload.form__A2Other;
    },
    setFormA3(state, payload) {
      state.form__A3 = payload.form__A3;
    },
    setFormA4(state, payload) {
      state.form__A4 = payload.form__A4;
    },
    setFormB6(state, payload) {
      state.form__B6 = payload.form__B6;
    },
    setIP(state, payload) {
      state.ipAddress = payload.ipAddress;
    },
  },
  actions: {
  },
  modules: {
  }
})
