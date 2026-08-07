import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsOurStoryBooknest from './pages/AboutUsOurStoryBooknest';
import AdminCommandCenter from './pages/AdminCommandCenter';
import AdminDashboardBooknestCommandCenter from './pages/AdminDashboardBooknestCommandCenter';
import AuthorArchiveManagement from './pages/AuthorArchiveManagement';
import AuthorManagementBooknestAdminArchive from './pages/AuthorManagementBooknestAdminArchive';
import BannerManagementStudio from './pages/BannerManagementStudio';
import BeginYourArchive from './pages/BeginYourArchive';
import BlogManagementBooknestPublishingRoom from './pages/BlogManagementBooknestPublishingRoom';
import BlogStoriesInspiration from './pages/BlogStoriesInspiration';
import BookCollectionManagement from './pages/BookCollectionManagement';
import BookCollectionManagementAdminArchive from './pages/BookCollectionManagementAdminArchive';
import BrowseCollections from './pages/BrowseCollections';
import CatalogArchive from './pages/CatalogArchive';
import CategoriesExploration from './pages/CategoriesExploration';
import CategoryManagementBooknestAdmin from './pages/CategoryManagementBooknestAdmin';
import Checkout from './pages/Checkout';
import ConnectWithTheArchive from './pages/ConnectWithTheArchive';
import ContactMessagesBooknestAdminArchive from './pages/ContactMessagesBooknestAdminArchive';
import ContactUsBooknestSupport from './pages/ContactUsBooknestSupport';
import CreateAccountBooknest from './pages/CreateAccountBooknest';
import CustomerDashboardMyPersonalBookshelf from './pages/CustomerDashboardMyPersonalBookshelf';
import CustomerManagementBooknestAdminDirectory from './pages/CustomerManagementBooknestAdminDirectory';
import CustomerRelationshipArchive from './pages/CustomerRelationshipArchive';
import EditorialManagementArchive from './pages/EditorialManagementArchive';
import FaqBooknestSupport from './pages/FaqBooknestSupport';
import Homepage from './pages/Homepage';
import InventoryControlCenter from './pages/InventoryControlCenter';
import InventoryManagementBooknestAdminControl from './pages/InventoryManagementBooknestAdminControl';
import KnowledgeArchiveFaqs from './pages/KnowledgeArchiveFaqs';
import LibraryDiscoverySearchResults from './pages/LibraryDiscoverySearchResults';
import LibraryManagementArchive from './pages/LibraryManagementArchive';
import LoginBooknestPrivateLibrary from './pages/LoginBooknestPrivateLibrary';
import ManageBookCategories from './pages/ManageBookCategories';
import MyReadingShelfBooknestWishlist from './pages/MyReadingShelfBooknestWishlist';
import MySavedCollection from './pages/MySavedCollection';
import OrderManagementArchive from './pages/OrderManagementArchive';
import OrderManagementBooknestAdminArchive from './pages/OrderManagementBooknestAdminArchive';
import OrderTrackingBooknestPrivateLibrary from './pages/OrderTrackingBooknestPrivateLibrary';
import OurStoryArchive from './pages/OurStoryArchive';
import PaymentConfigurationArchive from './pages/PaymentConfigurationArchive';
import PremiumBookDetails from './pages/PremiumBookDetails';
import PremiumDigitalLibrary from './pages/PremiumDigitalLibrary';
import PrivacyPolicyArchive from './pages/PrivacyPolicyArchive';
import PrivacyPolicyBooknestPrivateLibrary from './pages/PrivacyPolicyBooknestPrivateLibrary';
import PrivateLibraryAccess from './pages/PrivateLibraryAccess';
import ProductDetailsTheMidnightLibrary from './pages/ProductDetailsTheMidnightLibrary';
import PromotionCouponArchive from './pages/PromotionCouponArchive';
import PromotionManagementBooknestAdminArchive from './pages/PromotionManagementBooknestAdminArchive';
import PublisherManagementArchive from './pages/PublisherManagementArchive';
import PublisherManagementBooknestAdminArchive from './pages/PublisherManagementBooknestAdminArchive';
import ReaderBehaviorInsights from './pages/ReaderBehaviorInsights';
import ReaderCommandCenter from './pages/ReaderCommandCenter';
import ReviewsModerationBooknestAdminArchive from './pages/ReviewsModerationBooknestAdminArchive';
import SalesIntelligenceLedger from './pages/SalesIntelligenceLedger';
import SalesReportsAnalyticsBooknestBusinessIntelligence from './pages/SalesReportsAnalyticsBooknestBusinessIntelligence';
import SearchResultsBooknest from './pages/SearchResultsBooknest';
import SecureCheckoutArchive from './pages/SecureCheckoutArchive';
import Shader from './pages/Shader';
import ShippingReturnsArchive from './pages/ShippingReturnsArchive';
import ShippingReturnsBooknestGuide from './pages/ShippingReturnsBooknestGuide';
import ShippingSettingsArchive from './pages/ShippingSettingsArchive';
import ShopBrowseBooks from './pages/ShopBrowseBooks';
import ShoppingCartYourBookCollection from './pages/ShoppingCartYourBookCollection';
import StaffManagementArchive1 from './pages/StaffManagementArchive1';
import StaffManagementArchive2 from './pages/StaffManagementArchive2';
import StoriesFromTheBookshelf from './pages/StoriesFromTheBookshelf';
import TermsConditionsArchive from './pages/TermsConditionsArchive';
import TermsConditionsBooknestPrivateLibrary from './pages/TermsConditionsBooknestPrivateLibrary';
import TheArtOfTheArchive from './pages/TheArtOfTheArchive';
import ThreeJS1 from './pages/Three.js1';
import ThreeJS2 from './pages/Three.js2';
import ThreeJS3 from './pages/Three.js3';
import ThreeJS4 from './pages/Three.js4';
import ThreeJS5 from './pages/Three.js5';
import Three from './pages/Three';
import TrackYourJourney from './pages/TrackYourJourney';
import YourOrdersBooknestHistory from './pages/YourOrdersBooknestHistory';
import YourReadingArchive from './pages/YourReadingArchive';
import YourReadingSelection from './pages/YourReadingSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutusourstorybooknest" element={<AboutUsOurStoryBooknest />} />
        <Route path="/beginyourarchive" element={<BeginYourArchive />} />
        <Route path="/blogstoriesinspiration" element={<BlogStoriesInspiration />} />
        <Route path="/browsecollections" element={<BrowseCollections />} />
        <Route path="/catalogarchive" element={<CatalogArchive />} />
        <Route path="/categoriesexploration" element={<CategoriesExploration />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/connectwiththearchive" element={<ConnectWithTheArchive />} />
        <Route path="/contactusbooknestsupport" element={<ContactUsBooknestSupport />} />
        <Route path="/createaccountbooknest" element={<CreateAccountBooknest />} />
        <Route path="/faqbooknestsupport" element={<FaqBooknestSupport />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/knowledgearchivefaqs" element={<KnowledgeArchiveFaqs />} />
        <Route path="/librarydiscoverysearchresults" element={<LibraryDiscoverySearchResults />} />
        <Route path="/loginbooknestprivatelibrary" element={<LoginBooknestPrivateLibrary />} />
        <Route path="/managebookcategories" element={<ManageBookCategories />} />
        <Route path="/ourstoryarchive" element={<OurStoryArchive />} />
        <Route path="/premiumbookdetails" element={<PremiumBookDetails />} />
        <Route path="/premiumdigitallibrary" element={<PremiumDigitalLibrary />} />
        <Route path="/privacypolicyarchive" element={<PrivacyPolicyArchive />} />
        <Route path="/privacypolicybooknestprivatelibrary" element={<PrivacyPolicyBooknestPrivateLibrary />} />
        <Route path="/privatelibraryaccess" element={<PrivateLibraryAccess />} />
        <Route path="/productdetailsthemidnightlibrary" element={<ProductDetailsTheMidnightLibrary />} />
        <Route path="/searchresultsbooknest" element={<SearchResultsBooknest />} />
        <Route path="/securecheckoutarchive" element={<SecureCheckoutArchive />} />
        <Route path="/shader" element={<Shader />} />
        <Route path="/shippingreturnsarchive" element={<ShippingReturnsArchive />} />
        <Route path="/shippingreturnsbooknestguide" element={<ShippingReturnsBooknestGuide />} />
        <Route path="/shopbrowsebooks" element={<ShopBrowseBooks />} />
        <Route path="/shoppingcartyourbookcollection" element={<ShoppingCartYourBookCollection />} />
        <Route path="/storiesfromthebookshelf" element={<StoriesFromTheBookshelf />} />
        <Route path="/termsconditionsarchive" element={<TermsConditionsArchive />} />
        <Route path="/termsconditionsbooknestprivatelibrary" element={<TermsConditionsBooknestPrivateLibrary />} />
        <Route path="/theartofthearchive" element={<TheArtOfTheArchive />} />
        <Route path="/three.js1" element={<ThreeJS1 />} />
        <Route path="/three.js2" element={<ThreeJS2 />} />
        <Route path="/three.js3" element={<ThreeJS3 />} />
        <Route path="/three.js4" element={<ThreeJS4 />} />
        <Route path="/three.js5" element={<ThreeJS5 />} />
        <Route path="/three" element={<Three />} />
        <Route path="/dashboard">
          <Route path="customerdashboardmypersonalbookshelf" element={<CustomerDashboardMyPersonalBookshelf />} />
          <Route path="myreadingshelfbooknestwishlist" element={<MyReadingShelfBooknestWishlist />} />
          <Route path="mysavedcollection" element={<MySavedCollection />} />
          <Route path="ordertrackingbooknestprivatelibrary" element={<OrderTrackingBooknestPrivateLibrary />} />
          <Route path="readercommandcenter" element={<ReaderCommandCenter />} />
          <Route path="trackyourjourney" element={<TrackYourJourney />} />
          <Route path="yourordersbooknesthistory" element={<YourOrdersBooknestHistory />} />
          <Route path="yourreadingarchive" element={<YourReadingArchive />} />
          <Route path="yourreadingselection" element={<YourReadingSelection />} />
        </Route>
        <Route path="/admin">
          <Route path="admincommandcenter" element={<AdminCommandCenter />} />
          <Route path="admindashboardbooknestcommandcenter" element={<AdminDashboardBooknestCommandCenter />} />
          <Route path="authorarchivemanagement" element={<AuthorArchiveManagement />} />
          <Route path="authormanagementbooknestadminarchive" element={<AuthorManagementBooknestAdminArchive />} />
          <Route path="bannermanagementstudio" element={<BannerManagementStudio />} />
          <Route path="blogmanagementbooknestpublishingroom" element={<BlogManagementBooknestPublishingRoom />} />
          <Route path="bookcollectionmanagement" element={<BookCollectionManagement />} />
          <Route path="bookcollectionmanagementadminarchive" element={<BookCollectionManagementAdminArchive />} />
          <Route path="categorymanagementbooknestadmin" element={<CategoryManagementBooknestAdmin />} />
          <Route path="contactmessagesbooknestadminarchive" element={<ContactMessagesBooknestAdminArchive />} />
          <Route path="customermanagementbooknestadmindirectory" element={<CustomerManagementBooknestAdminDirectory />} />
          <Route path="customerrelationshiparchive" element={<CustomerRelationshipArchive />} />
          <Route path="editorialmanagementarchive" element={<EditorialManagementArchive />} />
          <Route path="inventorycontrolcenter" element={<InventoryControlCenter />} />
          <Route path="inventorymanagementbooknestadmincontrol" element={<InventoryManagementBooknestAdminControl />} />
          <Route path="librarymanagementarchive" element={<LibraryManagementArchive />} />
          <Route path="ordermanagementarchive" element={<OrderManagementArchive />} />
          <Route path="ordermanagementbooknestadminarchive" element={<OrderManagementBooknestAdminArchive />} />
          <Route path="paymentconfigurationarchive" element={<PaymentConfigurationArchive />} />
          <Route path="promotioncouponarchive" element={<PromotionCouponArchive />} />
          <Route path="promotionmanagementbooknestadminarchive" element={<PromotionManagementBooknestAdminArchive />} />
          <Route path="publishermanagementarchive" element={<PublisherManagementArchive />} />
          <Route path="publishermanagementbooknestadminarchive" element={<PublisherManagementBooknestAdminArchive />} />
          <Route path="readerbehaviorinsights" element={<ReaderBehaviorInsights />} />
          <Route path="reviewsmoderationbooknestadminarchive" element={<ReviewsModerationBooknestAdminArchive />} />
          <Route path="salesintelligenceledger" element={<SalesIntelligenceLedger />} />
          <Route path="salesreportsanalyticsbooknestbusinessintelligence" element={<SalesReportsAnalyticsBooknestBusinessIntelligence />} />
          <Route path="shippingsettingsarchive" element={<ShippingSettingsArchive />} />
          <Route path="staffmanagementarchive1" element={<StaffManagementArchive1 />} />
          <Route path="staffmanagementarchive2" element={<StaffManagementArchive2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
