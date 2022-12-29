// export abstract class MyClass {

    import { User } from '../_models/user';
    import { GlobalConstants } from './global-constants';

export abstract class GlobalVars {
    
  //   HovNetPeulot.App_Code.DAL.HovNetDB HN = new App_Code.DAL.HovNetDB();
  //   DataTable Tofes = new DataTable();

  //   public static DataTable dtCourt = new DataTable();

  public static MisparTofes: number;
  public static ShemTofes: string;
  public static CoteretTofes: string;
  public static MisparYamimLeBduka: number;
  public static MainTbl: string;
  public static MainSql:string;
  public static MainSqlLog:string;
  public static SinunKodemSql:string;
  public static SinunKodemSqlLog: string;
  public static ShemKovetzLeBdikatIkul: string;
  public static ShemKovetzLeIkulim: string;
  public static ShemKovetzLeIdkun: string;

  public static ParmHalichBakasha: number;


  public static ModelBDK: string;
  public static ModelPLA: string;
  public static Remarks: string;
  public static BdikotDir: string;
  public static ProduceTofes: boolean;
  public static BackColor: string;
  public static DocsDir: string;
  public static KidometDocs: string;
  public static DirectoryFile: string;
  public static FileFdf: string;
  public static TodefTfasim: string;
  public static LogsFilesLocations: string;
  //------------------------------------------------------------------------------
  public static GlbfdfTemplateProd: string;
  public static GlbHozactionsProd: string;
  public static GlbHozactionsTest: string;
  public static GlbTikFormProd: string;
  public static GlbTikFormTest: string;
  public static GlbActionLinksProd: string;
  public static GlbActionLinksTest: string;
  public static GlbExtraLinksProd: string;
  public static GlbExtraLinksTest: string;
  public static GlbFileLocationINProd: string;
  public static GlbFileLocationINTest: string;
  public static GlbTemplateDirProd: string;
  public static GlbTemplateDirTest: string;

  public static GlbfdfsGlob: string;
  public static GlbHozactionsGlob: string;
  public static GlbTikFormGlob: string;
  public static GlbActionLinksGlob: string;
  public static GlbExtraLinksGlob: string;
  public static GlbfdfTemplateGlob: string;
  public static GlbFileLocationINGlob: string;
  public static GlbTemplateDirGlob: string;
  public static GlbClientNameGlob: string;
  public static GlbUser4UpdateGlob: number;
  public static GlbPathIniGlob: string;

  public static Tofes:any;
  public static ShemMisrad:any;

  public static tuser:User;
  public static HovnetConn: string;
  FinM: string = null;

//    public static aa(): string {
//       GlobalVars.GlbPathIniGlob =  "#" + 'bye bye c';
//       return GlobalVars.GlbPathIniGlob;
//    }
    public static SetVars( Peula:number, rec:any): void {
        if(rec){
        GlobalVars.Tofes = rec.find(opt => opt.MisparTofes == Peula);
        GlobalVars.MisparTofes = GlobalVars.Tofes['MisparTofes'];
        GlobalVars.ShemTofes = GlobalVars.Tofes['ShemTofes'];
        GlobalVars.CoteretTofes = GlobalVars.Tofes['KoteretTofes'];
        GlobalVars.MisparYamimLeBduka = GlobalVars.Tofes["MisparYamimLeBduka"];
        GlobalVars.MainTbl = GlobalVars.Tofes["MainTbl"] + "]";
        GlobalVars.MainSql = "select * from " + GlobalVars.Tofes["MainSql"];
        GlobalVars.MainSqlLog = GlobalVars.Tofes["MainSqlLog"];
        GlobalVars.SinunKodemSql = "select * from " + GlobalVars.Tofes["SinunKodemSql"];
        GlobalVars.SinunKodemSqlLog = GlobalVars.Tofes["SinunKodemSqlLog"];
        GlobalVars.ShemKovetzLeBdikatIkul = GlobalVars.Tofes["ShemKovetzLeBdikatIkul"];
        GlobalVars.ShemKovetzLeIkulim = GlobalVars.Tofes["ShemKovetzLeIkulim"];
        GlobalVars.ShemKovetzLeIdkun = GlobalVars.Tofes["ShemKovetzLeIdkun"];
        GlobalVars.ParmHalichBakasha = GlobalVars.Tofes["ParmHalichBakasha"];
        GlobalVars.ModelBDK = GlobalVars.Tofes["ModelBDK"];
        GlobalVars.ModelPLA = GlobalVars.Tofes["ModelPLA"];
        GlobalVars.BdikotDir = GlobalVars.Tofes["BdikotDir"];
        GlobalVars.Remarks = GlobalVars.Tofes["Remarks"];
        GlobalVars.ProduceTofes = GlobalVars.Tofes["ProduceTofes"];
        GlobalVars.BackColor = GlobalVars.Tofes["BackColor"];
        GlobalVars.DocsDir = GlobalVars.Tofes["DocsDir"];
        GlobalVars.KidometDocs = GlobalVars.Tofes["KidometDocs"];
        GlobalVars.FileFdf = GlobalVars.Tofes["FileFdf"];
        GlobalVars.DirectoryFile = GlobalVars.Tofes["DirectoryFile"];
        GlobalVars.TodefTfasim = GlobalVars.Tofes["TodefTfasim"];
        GlobalVars.LogsFilesLocations = GlobalVars.Tofes["LogsFilesLocations"];
        GlobalVars.ShemMisrad = 'פדר';
        // console.log('GlobalVars.MisparTofes   ',GlobalVars.MisparTofes);
        // console.log('GlobalVars.ShemTofes   ',GlobalVars.ShemTofes);
        // console.log('GlobalVars.CoteretTofes   ',GlobalVars.CoteretTofes);
        // console.log('gbl   ',GlobalConstants.GBL);
        // this.jsonPosts1 = JSON.stringify(GlobalConstants.GBL);
    }
    }

}

       
// public static doSomething(): string {
//     return "World";
//   }

