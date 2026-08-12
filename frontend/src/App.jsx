import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MouseBackground from './components/MouseBackground';

const AboutUsOurStoryBooknest = lazy(() => import('./pages/AboutUsOurStoryBooknest'));
const AdminDashboardBooknestCommandCenter = lazy(() => import('./pages/AdminDashboardBooknestCommandCenter'));
const AuthorManagementBooknestAdminArchive = lazy(() => import('./pages/AuthorManagementBooknestAdminArchive'));
const BannerManagementStudio = lazy(() => import('./pages/BannerManagementStudio'));
const BeginYourArchive = lazy(() => import('./pages/BeginYourArchive'));
const BlogManagementBooknestPublishingRoom = lazy(() => import('./pages/BlogManagementBooknestPublishingRoom'));
const BlogStoriesInspiration = lazy(() => import('./pages/BlogStoriesInspiration'));
const BookCollectionManagementAdminArchive = lazy(() => import('./pages/BookCollectionManagementAdminArchive'));
const BrowseCollections = lazy(() => import('./pages/BrowseCollections'));
const CatalogArchive = lazy(() => import('./pages/CatalogArchive'));
const CategoriesExploration = lazy(() => import('./pages/CategoriesExploration'));
const NewArrivals = lazy(() => import('./pages/NewArrivals'));
const BestSellers = lazy(() => import('./pages/BestSellers'));
const CategoryManagementBooknestAdmin = lazy(() => import('./pages/CategoryManagementBooknestAdmin'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ConnectWithTheArchive = lazy(() => import('./pages/ConnectWithTheArchive'));
const ContactMessagesBooknestAdminArchive = lazy(() => import('./pages/ContactMessagesBooknestAdminArchive'));
const Contact = lazy(() => import('./pages/Contact'));
const CreateAccountBooknest = lazy(() => import('./pages/CreateAccountBooknest'));
const ForgotPasswordBooknest = lazy(() => import('./pages/ForgotPasswordBooknest'));
const CustomerDashboardMyPersonalBookshelf = lazy(() => import('./pages/CustomerDashboardMyPersonalBookshelf'));
const CustomerManagementBooknestAdminDirectory = lazy(() => import('./pages/CustomerManagementBooknestAdminDirectory'));
const CustomerRelationshipArchive = lazy(() => import('./pages/CustomerRelationshipArchive'));
const EditorialManagementArchive = lazy(() => import('./pages/EditorialManagementArchive'));
const FaqBooknestSupport = lazy(() => import('./pages/FaqBooknestSupport'));
const Homepage = lazy(() => import('./pages/Homepage'));
const InventoryManagementBooknestAdminControl = lazy(() => import('./pages/InventoryManagementBooknestAdminControl'));
const LibraryDiscoverySearchResults = lazy(() => import('./pages/LibraryDiscoverySearchResults'));
const LibraryManagementArchive = lazy(() => import('./pages/LibraryManagementArchive'));
const LoginBooknestPrivateLibrary = lazy(() => import('./pages/LoginBooknestPrivateLibrary'));
const ManageBookCategories = lazy(() => import('./pages/ManageBookCategories'));
const MyReadingShelfBooknestWishlist = lazy(() => import('./pages/MyReadingShelfBooknestWishlist'));
const MySavedCollection = lazy(() => import('./pages/MySavedCollection'));
const OrderManagementArchive = lazy(() => import('./pages/OrderManagementArchive'));
const OrderTrackingBooknestPrivateLibrary = lazy(() => import('./pages/OrderTrackingBooknestPrivateLibrary'));
const PaymentConfigurationArchive = lazy(() => import('./pages/PaymentConfigurationArchive'));
const PremiumBookDetails = lazy(() => import('./pages/PremiumBookDetails'));
const PremiumDigitalLibrary = lazy(() => import('./pages/PremiumDigitalLibrary'));
const PrivacyPolicyArchive = lazy(() => import('./pages/PrivacyPolicyArchive'));
const PrivateLibraryAccess = lazy(() => import('./pages/PrivateLibraryAccess'));
const PromotionManagementBooknestAdminArchive = lazy(() => import('./pages/PromotionManagementBooknestAdminArchive'));
const PublisherManagementBooknestAdminArchive = lazy(() => import('./pages/PublisherManagementBooknestAdminArchive'));
const ReaderBehaviorInsights = lazy(() => import('./pages/ReaderBehaviorInsights'));
const ReaderCommandCenter = lazy(() => import('./pages/ReaderCommandCenter'));
const ReviewsModerationBooknestAdminArchive = lazy(() => import('./pages/ReviewsModerationBooknestAdminArchive'));
const SalesIntelligenceLedger = lazy(() => import('./pages/SalesIntelligenceLedger'));
const SearchResultsBooknest = lazy(() => import('./pages/SearchResultsBooknest'));
const Shader = lazy(() => import('./pages/Shader'));
const ShippingReturnsArchive = lazy(() => import('./pages/ShippingReturnsArchive'));
const ShippingSettingsArchive = lazy(() => import('./pages/ShippingSettingsArchive'));
const ShopBrowseBooks = lazy(() => import('./pages/ShopBrowseBooks'));
const ShoppingCartYourBookCollection = lazy(() => import('./pages/ShoppingCartYourBookCollection'));
const StaffManagementArchive1 = lazy(() => import('./pages/StaffManagementArchive1'));
const StaffManagementArchive2 = lazy(() => import('./pages/StaffManagementArchive2'));
const TermsConditionsBooknestPrivateLibrary = lazy(() => import('./pages/TermsConditionsBooknestPrivateLibrary'));
const TheArtOfTheArchive = lazy(() => import('./pages/TheArtOfTheArchive'));
const ThreeJS1 = lazy(() => import('./pages/Three.js1'));
const ThreeJS2 = lazy(() => import('./pages/Three.js2'));
const ThreeJS3 = lazy(() => import('./pages/Three.js3'));
const ThreeJS4 = lazy(() => import('./pages/Three.js4'));
const ThreeJS5 = lazy(() => import('./pages/Three.js5'));
const Three = lazy(() => import('./pages/Three'));
const TrackYourJourney = lazy(() => import('./pages/TrackYourJourney'));
const YourOrdersBooknestHistory = lazy(() => import('./pages/YourOrdersBooknestHistory'));
const YourReadingArchive = lazy(() => import('./pages/YourReadingArchive'));
const YourReadingSelection = lazy(() => import('./pages/YourReadingSelection'));

function App() {
  return (
    <Router>
      <MouseBackground />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutusourstorybooknest" element={<AboutUsOurStoryBooknest />} />
          <Route path="/beginyourarchive" element={<BeginYourArchive />} />
          <Route path="/blogstoriesinspiration" element={<BlogStoriesInspiration />} />
          <Route path="/browsecollections" element={<BrowseCollections />} />
          <Route path="/catalogarchive" element={<CatalogArchive />} />
          <Route path="/categoriesexploration" element={<CategoriesExploration />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/connectwiththearchive" element={<ConnectWithTheArchive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createaccountbooknest" element={<CreateAccountBooknest />} />
          <Route path="/forgotpasswordbooknest" element={<ForgotPasswordBooknest />} />
          <Route path="/faqbooknestsupport" element={<FaqBooknestSupport />} />
          <Route path="/librarydiscoverysearchresults" element={<LibraryDiscoverySearchResults />} />
          <Route path="/loginbooknestprivatelibrary" element={<LoginBooknestPrivateLibrary />} />
          <Route path="/managebookcategories" element={<ManageBookCategories />} />
          <Route path="/premiumbookdetails" element={<PremiumBookDetails />} />
          <Route path="/premiumdigitallibrary" element={<PremiumDigitalLibrary />} />
          <Route path="/privacypolicyarchive" element={<PrivacyPolicyArchive />} />
          <Route path="/privatelibraryaccess" element={<PrivateLibraryAccess />} />
          <Route path="/searchresultsbooknest" element={<SearchResultsBooknest />} />
          <Route path="/shader" element={<Shader />} />
          <Route path="/shippingreturnsarchive" element={<ShippingReturnsArchive />} />
          <Route path="/shopbrowsebooks" element={<ShopBrowseBooks />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/bestsellers" element={<BestSellers />} />
          <Route path="/shoppingcartyourbookcollection" element={<ShoppingCartYourBookCollection />} />
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
            <Route path="admindashboardbooknestcommandcenter" element={<AdminDashboardBooknestCommandCenter />} />
            <Route path="authormanagementbooknestadminarchive" element={<AuthorManagementBooknestAdminArchive />} />
            <Route path="bannermanagementstudio" element={<BannerManagementStudio />} />
            <Route path="blogmanagementbooknestpublishingroom" element={<BlogManagementBooknestPublishingRoom />} />
            <Route path="bookcollectionmanagementadminarchive" element={<BookCollectionManagementAdminArchive />} />
            <Route path="categorymanagementbooknestadmin" element={<CategoryManagementBooknestAdmin />} />
            <Route path="contactmessagesbooknestadminarchive" element={<ContactMessagesBooknestAdminArchive />} />
            <Route path="customermanagementbooknestadmindirectory" element={<CustomerManagementBooknestAdminDirectory />} />
            <Route path="customerrelationshiparchive" element={<CustomerRelationshipArchive />} />
            <Route path="editorialmanagementarchive" element={<EditorialManagementArchive />} />
            <Route path="inventorymanagementbooknestadmincontrol" element={<InventoryManagementBooknestAdminControl />} />
            <Route path="librarymanagementarchive" element={<LibraryManagementArchive />} />
            <Route path="ordermanagementarchive" element={<OrderManagementArchive />} />
            <Route path="paymentconfigurationarchive" element={<PaymentConfigurationArchive />} />
            <Route path="promotionmanagementbooknestadminarchive" element={<PromotionManagementBooknestAdminArchive />} />
            <Route path="publishermanagementbooknestadminarchive" element={<PublisherManagementBooknestAdminArchive />} />
            <Route path="readerbehaviorinsights" element={<ReaderBehaviorInsights />} />
            <Route path="reviewsmoderationbooknestadminarchive" element={<ReviewsModerationBooknestAdminArchive />} />
            <Route path="salesintelligenceledger" element={<SalesIntelligenceLedger />} />
            <Route path="shippingsettingsarchive" element={<ShippingSettingsArchive />} />
            <Route path="staffmanagementarchive1" element={<StaffManagementArchive1 />} />
            <Route path="staffmanagementarchive2" element={<StaffManagementArchive2 />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
