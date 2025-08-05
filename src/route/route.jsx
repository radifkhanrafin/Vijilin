import Blog from '@app/Blog/Blog';
import AllBlog from '@app/Blog/Blog_landing_page';
import Home from '@app/Home/Home';
import About from '@app/About/About';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import VisilanPartner from '@app/MsgPartner/VijilanMspPartner';
import ThreatResponse from '@app/MsgPartner/threatRespondService';
import ThreatResponse2 from '@app/MsgPartner/threatRespondService2';
import VisislanProfessional from "@app/MsgPartner/VijilanProfessionalServices"
import CaseStudies from "@app/Case/CaseStudies";
import Resources from '@app/Resources/Resources';
import Vars_consultants_page from '@app/Vars_consultants_page/Vars_consultants_page';
import Automation_Focused from '@app/Automotion Focused/Automation_Focused';
import AutomationCaseStudies from '@app/Case/AutoMationCase';
import Complain_Solution from '@app/Complain Solution/Complian_Solution';
import Corrected_MSP_Program from '@app/Corrected MSP Partner Program/Corrected_MSP_Program';
import DistributionPartner from "@app/MsgPartner/DestribuationPartner"
import ManagedAutomation from "@app/Automotion Focused/ManagedAutomation"
import PlatformTechnology from "@app/Platform/PlatformTechnology"
import ManagedSiemSoc from "@app/Managed_siem_logscale/ManagedSiemSoc"
import ManagedSiemLogScaleService from '@app/Managed_siem_logscale/ManagedSiemLogScaleService';
import EnterpriseLanding from '@app/Enterprise/EnterpriseLanding';
import MidMarketEnterPrice from '@app/Managed_siem_logscale/MidMarketEnterPrice';
import MspPartnerProgramAi from '@app/Managed_siem_logscale/MspPartnerProgramAi';
import MspLaunchpad from '@app/Corrected MSP Partner Program/MspLaunchpad';
import Tier1Landing from '@app/Corrected MSP Partner Program/Tier1Landing';
import Tier3PartnerPortal from '@app/Corrected MSP Partner Program/Tier3PartnerPortal';
import Dashbord from '@app/DashBord/Page/Dashbord';
import SMB from '@app/DashBord/Page/SMB';
import MspPricingTool from '@app/Pricing-tool/MspPricingTool';
import PricingTool from '@app/Pricing-tool/PricingTool';
import ThreatremediateEssentail from '@app/Theatremediate/ThreatremediateEssentail';
import ThreatremediateRemotePricing from '@app/Theatremediate/ThreatremediateRemotePricing';
import ThreadRemediateRemoteNoPricing from '@app/Theatremediate/ThreadRemediateRemoteNoPricing';
import ThreatreMediateManagedXdr from '@app/Theatremediate/ThreatreMediateManagedXdr';
import AccessRequest from '@app/Vijilan/AccessRequest';
import FixedVijilanPortal from '@app/Vijilan/FixedVijilanPortal';
import WhyVijilanPage from '@app/Vijilan/WhyVijilanPage';
import BecomeAPartner from '@app/MsgPartner/BecomeAPartner';
import Success_study_case from '@app/DashBord/Page/Success_study_case';
import Resilience_case from '@app/DashBord/Page/Resilience_case';
import Federal_cmmc_case from '@app/DashBord/Page/Federal_cmmc_case';
import Financial_Compliance_Case from '@app/DashBord/Page/Financial_Compliance_Case';
import MSP_logscale_case from '@app/DashBord/Page/MSP_logscale_case';
import SMB_Runsomware from '@app/DashBord/Page/SMB_Runsomware';
import HealthCare_Complain_case from '@app/DashBord/Page/HealthCare_Complain_case';
import MSP_growth_case from '@app/DashBord/Page/MSP_growth_case';
import Serve from '@app/Sarve/Serve';
import VideosLibrary from '@app/privacy/VideosLibrary';
import RequestDemoVijilan from '@app/privacy/RequestDemoVijilan';
import PodcastSecurity from '@app/privacy/PodcastSecurity';
import PrivacyPolicy from '@app/privacy/PrivacyPolicy';
import TermCondition from '@app/privacy/TermCondition';
import InformationSecurity from '@app/privacy/InformationSecurity';
import EventPage from '@app/privacy/EventPage';
import PricingPage from '@app/privacy/PricingPage';
import CookiePrivacy from '@app/privacy/CookiePrivacy';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // responsive done #complete   l
                path: "/",
                element: <Home />,
            },
            {
                // responsive complete #complete   l
                path: "blog-landing",
                element: <AllBlog />,
            },
            {   // #complete   l
                path: "about", 
                element: <About />,
            },
            {
                // responsive done #complete l
                path: "blog",
                element: <Blog />,
            },
            {
                // responsive done #complete l
                path: "serve",
                element: <Serve />,
            },
            {
                // responsive done #complete l
                path: "resources",
                element: <Resources />,
            },
            {
                // responsive done //complete l
                path: "visilan-msg-partner", 
                element: <VisilanPartner />,
            },
            {
                // responsive done //complete  l
                path: "threat-respond-service",
                element: <ThreatResponse />,
            },
            {
                // responsive done l
                path: "threat-respond-service-2",
                element: <ThreatResponse2 />,
            },
            {
                // responsive done l
                path: "vijilan-vars-consultants-page",
                element: <Vars_consultants_page />,
            },
            {
                // responsive done l
                path: "visilan-professional-service",
                element: <VisislanProfessional />,
            },
            {
                // responsive done l
                path: "case-studies",
                element: <CaseStudies />,
            },
            {

                // responsive done 
                path: "automation-case-studies",
                element: <AutomationCaseStudies />,
            },
            {

                // responsive done //->complete
                path: "automation-focused",
                element: <Automation_Focused />,
            },
            {

                // responsive done l
                path: "complain-solution",
                element: <Complain_Solution />,
            },
            {

                // responsive done  l
                path: "corrected-msp",
                element: <Corrected_MSP_Program />,
            },
            {
                // responsive done //->complete l
                path: "distribution-partner",
                element: <DistributionPartner />,
            },
            {
                // responsive done l
                path: "managed-automation",
                element: <ManagedAutomation />,
            },
            {
                // responsive done //->complete  l
                path: "platform-technology",
                element: <PlatformTechnology />,
            },
            {
                // responsive done  l
                path: "managed-siem-soc", 
                element: <ManagedSiemSoc />
            },
            {
                // responsive done  l
                path: "managed-siem-logscale-service",
                element: <ManagedSiemLogScaleService />
            },
            {
                // responsive done //->complete//done
                path: "enterprise-landing",
                element: <EnterpriseLanding />
            },
            {

                // responsive done  l
                path: "mid-market-enterprice",
                element: <MidMarketEnterPrice />
            },
            {
                // responsive done  l
                path: "msp-partner-program-ai",
                element: <MspPartnerProgramAi />
            },
            {
                // responsive done #complete l//done
                path: "msp-launchpad",
                element: <MspLaunchpad />
            },
            {
                // responsive done  l//done
                path: "tier-landing",
                element: <Tier1Landing />
            },
            {
                // responsive done #complete l
                path: "tier3-partner-portal",
                element: <Tier3PartnerPortal />
            },

            {
                // responsive done #complete
                path: "dashbord",
                element: <Dashbord />
            },
            {
                // responsive done #complete l//done
                path: "var-success-case-study",
                element: <Success_study_case />
            },
            {
                // responsive done #complete//done
                path: "resilience-case",
                element: <Resilience_case />
            },

            {
                // responsive done #complete//done
                path: "federal-cmmc-case",
                element: <Federal_cmmc_case />
            },
            {
                // responsive done #complete//done
                path: "financial-complianc-case",
                element: <Financial_Compliance_Case />
            },
            {
                // responsive done #complete   l
                path: "msp-ogscale-case-study",
                element: <MSP_logscale_case />
            },
            {
                // responsive done #complete//done
                path: "smb-runsomware-case-study",
                element: <SMB_Runsomware />
            },
            {
                // responsive done #complete//done
                path: "health-compliance",
                element: <HealthCare_Complain_case />
            },
            {
                // responsive done #kaj kora lagbe l//done
                path: "msp-growth-case",
                element: <MSP_growth_case />
            },
            {
                // responsive done #complete l
                path: "smb",
                element: <SMB />
            },
            {

                // responsive done #complete l//->vector icon hidden check
                path: "contact",
                element: <MspPricingTool />
            },
            {

                // responsive done #complete//done->1st section width check
                path: "pricing-tool",
                element: <PricingTool />
            },
            {

                // responsive done #complete l//done
                path: "threatremediate-essentail",
                element: <ThreatremediateEssentail />
            },
            {

                // responsive done #complete l//done
                path: "threatremediate-remote-pricing",
                element: <ThreatremediateRemotePricing />
            },
            {

                // responsive done #complete l//done
                path: "threatremediate-remote-no-pricing",
                element: <ThreadRemediateRemoteNoPricing />
            },
            {

                // responsive done #card thikh kora lagbe l//done
                path: "threatremediate-managed-xdr",
                element: <ThreatreMediateManagedXdr />
            },
            {

                // responsive done #complete l
                path: "access-request",
                element: <AccessRequest />
            },
            {

                // responsive done #complete
                path: "fixed-vijilan-portal",
                element: <FixedVijilanPortal />
            },
            {

                // responsive done #compelte
                path: "why-vijilan-page",
                element: <WhyVijilanPage />
            },
            {

                // responsive done #complete   l
                path: "become-a-partner",
                element: <BecomeAPartner />
            },
            {
                path:"videos-library",
                element: <VideosLibrary />
            },
            {
                path:"request-demo",
                element:<RequestDemoVijilan />
            },
            {
                path:"podcast-security",
                element:<PodcastSecurity />
            },
            {
                path:"privacy-policy",
                element:<PrivacyPolicy />
            },
            {
                path:"term-condition",
                element:<TermCondition />
            },
            {
                path:"information-security",
                element:<InformationSecurity />
            },
            {
                path:"event-page",
                element:<EventPage/>
            },
            {
                path:"pricing-page",
                element:<PricingPage/>
            },
            {
                path:"cookie-privacy",
                element:<CookiePrivacy/>
            }
        ],
    },
]);

export default router;