//------------------------------------------------------------------------------
/*        public void SetGlob(string Sviva)
        {
            SetMisrad();
            GlbPathIniGlob = @"E:\HovnetSources\NovNetPeulot\HovNetPeulot\HovNet.ini";
            //HovNetPeulot.Classes.IniFile FIni = new IniFile(@"E:\Hovnet\HovNetPeulot\HovNet.ini");
            HovNetPeulot.Classes.IniFile FIni = new IniFile(FinM);
            //FIni.IniWriteValue("Test");
            //FIni.IniWriteValue("MainProp", "ClientName", "בן יעקב, שוימר, דולב - משרד עורכי דין"); 
            //FIni.IniWriteValue("MainProp", "userForUpdate", 219); //userForUpdate
            GlbHozactionsProd = "dbo_HozActions";
            GlbHozactionsTest = "HozActionsL";
            GlbTikFormProd = "dbo_TikForms";
            GlbTikFormTest = "dbo_TikFormsL";
            GlbActionLinksProd = "dbo_HozAuthorities_ActionLinks";
            GlbActionLinksTest = "ActionLinksL";
            GlbExtraLinksProd = "dbo_HozActions_MotionExtraData";
            GlbExtraLinksTest = "MotionExtraDataL";

            GlbFileLocationINProd = @"\\sbs2011\Odlight\Docs\Forms\";
            GlbFileLocationINTest = @"E:\\Odlight\Docs\Forms\";
            GlbTemplateDirProd = @"\\sbs2011\Odlight\hozlapforms\SysFDF\";
            GlbTemplateDirTest = @"\\sbs2011\Odlight\hozlapforms\SysFDF\";
            GlbClientNameGlob = FIni.IniReadValue("MainProp", "ClientName");
            //GlbUser4UpdateGlob = int.Parse(FIni.IniReadValue("MainProp", "userForUpdate"));
            //dtCourt = HN.GetAll("Select * From dbo_vwCourts");      // קריאת קובץ מוביל לבתי משפט

            if (Sviva == "Test")
            {
                GlbHozactionsGlob = GlbHozactionsTest;
                GlbTikFormGlob = GlbTikFormTest;
                GlbActionLinksGlob = GlbActionLinksTest;
                GlbFileLocationINGlob = GlbFileLocationINTest;
                GlbTemplateDirGlob = GlbTemplateDirTest;
                GlbExtraLinksGlob = GlbExtraLinksTest;
            }
            else
            {
                GlbHozactionsGlob = GlbHozactionsProd;
                GlbTikFormGlob = GlbTikFormProd;
                GlbActionLinksGlob = GlbActionLinksProd;
                GlbFileLocationINGlob = GlbFileLocationINProd;
                GlbTemplateDirGlob = GlbTemplateDirProd;
                GlbExtraLinksGlob = GlbExtraLinksProd;
            }
        }*/

       /* public void SetVars(int Peula)
        {
            Tofes = HN.GetFofesProp(Peula);
            DataRow dr = Tofes.Rows[0];
            MisparTofes = Convert.ToInt32(dr["מס טופס"]);
            ShemTofes = Convert.ToString(dr["שם טופס"]);
            CoteretTofes = Convert.ToString(dr["כותרת טופס"]);
            MisparYamimLeBduka = Convert.ToInt32(dr["מס ימים לבדיקה"]);
            MainTbl = "[" + Convert.ToString(dr["מחרוזת טבלה מובילה"]) + "]";
            MainSql = "select * from " + Convert.ToString(dr["מחרוזת טבלה מובילה"]);
            MainSqlLog =Convert.ToString(dr["מחרוזת טבלה מובילה"]);
            SinunKodemSql = "select * from " + Convert.ToString(dr["מחרוזת סינון מישני"]);
            SinunKodemSqlLog = Convert.ToString(dr["מחרוזת סינון מישני"]);
            ShemKovetzLeBdikatIkul = Convert.ToString(dr["שם קובץ לבדיקת עיקולים"]);
            ShemKovetzLeIkulim = Convert.ToString(dr["שם קובץ לעיקולים"]);
            ShemKovetzLeIdkun = Convert.ToString(dr["קובץ מוביל לעידכון"]);
            ParmHalichBakasha = Convert.ToInt32(dr["סוג הליך"]);
            ModelBDK = Convert.ToString(dr["מודל לבדיקה"]);
            ModelPLA = Convert.ToString(dr["מודל לפעולה"]);
            BdikotDir = Convert.ToString(dr["ספריית בדיקות"]);
            Remarks = Convert.ToString(dr["הערות"]);
            ProduceTofes = Convert.ToBoolean(dr["לבצע טופס"]);
            BackColor = Convert.ToString(dr["צבע רקע"]);
            DocsDir = Convert.ToString(dr["ספריית מסמכים להגשה"]);
            KidometDocs = Convert.ToString(dr["קידומת פלט"]);
            FileFdf = Convert.ToString(dr["תבנית לטופס FDF"]);
            DirectoryFile = Convert.ToString(dr["תקיית טפסים"]);
            TodefTfasim = Convert.ToString(dr["מס טופס לטפסים"]);
            LogsFilesLocations = Convert.ToString(dr["מיקום קובץ לוג לפעולה ומודל"]);
            //
        }*/

        /*public static string CalcHozlap(string THozlap)
        {
            string ar = null;
            if (Convert.ToInt64(THozlap) < 5000000000)
            {
                ar = THozlap.Insert(2, "-");
                ar = ar.Insert(8, "-");
                ar = ar.Insert(11, "-");
            }
            else
            {
                ar = THozlap.Insert(6, "-");
                ar = ar.Insert(9, "-");
                //ar = ar.Insert(12, "-");
            }
            return ar;
        }*/

        /*public void SetMisrad()
        {
            string GlbPathIniGlobM = null;
            string HovnetConnM = null;
            switch (ParamHolder.Param)
            {
                case "1":
                    GlbPathIniGlobM = @"E:\HovnetSources\NovNetPeulot\HovNetPeulot\HovNetM1.ini";
                    FinM = @"E:\Hovnet\HovNetPeulot\HovNetM1.ini";
                    HovnetConnM = "HovnetConn1"; //@"E:\HovnetSources\NovNetPeulot\DB\vbRechvNet.accdb";
                    break;
                case "2":
                    GlbPathIniGlobM = @"E:\HovnetSources\NovNetPeulot\HovNetPeulot\HovNetM2.ini";
                    FinM = @"E:\Hovnet\HovNetPeulot\HovNetM2.ini";
                    HovnetConnM = "HovnetConn2"; //@"HovnetConnM2"; // @"E:\HovnetSources\NovNetPeulot\DB\vbRechvNet.accdb";
                    break;
                case "3":
                    GlbPathIniGlobM = @"E:\HovnetSources\NovNetPeulot\HovNetPeulot\HovNetM2.ini";
                    FinM = @"E:\Hovnet\HovNetPeulot\HovNetM3.ini";
                    HovnetConnM = "HovnetConn3"; //@"E:\HovnetSources\NovNetPeulot\DB\vbRechvNet.accdb";
                    break;
            }
            GlbPathIniGlob = GlbPathIniGlobM;
            HovnetConn = HovnetConnM;
        }
    }*/
