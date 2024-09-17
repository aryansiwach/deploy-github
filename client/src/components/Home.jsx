import axios from "axios";
import "../App.css";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import MenuIcon from "@rsuite/icons/Menu";
import PageIcon from "@rsuite/icons/Page";
import DetailIcon from "@rsuite/icons/Detail";
import GearIcon from "@rsuite/icons/Gear";
import ExitIcon from "@rsuite/icons/Exit";
import reactLogo from "./reactLogo.png";
import { PDFDocument, rgb, StandardFonts, PDFName, PDFString } from "pdf-lib";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const StyledDiv = styled.div`
  
  display: flex;
  flex-direction: column; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

  const [drywallVendors, setDrywallVendors] = useState([
    {
      name: "USG",
      subVendors: [
        {
          name: " Sustainable Panels",
          products: [
            {
              name: "Sheetrock® Brand EcoSmart Panels Firecode 30®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-firecode-30-submittal-en-usa-WB2858.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-firecode-x-submittal-en-usa-WB2859.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Mold Tough® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-mold-tough-firecode-x-submittal-sheet-en-WB2981.pdf",
            },
          ],
        },

        {
          name: "Lightweight Drywall Panels",
          products: [
            {
              name: "Sheetrock® Brand EcoSmart Panels Firecode 30®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-firecode-30-submittal-en-usa-WB2858.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-firecode-x-submittal-en-usa-WB2859.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Mold Tough® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-mold-tough-firecode-x-submittal-sheet-en-WB2981.pdf",
            },
            {
              name: "Sheetrock® Brand UltraLight Gypsum Base Imperial®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-mold-tough-firecode-x-submittal-sheet-en-WB2981.pdf",
            },
            {
              name: "Sheetrock® Brand UltraLight Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-ultralight-panels-submittal-en-wb2501.pdf",
            },
            {
              name: "Sheetrock® Brand UltraLight Panels Mold Tough®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-ultralight-mold-tough-panels-submittal-en-WB2660.pdf",
            },
          ],
        },
        {
          name: "Regular Panels",
          products: [
            {
              name: "Sheetrock® Brand Flexible Gypsum Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-quarter-inch-flexible-submittal-WB2128.pdf",
            },
            {
              name: "Sheetrock® Brand Gypsum Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-regular-submittal-WB1473.pdf",
            },
          ],
        },
        {
          name: "Fire-Resistant Drywall Panels",
          products: [
            {
              name: "Sheetrock® Brand AR Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-ar-regular-firecode-core-submittal-WB2133.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Firecode 30®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-firecode-30-submittal-en-usa-WB2858.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-firecode-x-submittal-en-usa-WB2859.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Mold Tough® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-mold-tough-firecode-x-submittal-sheet-en-WB2981.pdf",
            },
            {
              name: "Sheetrock® Brand Firecode® C Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-firecode-c-panels-submittal-en-usa-WB2965.pdf",
            },
            {
              name: "Sheetrock® Brand Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-firecode-x-panels-submittal-en-usa-WB2964.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Liner Panels Mold Tough®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-glass-mat-liner-panels-submittal-WB2483.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® AR Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-ar-firecode-x-submittal-WB2750.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-glass-mat-mold-tough-firecode-x-submittal-en-WB2560.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® VHI Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-vhi-firecode-x-submittal-WB2749.pdf",
            },
            {
              name: "Sheetrock® Brand Gypsum Base Imperial® Firecode® C",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-gypsum-base-firecode-firecodeccore-submittal-P790.pdf",
            },
            {
              name: "Sheetrock® Brand Gypsum Base Imperial® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-regular-submittal-WB1473.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® AR Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-mold-tough-ar-firecode-x-submittal-en-usa-WB2391.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Gypsum Liner Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-liner-panels-mold-tough-submittal-WB2389.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Panels Firecode® C",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-mold-tough-panels-firecode-c-submittal-en-WB5094.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Panels Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-mold-tough-firecode-x-panels-submittal-WB2390.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Ultracode® Core Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-mold-tough-ultracode-core-submittal-WB2388.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® VHI Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panles-mold-tough-vhi-firecode-core-submittal-en-WB2529.pdf",
            },
            {
              name: "Sheetrock® Brand Ultracode® Core Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-ultracode-core-gypsum-panels-submittal-WB2167B.pdf",
            },
            {
              name: "Durock™ Brand Glass-Mat Tile Backerboard",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/durock-glass-mat-tile-backerboard-submittal-en-CB691.pdf",
            },
            {
              name: "Fiberock® Brand Aqua-Tough™ AR Interior Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberock-interior-panel-aquatough-submittal-F134.pdf",
            },
            {
              name: "Fiberock® Brand AR Interior Panels (Regular and Type X)",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberock-panels-abuse-resistant-submittal-F102.pdf",
            },
          ],
        },
        {
          name: "Mold-Resistant Drywall Panels",
          products: [
            {
              name: "Sheetrock® Brand EcoSmart Panels Mold Tough® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-mold-tough-firecode-x-submittal-sheet-en-WB2981.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Liner Panels Mold Tough®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-glass-mat-mold-tough-firecode-x-submittal-en-WB2560.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® AR Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-ar-firecode-x-submittal-WB2750.pdf",
            },
            {
              name: "Sheetrock® Brand EcoSmart Panels Mold Tough® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ecosmart-panels-mold-tough-firecode-x-submittal-sheet-en-WB2981.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® VHI Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-vhi-firecode-x-submittal-WB2749.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® AR Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-mold-tough-ar-firecode-x-submittal-en-usa-WB2391.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Liner Panels Mold Tough®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-glass-mat-liner-panels-submittal-WB2483.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® AR Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-ar-firecode-x-submittal-WB2750.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Gypsum Liner Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-liner-panels-mold-tough-submittal-WB2389.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Panels Firecode® C",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-mold-tough-panels-firecode-c-submittal-en-WB5094.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Panels Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-mold-tough-firecode-x-panels-submittal-WB2390.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Ultracode® Core Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-mold-tough-ultracode-core-submittal-WB2388.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® VHI Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panles-mold-tough-vhi-firecode-core-submittal-en-WB2529.pdf",
            },
            {
              name: "Sheetrock® Brand UltraLight Panels Mold Tough®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-ultralight-mold-tough-panels-submittal-en-WB2660.pdf",
            },
            {
              name: "Fiberock® Brand Aqua-Tough™ AR Interior Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberock-interior-panel-aquatough-submittal-F134.pdf",
            },
          ],
        },
        {
          name: "Abuse-Resistant Drywall Panels",
          products: [
            {
              name: "Sheetrock® Brand AR Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-ar-regular-firecode-core-submittal-WB2133.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® AR Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-ar-firecode-x-submittal-WB2750.pdf",
            },
            {
              name: "Sheetrock® Brand Glass-Mat Panels Mold Tough® VHI Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-brand-glass-mat-panels-mold-tough-vhi-firecode-x-submittal-WB2749.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® AR Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-mold-tough-ar-firecode-x-submittal-en-usa-WB2391.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® VHI Firecode® X Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panles-mold-tough-vhi-firecode-core-submittal-en-WB2529.pdf",
            },
            {
              name: "Fiberock® Brand Aqua-Tough™ AR Interior Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberock-interior-panel-aquatough-submittal-F134.pdf",
            },
            {
              name: "Fiberock® Brand AR Interior Panels (Regular and Type X)",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberock-panels-abuse-resistant-submittal-F102.pdf",
            },
          ],
        },

        {
          name: "Plaster-Base Panels",
          products: [
            {
              name: "Sheetrock® Brand Gypsum Base Imperial®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-gypsum-base-regular-core-foil-back-P782.pdf",
            },
            {
              name: "Sheetrock® Brand Gypsum Base Imperial® Firecode® C",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-gypsum-base-firecode-firecodeccore-submittal-P790.pdf",
            },
            {
              name: "Sheetrock® Brand Gypsum Base Imperial® Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-gypsum-base-firecode-firecodeccore-submittal-P790.pdf",
            },
            {
              name: "Sheetrock® Brand UltraLight Gypsum Base Imperial®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/WB2713-usg-sheetrock-ultralight-imperial-submittal.pdf",
            },
          ],
        },
        {
          name: "Liner Panels",
          products: [
            {
              name: "Sheetrock® Brand Glass-Mat Liner Panels Mold Tough®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-glass-mat-liner-panels-submittal-WB2483.pdf",
            },
            {
              name: "Sheetrock® Brand Mold Tough® Gypsum Liner Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-liner-panels-mold-tough-submittal-WB2389.pdf",
            },
          ],
        },
        {
          name: "Tile Backerboard",
          products: [
            {
              name: "Durock® Brand Cement Board with EdgeGuard™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-durock-cement-board-with-edgeguard-submittal-en-CB321618.pdf",
            },
            {
              name: "Durock™ Brand Glass-Mat Tile Backerboard",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/durock-glass-mat-tile-backerboard-submittal-en-CB691.pdf",
            },
            {
              name: "Fiberock® Brand Tile Backerboard",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-fiberock-tilebacker-underlayment-submittal-en-f327325.pdf",
            },
            {
              name: "Fiberock® Brand Underlayment",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-fiberock-tilebacker-underlayment-submittal-en-f327325.pdf",
            },
          ],
        },
        {
          name: "Manufactured Housing Panels",
          products: [
            {
              name: "Sheetrock® Brand MH Gypsum Base Board Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-mh-gypsum-base-board-firecode-x-submittal-en-wb5402.pdf",
            },
            {
              name: "Sheetrock® Brand MH Gypsum Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/durock-glass-mat-tile-backerboard-submittal-en-CB691.pdf",
            },
            {
              name: "Sheetrock® Brand MH UltraLight Ceiling Panels Ultra-Base™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-brand-mh-ultralight-panels-ultra-base-mh1311.pdf",
            },
            {
              name: "Sheetrock® Brand MH UltraLight Panels Tuf-Base™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-brand-mh-ultralight-panels-tuf-base-datasheet-en-mh1314.pdf",
            },
          ],
        },
        {
          name: "Wall Systems",
          products: [
            {
              name: "Area Separation Wall System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-area-separation-walls-catalog-en-SA925.pdf",
            },
            {
              name: "Cavity Shaft Wall System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-shaft-wall-systems-catalog-en-SA926.pdf",
            },
          ],
        },
        {
          name: "Conventional Weight Joint Compounds",
          products: [
            {
              name: "Sheetrock® Brand All Purpose Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-all-purpose-joint-compound-submittal-J1969.pdf",
            },
            {
              name: "Sheetrock® Brand Taping Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-taping-joint-compound-submittal-en-J60A.pdf",
            },
            {
              name: "Sheetrock® Brand Topping Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-topping-joint-compound-submittal-en-J60B.pdf",
            },
            {
              name: "Sheetrock® Brand Total™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-total-all-purpose-joint-compound-submittal-J1508.pdf",
            },
            {
              name: "Beadex® Brand All Purpose Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-beadex-all-purpose-joint-compound-submittal-en-j289958.pdf",
            },
            {
              name: "Beadex® Brand Taping Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-beadex-topping-joint-compound-submittal-en-j289952.pdf",
            },
            {
              name: "Beadex® Brand Topping Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-beadex-topping-joint-compound-submittal-en-j289946.pdf",
            },
          ],
        },
        {
          name: "Midweight Joint Compounds",
          products: [
            {
              name: "Sheetrock® Brand Midweight™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-all-purpose-joint-compound-midweight-submittal-J963.pdf",
            },
            {
              name: "Sheetrock® Brand Total™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-total-all-purpose-joint-compound-submittal-J1508.pdf",
            },
            {
              name: "Sheetrock® Brand Total™ Lite Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-total-lite-joint-compound-submittal-en-j2069.pdf",
            },
            {
              name: "Soquete™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/soquete-all-purpose-midweight-joint-compound-submittal-en-J1968.pdf",
            },
          ],
        },
        {
          name: "Lightweight Joint Compounds",
          products: [
            {
              name: "Sheetrock® Brand Dust Control Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-all-purpose-joint-compound-J1832.pdf",
            },
            {
              name: "Sheetrock® Brand Elite Finish Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-elite-finish-joint-compound-submittal-en-J5314.pdf",
            },
            {
              name: "Sheetrock® Brand Plus 3® Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-plus3-lightweight-all-purpose-joint-compound-submittal-J498A.pdf",
            },
            {
              name: "Sheetrock® Brand Taping Lite Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-taping-joint-compound-submittal-en-J974.pdf",
            },
            {
              name: "Sheetrock® Brand Total™ Lite Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-total-lite-joint-compound-submittal-en-j2069.pdf",
            },
            {
              name: "Beadex® Brand All Purpose Lite Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-brand-lite-all-purpose-joint-compound-submittal-J1648.pdf",
            },
            {
              name: "Beadex® Brand Topping Lite Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-brand-lite-topping-joint-compound-submittal-J2112.pdf",
            },
            {
              name: "Soquete™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/soquete-all-purpose-midweight-joint-compound-submittal-en-J1968.pdf",
            },
            {
              name: "Soquete™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/soquete-all-purpose-midweight-joint-compound-submittal-en-J1968.pdf",
            },
          ],
        },
        {
          name: "Ultralightweight Joint Compounds",
          products: [
            {
              name: "Sheetrock® Brand UltraLightweight Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-ultralightweight-all-purpose-joint-compound-submittal-en-J2051.pdf",
            },
          ],
        },
        {
          name: "Drying-Type Powder Joint Compounds",
          products: [
            {
              name: "Sheetrock® Brand A/P Lite™ Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lite-lightweight-all-purpose-joint-compound-data-J768.pdf",
            },
            {
              name: "Sheetrock® Brand All Purpose Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-all-purpose-joint-compound-submittal-J1969.pdf",
            },
          ],
        },
        {
          name: "Setting-Type Powder Joint Compounds",
          products: [
            {
              name: "Sheetrock® Brand Durabond® 20 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-settingtype-joint-compounds-durabond-submittal-J17A.pdf",
            },
            {
              name: "Sheetrock® Brand Durabond® 210 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-settingtype-joint-compounds-durabond-submittal-J17A.pdf",
            },
            {
              name: "Sheetrock® Brand Durabond® 45 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-settingtype-joint-compounds-durabond-submittal-J17A.pdf",
            },
            {
              name: "Sheetrock® Brand Durabond® 90 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-settingtype-joint-compounds-durabond-submittal-J17A.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 20 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 210 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 45 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 5 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 90 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand MH Tuf-Set Setting-Type Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-mh-tufset-settingtype-joint-compound-data-MH1225.pdf",
            },
            {
              name: "Beadex® Brand Silver Set™ 20 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-silver-lightweight-settingtype-joint-compounds-submittal-J1649.pdf",
            },
            {
              name: "Beadex® Brand Silver Set™ 40 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-silver-lightweight-settingtype-joint-compounds-submittal-J1649.pdf",
            },
            {
              name: "Beadex® Brand Silver Set™ 5 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-silver-lightweight-settingtype-joint-compounds-submittal-J1649.pdf",
            },
            {
              name: "Beadex® Brand Silver Set™ 90 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-silver-lightweight-settingtype-joint-compounds-submittal-J1649.pdf",
            },
          ],
        },
        {
          name: "Concrete Finishing Compounds",
          products: [
            {
              name: "Sheetrock® Brand Cover Coat® Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/cover-coat-compound-submittal-J59.pdf",
            },
          ],
        },
        {
          name: "Backer Board & Cement Board",
          products: [
            {
              name: "Durock® Brand Cement Board with EdgeGuard™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-durock-cement-board-with-edgeguard-submittal-en-CB321618.pdf",
            },
            {
              name: "Durock™ Brand Glass-Mat Tile Backerboard",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/durock-glass-mat-tile-backerboard-submittal-en-CB691.pdf",
            },
            {
              name: "Fiberock® Brand Tile Backerboard",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-fiberock-tilebacker-underlayment-submittal-en-f327325.pdf",
            },
            {
              name: "Fiberock® Brand Underlayment",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-fiberock-tilebacker-underlayment-submittal-en-f327325.pdf",
            },
          ],
        },
        {
          name: "Backer Board & Cement Board",
          products: [
            {
              name: "Micore® 160 Mineral Fiber Board",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-micore-160-mineral-fiber-board-submittal-en-ig307468.pdf",
            },
            {
              name: "Micore® 300 Mineral Fiber Board",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-micore-300-mineral-fiber-board-submittal-en-ig307486.pdf",
            },
            {
              name: "Micore® SB Mineral Fiber Board",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-micore-sb-mineral-fiber-board-submittal-en-ig307474.pdf",
            },
          ],
        },
        {
          name: "Sheathing",
          products: [
            {
              name: "Securock® Brand UltraLight Glass-Mat Sheathing",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-securock-ultralight-glass-mat-sheathing-firecode-x-WB2862-usa-eng.pdf",
            },
            {
              name: "Securock® Brand UltraLight Glass-Mat Sheathing Firecode® X",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-securock-ultralight-glass-mat-sheathing-firecode-x-WB2862-usa-eng.pdf",
            },
            {
              name: "Securock® ExoAir® 430 Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/securock-exoair-430-panels-submittal-en-usa-BE100.pdf",
            },
          ],
        },
        {
          name: "Corner Beads & Trim",
          products: [
            {
              name: "Beadex® Brand Flexible Metal Tape-On Corner Bead",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-flex-metal-tape-submittal-en.pdf",
            },
            {
              name: "Beadex® Brand Paper-Faced Metal Corner Bead",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-paper-faced-metal-drywall-bead-trim-submittal-J1646.pdf",
            },
            {
              name: "Beadex® Brand Paper-Faced Metal Trim",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-paper-faced-metal-drywall-bead-trim-submittal-J1646.pdf",
            },
            {
              name: "Sheetrock® Brand Flexible Metal Tape-On Corner Bead",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-flexible-metal-tape-on-corners-submittal-J549.pdf",
            },
            {
              name: "Sheetrock® Brand Paper-Faced Metal Corner Bead",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-paper-faced-metal-bead-trim-submittal-J1356.pdf",
            },
            {
              name: "Sheetrock® Brand Paper-Faced Metal Trim",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-paper-faced-metal-bead-trim-installation-guide-en-J1124.pdf",
            },
          ],
        },
        {
          name: "Drywall Joint Tape",
          products: [
            {
              name: "Sheetrock® Brand Fiberglass Joint Tape",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-fiberglass-drywall-tape-submittal-J780A.pdf",
            },
            {
              name: "Sheetrock® Brand MH Tuf-Tape™ Joint Tape",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/joint-tapes-industrial-construction-data-MH1178.pdf",
            },
            {
              name: "Sheetrock® Brand Paper Joint Tape",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-paper-joint-tape-submittal-J1736.pdf",
            },
            {
              name: "Beadex® Brand Drywall Joint Tape",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-beadex-drywall-joint-tape-submittal-en-usa-J2113.pdf",
            },
            {
              name: "Beadex® Brand Mesh Tape",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/sds/usg-beadex-mesh-joint-tape-sds-en-05000054001.pdf",
            },
            {
              name: "Imperial® Tape Type P",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-tape-submittal-en-P618.pdf",
            },
            {
              name: "Imperial® Tape Type S",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-tape-submittal-en-P618.pdf",
            },
          ],
        },
        {
          name: "Patching & Repair",
          products: [
            {
              name: "Sheetrock® Brand Easy Sand™ 20 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 210 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 45 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 5 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Easy Sand™ 90 Joint Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lightweight-settingtype-joint-compounds-easy-sand-submittal-J621.pdf",
            },
            {
              name: "Sheetrock® Brand Blue IQ™ Spackling Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/sds/usg-sheetrock-brand-blue-iq-spackling-compound-sds-en-61111000009.pdf",
            },
            {
              name: "Sheetrock® Brand Drywall Repair Clips",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-repair-clips-application-tips-en-J1803.pdf",
            },
            {
              name: "Sheetrock® Brand Dust Control Patch and Repair Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-patch-repair-pack-plus-3-application-tips-en-J1805.pdf",
            },
            {
              name: "Sheetrock® Brand Patch & Repair Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-installation-guide-en-J371.pdf",
            },
            {
              name: "Sheetrock® Brand Plaster of Paris",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-plaster-of-paris-submittal-J928.pdf",
            },
            {
              name: "Sheetrock® Brand Tuff-Cover+™ Spackling Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/sds/usg-sheetrock-brand-tuff-cover-spackling-compound-sds-en-61111000007.pdf",
            },
          ],
        },
        {
          name: "Plasters",
          products: [
            {
              name: "Apex™ Veneer Finish",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-apex-veneer-finish-submittal-P853.pdf",
            },
            {
              name: "Diamond® Veneer Basecoat",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/diamond-veneer-basecoat-submittal-P774.pdf",
            },
            {
              name: "Diamond® Veneer Finish",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/diamond-veneer-finish-sanded-submittal-P862.pdf",
            },
            {
              name: "Gypsum Plaster Accelerator",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-accelerators-submittal-P779.pdf",
            },
            {
              name: "Gypsum Plaster Retarder",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-retarders-submittal-P783.pdf",
            },
            {
              name: "Imperial® Veneer Basecoat",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-veneer-basecoat-submittal-P776.pdf",
            },
            {
              name: "Imperial® Veneer Finish",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/imperial-veneer-finish-submittal-P775.pdf",
            },
            {
              name: "Norfolk™ Veneer Finish",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-norfolk-special-veneer-plaster-submittal-P765.pdf",
            },
            {
              name: "Plaster Bonder",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-plaster-bonder-submittal-P778.pdf",
            },
            {
              name: "Red Top® Brand Finish Plaster",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/red-top-finish-plaster-submittal-P773.pdf",
            },
            {
              name: "Red Top® Brand Gauging Plaster",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/red-top-gauging-plaster-submittal-P786.pdf",
            },
            {
              name: "Red Top® Brand Gypsum Plaster",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/red-top-gauging-plaster-submittal-P786.pdf",
            },
            {
              name: "Red Top® Brand Keenes Cement",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/red-top-keenes-cement-submittal-P770.pdf",
            },
            {
              name: "Red Top® Brand Wood-Fiber Gypsum Plaster",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/red-top-gypsum-plaster-wood-fiber-submittal-P751.pdf",
            },
            {
              name: "Structo-Base® Gypsum Plaster",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/structo-base-gypsum-plaster-submittal-P753.pdf",
            },
            {
              name: "Structo-Lite® Basecoat Plaster",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/structo-lite-basecoat-submittal-P754.pdf",
            },
          ],
        },
        {
          name: "Primers",
          products: [
            {
              name: "Sheetrock® Brand First Coat™ Primer",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-first-coat-primer-submittal-J1095.pdf",
            },
            {
              name: "Sheetrock® Brand Tuff-Hide™ Primer-Surfacer",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-primer-surfacer-tuffhide-submittal-J1613.pdf",
            },
          ],
        },
        {
          name: "Drywall Sealants & Caulk",
          products: [
            {
              name: "Sheetrock® Brand Acoustical Sealant",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-acoustical-sealant-submittal-J678.pdf",
            },
            {
              name: "Sheetrock® Brand Firecode® Compound",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/firecode-compound-submittal-J1521.pdf",
            },
            {
              name: "Sheetrock® Brand Firecode® Smoke-Sound Sealant",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/firecode-smoke-sound-sealant-submittal-en-J2042.pdf",
            },
          ],
        },
        {
          name: "Wall & Ceiling Textures",
          products: [
            {
              name: "Beadex® Brand FasTex™ Wall and Ceiling Spray Texture",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-fastex-wall-ceiling-spray-texture-submittal-J1645.pdf",
            },
            {
              name: "Beadex® Brand Quick Spray Decorative Texture",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/beadex-quick-spray-texture-submittal-J1658.pdf",
            },
            {
              name: "Sheetrock® Brand MH Speed-Tex® Ready-Mixed Spray Texture",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-mh-speedtex-ready-mixed-spray-texture-submittal-J1973.pdf",
            },
            {
              name: "Sheetrock® Brand QT Poly Ceiling Spray Textures",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-ceiling-spray-texture-qu-submittal-J378.pdf",
            },
            {
              name: "Sheetrock® Brand Sand Finish Paint Additive",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-sand-finish-paint-additive-submittal-J1140.pdf",
            },
            {
              name: "Sheetrock® Brand Spray Texture",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-wall-ceiling-spray-texture-unaggregated-submittal-J377.pdf",
            },
            {
              name: "Sheetrock® Brand Texolite® Sanded Paste Stipple",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-wall-ceiling-texture-paint-submittal-J692.pdf",
            },
            {
              name: "Sheetrock® Brand Tuf-Tex® Wall and Ceiling Texture",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-wall-ceiling-texture-tuftex-submittal-J751.pdf",
            },
            {
              name: "Sheetrock® Brand Wall and Ceiling Spray Textures",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-wall-ceiling-spray-texture-unaggregated-submittal-J377.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "NATIONAL",
      subVendors: [
        {
          name: "Gold Bond Building Products",
          products: [
            {
              name: "12” Gold Bond® eXP® Interior Extreme® Fire-Shield C™ Gypsum Panel",
              file: "/uploads/national/drywall/Gold Bond Building Products/12” Gold Bond® eXP® Interior Extreme® Fire-Shield C™ Gypsum Panel.pdf",
            },
            {
              name: "12 Gold Bond® Fire-Shield C™ Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/12 Gold Bond® Fire-Shield C™ Gypsum Board.pdf",
            },
            {
              name: "12” Gold Bond® Kal-Kore® Fire-Shield C™ Plaster Base.pdf",
              file: "/uploads/national/drywall/Gold Bond Building Products/12” Gold Bond® Kal-Kore® Fire-Shield C™ Plaster Base.pdf",
            },
            {
              name: "12” Gold Bond® XP® Fire-Shield C™ Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/12” Gold Bond® XP® Fire-Shield C™ Gypsum Board.pdf",
            },
            {
              name: "58 Gold Bond® Fire-Shield C™ Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/58 Gold Bond® Fire-Shield C™ Gypsum Board.pdf",
            },
            {
              name: "58” Gold Bond® Kal-Kore® Fire-Shield C™ Plaster Base",
              file: "/uploads/national/drywall/Gold Bond Building Products/58” Gold Bond® Kal-Kore® Fire-Shield C™ Plaster Base.pdf",
            },

            {
              name: "58” Gold Bond® XP® Fire-Shield C™ Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/58” Gold Bond® XP® Fire-Shield C™ Gypsum Board.pdf",
            },
            {
              name: "DEXcell FA VSH® Glass Mat Roof Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/DEXcell FA VSH® Glass Mat Roof Board.pdf",
            },
            {
              name: "DEXcell FA® Glass Mat Roof Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/DEXcell FA® Glass Mat Roof Board.pdf",
            },
            {
              name: "DEXcell® Glass Mat Roof Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/DEXcell® Glass Mat Roof Board.pdf",
            },
            {
              name: "Gold Bond® Ceiling Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Ceiling Board.pdf",
            },
            {
              name: "Gold Bond® Durasan® Prefinished Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Durasan® Prefinished Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® eXP® Fire-Shield® Sheathing",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Fire-Shield® Sheathing.pdf",
            },
            {
              name: "Gold Bond® eXP® Fire-Shield® Tile Backer",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Fire-Shield® Tile Backer.pdf",
            },
            {
              name: "Gold Bond® eXP® Interior Extreme® AR Gypsum Panel",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Interior Extreme® AR Gypsum Panel.pdf",
            },
            {
              name: "Gold Bond® eXP® Interior Extreme® Fire-Shield® Gypsum Panel",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Interior Extreme® Fire-Shield® Gypsum Panel.pdf",
            },
            {
              name: "Gold Bond® eXP® Interior Extreme® Gypsum Panel",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Interior Extreme® Gypsum Panel.pdf",
            },
            {
              name: "Gold Bond® eXP® Shaftliner",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Shaftliner.pdf",
            },
            {
              name: "Gold Bond® eXP® Sheathing",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Sheathing.pdf",
            },
            {
              name: "Gold Bond® eXP® Tile Backer",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® eXP® Tile Backer.pdf",
            },
            {
              name: "Gold Bond® Fire-Shield® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Fire-Shield® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® Foil Back Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Foil Back Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® Gridstone® CleanRoom Ceiling Panels",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Gridstone® CleanRoom Ceiling Panels.pdf",
            },
            {
              name: "Gold Bond® Gridstone® Gypsum Ceiling Panels",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Gridstone® Gypsum Ceiling Panels.pdf",
            },
            {
              name: "Gold Bond® Gridstone® Hi-Strength Ceiling Panels",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Gridstone® Hi-Strength Ceiling Panels.pdf",
            },
            {
              name: "Gold Bond® Gypsolite® Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Gypsolite® Plaster.pdf",
            },
            {
              name: "Gold Bond® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® High Flex® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® High Flex® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® High Strength Fire-Shield 30® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® High Strength Fire-Shield 30® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® High Strength Fire-Shield 60® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® High Strength Fire-Shield 60® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® High Strength LITE® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® High Strength LITE® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® Kal-Kore® Fire-Shield® Plaster Base",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Kal-Kore® Fire-Shield® Plaster Base.pdf",
            },
            {
              name: "Gold Bond® Kal-Kore® LITE Plaster Base",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Kal-Kore® LITE Plaster Base.pdf",
            },
            {
              name: "Gold Bond® Kal-Kore® Plaster Base",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Kal-Kore® Plaster Base.pdf",
            },
            {
              name: "Gold Bond® Kal-Kote® Basecoat Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Kal-Kote® Basecoat Plaster.pdf",
            },
            {
              name: "Gold Bond® Kal-Kote® Smooth Finish Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Kal-Kote® Smooth Finish Plaster.pdf",
            },
            {
              name: "Gold Bond® Kal-Kote® Texture Finish Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Kal-Kote® Texture Finish Plaster.pdf",
            },
            {
              name: "Gold Bond® Shaftliner XP®",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Shaftliner XP®.pdf",
            },
            {
              name: "Gold Bond® SoundBreak XP Retrofit® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® SoundBreak XP Retrofit® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® SoundBreak® XP® Fire-Shield C™ Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® SoundBreak® XP® Fire-Shield C™ Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® SoundBreak® XP® Fire-Shield® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® SoundBreak® XP® Fire-Shield® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® SoundBreak® XP® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® SoundBreak® XP® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® Super-White Gauging Plaster Quick Set",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Super-White Gauging Plaster Quick Set.pdf",
            },
            {
              name: "Gold Bond® Super-White Gauging Plaster Slow Set",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Super-White Gauging Plaster Slow Set.pdf",
            },
            {
              name: "Gold Bond® Super-White Moulding Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Super-White Moulding Plaster.pdf",
            },
            {
              name: "Gold Bond® Two-Way Hardwall Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Two-Way Hardwall Plaster.pdf",
            },
            {
              name: "Gold Bond® Ultra-Shield FS® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Ultra-Shield FS® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® Uni-Kal® Veneer Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® Uni-Kal® Veneer Plaster.pdf",
            },
            {
              name: "Gold Bond® X-KALibur® Extended Set Veneer Plaster",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® X-KALibur® Extended Set Veneer Plaster.pdf",
            },
            {
              name: "Gold Bond® XP® Fire-Shield® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Fire-Shield® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® XP® Fire-Shield® Radius Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Fire-Shield® Radius Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® XP® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® XP® Hi-Abuse® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Hi-Abuse® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® XP® Hi-Impact® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Hi-Impact® Gypsum Board.pdf",
            },
            {
              name: "Gold Bond® XP® Ultra-Shield FS® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Ultra-Shield FS® Gypsum Board.pdf",
            },
          ],
        },
        {
          name: "PermaBASE Building Products",
          products: [
            {
              name: "DEXcell® Cement Roof Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/DEXcell® Cement Roof Board.pdf",
            },
            {
              name: "PermaBASE CI® Insulated Cement Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE CI® Insulated Cement Board.pdf",
            },
            {
              name: "PermaBASE PLUS® Cement Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE PLUS® Cement Board.pdf",
            },
            {
              name: "PermaBASE UltraBacker® Cement Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE UltraBacker® Cement Board.pdf",
            },
            {
              name: "PermaBASE WP® Waterproof Cement Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE WP® Waterproof Cement Board.pdf",
            },
            {
              name: "PermaBASE® Cement Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE® Cement Board.pdf",
            },
            {
              name: "PermaBASE™ Cement Board Screws",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE™ Cement Board Screws.pdf",
            },
            {
              name: "PermaBASE™ Cement Board Tape",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE™ Cement Board Tape.pdf",
            },
            {
              name: "PermaBASE™ Foam Tile Backer",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE™ Foam Tile Backer.pdf",
            },
          ],
        },
        {
          name: "ProForm Finishing Products",
          products: [
            {
              name: "Easy Finish® Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/Easy Finish® Joint Compound.pdf",
            },
            {
              name: "ProForm® All Purpose Heavy Viscosity Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® All Purpose Heavy Viscosity Joint Compound.pdf",
            },
            {
              name: "ProForm® All Purpose Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® All Purpose Joint Compound.pdf",
            },
            {
              name: "ProForm® All Purpose Machine Grade Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® All Purpose Machine Grade Joint Compound.pdf",
            },
            {
              name: "PermaBASE WP® Waterproof Cement Board",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE WP® Waterproof Cement Board.pdf",
            },
            {
              name: "ProForm® All Purpose Texture Grade Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® All Purpose Texture Grade Joint Compound.pdf",
            },
            {
              name: "ProForm® All Purpose with Dust-Tech® Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® All Purpose with Dust-Tech® Joint Compound.pdf",
            },
            {
              name: "PermaBASE™ Cement Board Tape",
              file: "/uploads/national/drywall/PermaBASE Building Products/PermaBASE™ Cement Board Tape.pdf",
            },
            {
              name: "ProForm® Concrete Cover Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Concrete Cover Joint Compound.pdf",
            },
            {
              name: "ProForm® Factory Built Housing Texture Grade Ready Mix Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Factory Built Housing Texture Grade Ready Mix Compound.pdf",
            },
            {
              name: "ProForm® FasTrack® Plus Setting Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® FasTrack® Plus Setting Compound.pdf",
            },
            {
              name: "ProForm® FasTrack® Setting Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® FasTrack® Setting Compound.pdf",
            },
            {
              name: "ProForm® Lite Blue® Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Lite Blue® Joint Compound.pdf",
            },
            {
              name: "ProForm® Lite Blue® with Dust-Tech® Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Lite Blue® with Dust-Tech® Joint Compound.pdf",
            },
            {
              name: "ProForm® Lite Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Lite Joint Compound.pdf",
            },
            {
              name: "ProForm® Lite with Dust-Tech®",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Lite with Dust-Tech®.pdf",
            },
            {
              name: "ProForm® Multi-Use Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Multi-Use Joint Compound.pdf",
            },
            {
              name: "ProForm® Paper Joint Tape",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Paper Joint Tape.pdf",
            },
            {
              name: "ProForm® Perfect Spray® EM",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Perfect Spray® EM.pdf",
            },
            {
              name: "ProForm® Quick Set Lite™ Setting Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Quick Set Lite™ Setting Compound.pdf",
            },
            {
              name: "ProForm® Quick Set™ Fire and Smoke Stop 90 Setting Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Quick Set™ Fire and Smoke Stop 90 Setting Compound.pdf",
            },
            {
              name: "ProForm® Taping Lite Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Taping Lite Joint Compound.pdf",
            },
            {
              name: "ProForm® Tinted Lite™ Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Tinted Lite™ Joint Compound.pdf",
            },
            {
              name: "ProForm® Topping Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Topping Joint Compound.pdf",
            },
            {
              name: "ProForm® Ultra Lite® All Purpose Joint Compound",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Ultra Lite® All Purpose Joint Compound.pdf",
            },
            {
              name: "ProForm® Wall & Ceiling Spray",
              file: "/uploads/national/drywall/ProForm Finishing Products/ProForm® Wall & Ceiling Spray.pdf",
            },
          ],
        },
        {
          name: "Purple Products",
          products: [
            {
              name: "PURPLE - Gold Bond® XP® Hi-Abuse® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Hi-Abuse® Gypsum Board.pdf",
            },
            {
              name: "PURPLE - Gold Bond® XP® Hi-Impact® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Hi-Impact® Gypsum Board.pdf",
            },
            {
              name: "PURPLE - Gold Bond® XP® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® XP® Gypsum Board.pdf",
            },
            {
              name: "PURPLE - Gold Bond® SoundBreak XP Retrofit® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® SoundBreak XP Retrofit® Gypsum Board.pdf",
            },
            {
              name: "PURPLE - Gold Bond® SoundBreak® XP® Gypsum Board",
              file: "/uploads/national/drywall/Gold Bond Building Products/Gold Bond® SoundBreak® XP® Gypsum Board.pdf",
            },
          ],
        },
      ],
    },
  ]);

  const [specialityVendors, setspecialityVendors] = useState([
    {
      name: "INPRO",
      subVendors: [
        {
          name: "wall cladding",
          products: [
            {
              name: "Continuum Hygienic Wall Cladding",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/- Continuum Hygienic Wall Cladding.pdf",
            },
            {
              name: "Aspex Wall Protection for Radius Conditions",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Aspex Wall Protection for Radius Conditions.pdf",
            },

            {
              name: "Aspex Wall Protection",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Aspex Wall Protection.pdf",
            },

            {
              name: "European Rigid Vinyl Rubrails",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/European Rigid Vinyl Rubrails.pdf",
            },

            {
              name: "G2 Palladium 3D Wall System",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/G2 Palladium 3D Wall System.pdf",
            },

            {
              name: "G2 Palladium 3D",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/G2 Palladium 3D.pdf",
            },

            {
              name: "G2 Palladium Square Edge Wall Panel System",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/G2 Palladium Square Edge Wall Panel System.pdf",
            },

            {
              name: "Palladium 3D Wall System",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium 3D Wall System.pdf",
            },

            {
              name: "Palladium G2 Beadboard",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium G2 Beadboard.pdf",
            },

            {
              name: "Palladium G2 Rubrails",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium G2 Rubrails.pdf",
            },

            {
              name: "Palladium G2 Sheet",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium G2 Sheet.pdf",
            },

            {
              name: "Palladium Rigid Sheet from Recycled Content",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Rigid Sheet from Recycled Content.pdf",
            },

            {
              name: "Palladium Rigid Sheet",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Rigid Sheet.pdf",
            },

            {
              name: "Palladium Rigid Vinyl Beadboard",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Rigid Vinyl Beadboard.pdf",
            },

            {
              name: "Palladium Rigid Vinyl Rubrails",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Rigid Vinyl Rubrails.pdf",
            },

            {
              name: "Palladium Square Edge Wall Panel System",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Square Edge Wall Panel System.pdf",
            },

            {
              name: "Palladium Wall Panels - Adhesive Mount, Factory Finished Edges, Square Edge",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Wall Panels - Adhesive Mount, Factory Finished Edges, Square Edge.pdf",
            },

            {
              name: "Palladium Wall Panels - Adhesive Mount, Factory Finished Edges",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Wall Panels - Adhesive Mount, Factory Finished Edges.pdf",
            },

            {
              name: "Palladium Wall Panels - Adhesive Mount, Field Cut Edges",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Wall Panels - Adhesive Mount, Field Cut Edges.pdf",
            },

            {
              name: "Palladium Wall Panels - Demountable Panels, Factory Finished Edges, Square Edge",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Wall Panels - Demountable Panels, Factory Finished Edges, Square Edge.pdf",
            },

            {
              name: "Palladium Wall Panels - Demountable Panels, Factory Finished Edges",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Wall Panels - Demountable Panels, Factory Finished Edges.pdf",
            },

            {
              name: "Palladium Wall Panels - Demountable Panels, Field Cut Edges",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium Wall Panels - Demountable Panels, Field Cut Edges.pdf",
            },

            {
              name: "Palladium® Rigid Sheet",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Palladium® Rigid Sheet.pdf",
            },

            {
              name: "Ricochet Flexible Wall Protection",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Ricochet Flexible Wall Protection.pdf",
            },

            {
              name: "Routed Interlock Continuum",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Routed Interlock Continuum.pdf",
            },

            {
              name: "Tape On Corner Guard G2 Bio Blend",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Tape On Corner Guard G2 Bio Blend.pdf",
            },

            {
              name: "Tape On Corner Guard Rigid Vinyl",
              file: "/uploads/INPRO/WALL PROTECTION/wall cladding/Tape On Corner Guard Rigid Vinyl.pdf",
            },
          ],
        },
        {
          name: "specialty wall cladding",
          products: [
            {
              name: "Aluminum Diamond Plate",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Aluminum Diamond Plate.pdf",
            },
            {
              name: "Custom Stainless Steel Diamond Plate Wall Panels",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Custom Stainless Steel Diamond Plate Wall Panels.pdf",
            },
            {
              name: "NuTree Diamond Plate Sheet",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/NuTree Diamond Plate Sheet.pdf",
            },
            {
              name: "Prism™ Wall Cladding Panels",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Prism™ Wall Cladding Panels.pdf",
            },
            {
              name: "Round 12in. & 16in. Diameter Column Cover",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Round 12in. & 16in. Diameter Column Cover.pdf",
            },
            {
              name: "Secure Lock Column Wrap",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Secure Lock Column Wrap.pdf",
            },
            {
              name: "Stainless Steel Wall Panels and Trim",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Stainless Steel Wall Panels and Trim.pdf",
            },
            {
              name: "Square Secure Lock Column Cover",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Square Secure Lock Column Cover.pdf",
            },
            {
              name: "Standard Stock Stainless Steel Diamond Plate Wall Panels",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Standard Stock Stainless Steel Diamond Plate Wall Panels.pdf",
            },
            {
              name: "Square Slide Lock Column Cover",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Square Slide Lock Column Cover.pdf",
            },
            {
              name: "Square Snap Lock Column Cover",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Square Snap Lock Column Cover.pdf",
            },
            {
              name: "Square Standard Column Cover",
              file: "/uploads/INPRO/WALL PROTECTION/specialty wall cladding/Square Standard Column Cover.pdf",
            },
          ],
        },
        {
          name: "wall protection Corner guards",
          products: [
            {
              name: "160FR Fire Rated Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/160FR Fire Rated Corner Guard.pdf",
            },
            {
              name: "170 Bullnose High Impact Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/170 Bullnose High Impact Corner Guard.pdf",
            },
            {
              name: "170BN BluNose High Impact Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/170BN BluNose High Impact Corner Guard.pdf",
            },
            {
              name: "170F Bullnose Flush Mount Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/170F Bullnose Flush Mount Corner Guard.pdf",
            },
            {
              name: "170FR Bullnose Fire Rated Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/170FR Bullnose Fire Rated Corner Guard.pdf",
            },
            {
              name: "Aluminum Corner Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Aluminum Corner Guards.pdf",
            },
            {
              name: "Clear Corner Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Clear Corner Guards.pdf",
            },
            {
              name: "Flexible Corner Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Flexible Corner Guards.pdf",
            },
            {
              name: "G2-130 High Impact Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-130 High Impact Corner Guard.pdf",
            },
            {
              name: "G2-130F Flush Mount Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-130F Flush Mount Corner Guard.pdf",
            },
            {
              name: "G2-130FR Fire Rated Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-130FR Fire Rated Corner Guard.pdf",
            },
            {
              name: "G2-130R High Impact Corner Guard with G2 Retainer",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-130R High Impact Corner Guard with G2 Retainer.pdf",
            },
            {
              name: "G2-140D End Wall Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-140D End Wall Protector.pdf",
            },
            {
              name: "G2-150F Flush Mount Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-150F Flush Mount Corner Guard.pdf",
            },
            {
              name: "G2-150FR Fire Rated Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-150FR Fire Rated Corner Guard.pdf",
            },
            {
              name: "G2-150R High Impact Corner Guard with G2 Retainer",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-150R High Impact Corner Guard with G2 Retainer.pdf",
            },
            {
              name: "G2-150RD End Wall Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-150RD End Wall Protector.pdf",
            },
            {
              name: "G2-160 High Impact Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-160 High Impact Corner Guard.pdf",
            },
            {
              name: "G2-160D End Wall Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-160D End Wall Protector.pdf",
            },
            {
              name: "G2-160F Flush Mount Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-160F Flush Mount Corner Guard.pdf",
            },
            {
              name: "G2-160FR Fire Rated Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-160FR Fire Rated Corner Guard.pdf",
            },
            {
              name: "G2-160R High Impact Corner Guard with G2 Retainer",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-160R High Impact Corner Guard with G2 Retainer.pdf",
            },
            {
              name: "G2-160RD End Wall Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-160RD End Wall Protector.pdf",
            },
            {
              name: "G2-170 Bullnose High Impact Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-170 Bullnose High Impact Corner Guard.pdf",
            },
            {
              name: "G2-170F Bullnose Flush Mount Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-170F Bullnose Flush Mount Corner Guard.pdf",
            },
            {
              name: "G2-170FR Bullnose Fire Rated Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-170FR Bullnose Fire Rated Corner Guard.pdf",
            },
            {
              name: "G2-170R High Impact Corner Guard with G2 Retainer",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/G2-170R High Impact Corner Guard with G2 Retainer.pdf",
            },
            {
              name: "Heavy Duty Rubber Corner Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Heavy Duty Rubber Corner Guard.pdf",
            },
            {
              name: "NuTree Corner Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/NuTree Corner Guards.pdf",
            },
            {
              name: "Rubber Corner Guard with Galvanized Retainer",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Rubber Corner Guard with Galvanized Retainer.pdf",
            },
            {
              name: "Stainless Steel Corner Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Stainless Steel Corner Guards.pdf",
            },
            {
              name: "Stainless Steel Flush Mount Corner Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Stainless Steel Flush Mount Corner Guards.pdf",
            },
            {
              name: "Stainless Steel Flush Mount End Wall Protectors",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Stainless Steel Flush Mount End Wall Protectors.pdf",
            },
            {
              name: "Stainless Steel Surface Mount End Wall Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Stainless Steel Surface Mount End Wall Protector.pdf",
            },
            {
              name: "Tape On Corner Guard G2 Bio Blend",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Tape On Corner Guard G2 Bio Blend.pdf",
            },
            {
              name: "Tape On Corner Guard Rigid Vinyl",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Corner guards/Tape On Corner Guard Rigid Vinyl.pdf",
            },
          ],
        },
        {
          name: "wall protection Wall guards",
          products: [
            {
              name: "30SS Stainless Steel Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/30SS Stainless Steel Wall Guard.pdf",
            },
            {
              name: "31SS Stainless Steel Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/31SS Stainless Steel Wall Guard.pdf",
            },
            {
              name: "50AA Aluminum Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/50AA Aluminum Wall Guard.pdf",
            },

            {
              name: "50SSH and 56SSH Stainless Steel Wall Guard w- H-Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/50SSH and 56SSH Stainless Steel Wall Guard w- H-Bracket.pdf",
            },
            {
              name: "51SS Stainless Steel Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/51SS Stainless Steel Wall Guard.pdf",
            },
            {
              name: "52SS Stainless Steel Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/52SS Stainless Steel Wall Guard.pdf",
            },
            {
              name: "56SSB Stainless Steel Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/56SSB Stainless Steel Wall Guard.pdf",
            },
            {
              name: "56SSF Stainless Steel Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/56SSF Stainless Steel Wall Guard.pdf",
            },
            {
              name: "61SS Crash Rail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/61SS Crash Rail.pdf",
            },
            {
              name: "200 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/200 Wall Guard.pdf",
            },
            {
              name: "500 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/500 Wall Guard.pdf",
            },
            {
              name: "700-700W Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/700-700W Wall Guard.pdf",
            },
            {
              name: "700i-700iW Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/700i-700iW Wall Guard.pdf",
            },
            {
              name: "1300 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1300 Wall Guard.pdf",
            },
            {
              name: "1400-1400W-1455 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1400-1400W-1455 Wall Guard.pdf",
            },
            {
              name: "1400i-1400iW-1455i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1400i-1400iW-1455i Wall Guard.pdf",
            },
            {
              name: "1500-1500W Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1500-1500W Wall Guard.pdf",
            },
            {
              name: "1500i-1500iW Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1500i-1500iW Wall Guard.pdf",
            },
            {
              name: "1500M Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1500M Wall Guard.pdf",
            },
            {
              name: "1600-1655 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1600-1655 Wall Guard.pdf",
            },
            {
              name: "1600i-1655i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1600i-1655i Wall Guard.pdf",
            },
            {
              name: "1800 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1800 Wall Guard.pdf",
            },
            {
              name: "1800i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/1800i Wall Guard.pdf",
            },
            {
              name: "5000-5055 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/5000-5055 Wall Guard.pdf",
            },
            {
              name: "5000i-5055i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/5000i-5055i Wall Guard.pdf",
            },
            {
              name: "Clear Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/Clear Wall Guard.pdf",
            },

            {
              name: "Flexible Wall Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/Flexible Wall Guards.pdf",
            },
            {
              name: "G2-200 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-200 Wall Guard.pdf",
            },
            {
              name: "G2-500 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-500 Wall Guard.pdf",
            },
            {
              name: "G2-700i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-700i Wall Guard.pdf",
            },
            {
              name: "G2-1300 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1300 Wall Guard.pdf",
            },
            {
              name: "G2-1400 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1400 Wall Guard.pdf",
            },
            {
              name: "G2-1400i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1400i Wall Guard.pdf",
            },
            {
              name: "G2-1500 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1500 Wall Guard.pdf",
            },
            {
              name: "G2-1500i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1500i Wall Guard.pdf",
            },
            {
              name: "G2-1600 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1600 Wall Guard.pdf",
            },
            {
              name: "G2-1600i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1600i Wall Guard.pdf",
            },
            {
              name: "G2-1800 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1800 Wall Guard.pdf",
            },
            {
              name: "G2-1800i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-1800i Wall Guard.pdf",
            },
            {
              name: "G2-5000 Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-5000 Wall Guard.pdf",
            },
            {
              name: "G2-5000i Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-5000i Wall Guard.pdf",
            },
            {
              name: "G2-5000W Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/G2-5000W Wall Guard.pdf",
            },
            {
              name: "Heavy Duty Rubber Wall Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/Heavy Duty Rubber Wall Guards.pdf",
            },
            {
              name: "NuTree Wall Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall guards/NuTree Wall Guard.pdf",
            },
          ],
        },
        {
          name: "wall protection Chair Rails",
          products: [
            {
              name: "2500 Chair Rail",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/2500 Chair Rail.pdf",
            },
            {
              name: "2600 Chair Rail",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/2600 Chair Rail.pdf",
            },
            {
              name: "2700-2700W Chair Rail",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/2700-2700W Chair Rail.pdf",
            },
            {
              name: "G2 Palladium 3D Wall System",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/G2 Palladium 3D Wall System.pdf",
            },
            {
              name: "G2-2500 Chair Rail",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/G2-2500 Chair Rail.pdf",
            },
            {
              name: "G2-2600 Chair Rail",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/G2-2600 Chair Rail.pdf",
            },
            {
              name: "G2-2700 Chair Rail",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/G2-2700 Chair Rail.pdf",
            },
            {
              name: "Palladium 3D Wall System",
              file: "client/uploads/INPRO/WALL PROTECTION/wall protection- chair rails/Palladium 3D Wall System.pdf",
            },
          ],
        },
        {
          name: "wall protection Wall Base",
          products: [
            {
              name: "High Impact Wall Base",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall Base/High Impact Wall Base.pdf",
            },
            {
              name: "Palladium 3D Wall System",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall Base/Palladium 3D Wall System.pdf",
            },

            {
              name: "Stainless Steel Hygienic Cove Base",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall Base/Stainless Steel Hygienic Cove Base.pdf",
            },

            {
              name: "Stainless Steel Wall Base",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Wall Base/Stainless Steel Wall Base.pdf",
            },
          ],
        },
        {
          name: "wall protection Door Protection",
          products: [
            {
              name: "1700 High Impact Door Frame Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/1700 High Impact Door Frame Guard.pdf",
            },
            {
              name: "G2 Custom Formed Door Frame Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/G2 Custom Formed Door Frame Guards.pdf",
            },
            {
              name: "G2 Designer Kickplate",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/G2 Designer Kickplates.pdf",
            },
            {
              name: "G2 Door Edge Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/G2 Door Edge Protector.pdf",
            },
            {
              name: "G2 Kickplates",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/G2 Kickplates.pdf",
            },
            {
              name: "G2-1700 High Impact Door Frame Guard",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/G2-1700 High Impact Door Frame Guard.pdf",
            },
            {
              name: "Palladium Doors",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Palladium Doors.pdf",
            },
            {
              name: "Rigid Vinyl Custom Formed Door Frame Guards",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Rigid Vinyl Custom Formed Door Frame Guards.pdf",
            },
            {
              name: "Rigid Vinyl Designer Kickplates",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Rigid Vinyl Designer Kickplates.pdf",
            },
            {
              name: "Rigid Vinyl Door Edge Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Rigid Vinyl Door Edge Protector.pdf",
            },
            {
              name: "Rigid Vinyl Kickplates",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Rigid Vinyl Kickplates.pdf",
            },
            {
              name: "Stainless Steel Door Edge Protector",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Stainless Steel Door Edge Protector.pdf",
            },
            {
              name: "Stainless Steel Kickplates",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- Door Protection/Stainless Steel Kickplates.pdf",
            },
          ],
        },
        {
          name: "wall protection Hand Rails",
          products: [
            {
              name: "800-855-800W Handrail Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/800-855-800W Handrail Internationally Compliant.pdf",
            },
            {
              name: "800-855-800W Handrail with Ligature Resistant Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/800-855-800W Handrail with Ligature Resistant Bracket.pdf",
            },
            {
              name: "800-855-800W Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/800-855-800W Handrail.pdf",
            },
            {
              name: "900M Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/900M Handrail.pdf",
            },
            {
              name: "910-910FV Handrail Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/910-910FV Handrail Internationally Compliant.pdf",
            },
            {
              name: "910-910FV Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/910-910FV Handrail.pdf",
            },
            {
              name: "920-920FV Handrail Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/920-920FV Handrail Internationally Compliant.pdf",
            },
            {
              name: "920-920FV Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/920-920FV Handrail.pdf",
            },
            {
              name: "940 Smooth Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/940 Smooth Handrail.pdf",
            },
            {
              name: "1000 LED Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1000 LED Handrail.pdf",
            },
            {
              name: "1000-1000FV-1055 Handrail with Ligature Resistant Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1000-1000FV-1055 Handrail with Ligature Resistant Bracket.pdf",
            },
            {
              name: "1000-1000FV-1055 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1000-1000FV-1055 Handrail.pdf",
            },
            {
              name: "1000BH-1055BH Ligature Resistant Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1000BH-1055BH Ligature Resistant Handrail.pdf",
            },
            {
              name: "1100 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1100 Handrail.pdf",
            },
            {
              name: "1200-1255 Handrail Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1200-1255 Handrail Internationally Compliant.pdf",
            },
            {
              name: "1200-1255 Handrail with Ligature Resistant Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1200-1255 Handrail with Ligature Resistant Bracket.pdf",
            },
            {
              name: "1200-1255 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/1200-1255 Handrail.pdf",
            },
            {
              name: "2000-2000W Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/2000-2000W Handrail.pdf",
            },
            {
              name: "3110 Handrail with Round Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3110 Handrail with Round Top, Internationally Compliant.pdf",
            },
            {
              name: "3110 Handrail with Round Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3110 Handrail with Round Top, Internationally Compliant.pdf",
            },
            {
              name: "3110 Handrail with Round Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3110 Handrail with Round Top.pdf",
            },
            {
              name: "3110 Ligature Resistant Handrail with Round Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3110 Ligature Resistant Handrail with Round Top.pdf",
            },
            {
              name: "3120 Handrail with Round Wood Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3120 Handrail with Round Wood Top, Internationally Compliant.pdf",
            },
            {
              name: "3120 Handrail with Round Wood Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3120 Handrail with Round Wood Top.pdf",
            },
            {
              name: "3120 Ligature Resistant Handrail with Round Wood Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3120 Ligature Resistant Handrail with Round Wood Top.pdf",
            },
            {
              name: "3120 Ligature Resistant Handrail with Round Wood Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3120 Ligature Resistant Handrail with Round Wood Top.pdf",
            },
            {
              name: "3130 Handrail with Oval Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3130 Handrail with Oval Top, Internationally Compliant.pdf",
            },
            {
              name: "3130 Handrail with Oval Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3130 Handrail with Oval Top.pdf",
            },
            {
              name: "3130 Ligature Resistant Handrail with Oval Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3130 Ligature Resistant Handrail with Oval Top.pdf",
            },
            {
              name: "3500 Handrail Metal Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Metal Top-Metal Bottom.pdf",
            },
            {
              name: "3500 Handrail Metal Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Metal Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3500 Handrail Metal Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Metal Top-Vinyl Bottom.pdf",
            },
            {
              name: "3500 Handrail Oval Stainless Steel Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Oval Stainless Steel Top-Metal Bottom.pdf",
            },
            {
              name: "3500 Handrail Oval Stainless Steel Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Oval Stainless Steel Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3500 Handrail Oval Stainless Steel Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Oval Stainless Steel Top-Vinyl Bottom.pdf",
            },
            {
              name: "3500 Handrail Round Stainless Steel Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Round Stainless Steel Top-Metal Bottom.pdf",
            },
            {
              name: "3500 Handrail Round Stainless Steel Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Round Stainless Steel Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3500 Handrail Round Stainless Steel Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Round Stainless Steel Top-Vinyl Bottom.pdf",
            },
            {
              name: "3500 Handrail Vinyl Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Vinyl Top-Metal Bottom.pdf",
            },
            {
              name: "3500 Handrail Vinyl Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Vinyl Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3500 Handrail Vinyl Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Vinyl Top-Vinyl Bottom.pdf",
            },
            {
              name: "3500 Handrail Wood Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3500 Handrail Wood Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3510 Handrail Round Vinyl Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3510 Handrail Round Vinyl Top-Metal Bottom.pdf",
            },
            {
              name: "3510 Handrail Round Vinyl Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3510 Handrail Round Vinyl Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3510 Handrail Round Vinyl Top-Vinyl Bottom, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3510 Handrail Round Vinyl Top-Vinyl Bottom, Internationally Compliant.pdf",
            },
            {
              name: "3510 Handrail Round Vinyl Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3510 Handrail Round Vinyl Top-Vinyl Bottom.pdf",
            },
            {
              name: "3520 Handrail Round Wood Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3520 Handrail Round Wood Top-Metal Bottom.pdf",
            },
            {
              name: "3520 Handrail Round Wood Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3520 Handrail Round Wood Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3520 Handrail Round Wood Top-Vinyl Bottom, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3520 Handrail Round Wood Top-Vinyl Bottom, Internationally Compliant.pdf",
            },
            {
              name: "3520 Handrail Round Wood Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3520 Handrail Round Wood Top-Vinyl Bottom.pdf",
            },
            {
              name: "3530 Handrail Oval Vinyl Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3530 Handrail Oval Vinyl Top-Metal Bottom.pdf",
            },
            {
              name: "3530 Handrail Oval Vinyl Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3530 Handrail Oval Vinyl Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "3530 Handrail Oval Vinyl Top-Vinyl Bottom, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3530 Handrail Oval Vinyl Top-Vinyl Bottom, Internationally Compliant.pdf",
            },
            {
              name: "3530 Handrail Oval Vinyl Top-Vinyl Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/3530 Handrail Oval Vinyl Top-Vinyl Bottom.pdf",
            },
            {
              name: "Bariatric Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/Bariatric Handrail.pdf",
            },
            {
              name: "G2-800 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-800 Handrail.pdf",
            },
            {
              name: "G2-910 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-910 Handrail.pdf",
            },
            {
              name: "G2-920 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-920 Handrail.pdf",
            },
            {
              name: "G2-1000 Handrail with Ligature Resistant Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-1000 Handrail with Ligature Resistant Bracket.pdf",
            },
            {
              name: "G2-1000 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-1000 Handrail.pdf",
            },
            {
              name: "G2-1000 with Ligature Resistant Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-1000 with Ligature Resistant Bracket.pdf",
            },
            {
              name: "G2-1100 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-1100 Handrail.pdf",
            },
            {
              name: "G2-1200 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-1200 Handrail.pdf",
            },
            {
              name: "G2-2000 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-2000 Handrail.pdf",
            },
            {
              name: "G2-3110 Handrail with Round Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3110 Handrail with Round Top, Internationally Compliant.pdf",
            },
            {
              name: "G2-3110 Ligature Resistant Handrail with Round Top.",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3110 Ligature Resistant Handrail with Round Top.pdf",
            },
            {
              name: "G2-3110VV Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3110VV Internationally Compliant.pdf",
            },
            {
              name: "G2-3120 Handrail with Round Wood Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3120 Handrail with Round Wood Top, Internationally Compliant.pdf",
            },
            {
              name: "G2-3120 Handrail with Round Wood Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3120 Handrail with Round Wood Top.pdf",
            },
            {
              name: "G2-3120 Ligature Resistant Handrail with Round Wood Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3120 Ligature Resistant Handrail with Round Wood Top.pdf",
            },
            {
              name: "G2-3120WV Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3120WV Internationally Compliant.pdf",
            },
            {
              name: "G2-3120WV with Ligature Resistant Bracket",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3120WV with Ligature Resistant Bracket.pdf",
            },
            {
              name: "G2-3120WV",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3120WV.pdf",
            },
            {
              name: "G2-3130 Handrail with Oval Top, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3130 Handrail with Oval Top, Internationally Compliant.pdf",
            },
            {
              name: "G2-3130 Handrail with Oval Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3130 Handrail with Oval Top.pdf",
            },
            {
              name: "G2-3130 Ligature Resistant Handrail with Oval Top",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3130 Ligature Resistant Handrail with Oval Top.pdf",
            },
            {
              name: "G2-3130VV Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3130VV Internationally Compliant.pdf",
            },
            {
              name: "G2-3500 Handrail G2 Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3500 Handrail G2 Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3500 Handrail G2 Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3500 Handrail G2 Top-Metal Bottom.pdf",
            },
            {
              name: "G2-3500 Handrail G2 Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3500 Handrail G2 Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "G2-3500 Handrail Metal Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3500 Handrail Metal Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3500 Handrail Oval Stainless Steel Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3500 Handrail Oval Stainless Steel Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3500 Handrail Wood Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3500 Handrail Wood Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3510 Handrail G2 Round Top-G2 Bottom, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3510 Handrail G2 Round Top-G2 Bottom, Internationally Compliant.pdf",
            },
            {
              name: "G2-3510 Handrail G2 Round Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3510 Handrail G2 Round Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3510 Handrail Round G2 TopMetal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3510 Handrail Round G2 TopMetal Bottom.pdf",
            },
            {
              name: "G2-3520 Handrail Round Wood Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3520 Handrail Round Wood Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3530 Handrail Oval G2 Top-G2 Bottom, Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3530 Handrail Oval G2 Top-G2 Bottom, Internationally Compliant.pdf",
            },
            {
              name: "G2-3530 Handrail Oval G2 Top-G2 Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3530 Handrail Oval G2 Top-G2 Bottom.pdf",
            },
            {
              name: "G2-3530 Handrail Oval G2 Top-Metal Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3530 Handrail Oval G2 Top-Metal Bottom.pdf",
            },
            {
              name: "G2-3530 Handrail Oval G2 Top-Stainless Steel Bottom",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/G2-3530 Handrail Oval G2 Top-Stainless Steel Bottom.pdf",
            },
            {
              name: "HR910 Handrail Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/HR910 Handrail Internationally Compliant.pdf",
            },
            {
              name: "HR910 Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/HR910 Handrail.pdf",
            },
            {
              name: "Round Stainless Steel Handrail with 913SS Bracket Internationally Compliant",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/Round Stainless Steel Handrail with 913SS Bracket Internationally Compliant.pdf",
            },
            {
              name: "Round Stainless Steel Handrail",
              file: "/uploads/INPRO/WALL PROTECTION/wall protection- HandRails/Round Stainless Steel Handrail.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "Construction Speciality",
      subVendors: [
        {
          name: "Expansion Joint Solutions",
          products: [
            {
              name: "AFW",
              file: "/uploads/construction speciality/Expansion Joint Solutions/AFW.pdf",
            },
            {
              name: "ALHD",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ALHD.pdf",
            },
            {
              name: "ALR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ALR.pdf",
            },
            {
              name: "ALS",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ALS.pdf",
            },
            {
              name: "APF",
              file: "/uploads/construction speciality/Expansion Joint Solutions/APF.pdf",
            },
            {
              name: "ASM-X",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ASM-X.pdf",
            },
            {
              name: "ASM",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ASM.pdf",
            },
            {
              name: "BRJ",
              file: "/uploads/construction speciality/Expansion Joint Solutions/BRJ.pdf",
            },
            {
              name: "DGTP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/DGTP.pdf",
            },
            {
              name: "DGTR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/DGTR.pdf",
            },
            {
              name: "ESW & ESC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ESW & ESC.pdf",
            },
            {
              name: "FB-97",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FB-97.pdf",
            },
            {
              name: "FCF 1-2",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FCF 1-2.pdf",
            },
            {
              name: "FCF 3 and Up",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FCF 3 and Up.pdf",
            },
            {
              name: "FCS (2-4)",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FCS (2-4).pdf",
            },
            {
              name: "FCS 5 and Up",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FCS 5 and Up.pdf",
            },
            {
              name: "FWF 1-2",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FWF 1-2.pdf",
            },
            {
              name: "FWF 3 and Up",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FWF 3 and Up.pdf",
            },
            {
              name: "FYW",
              file: "/uploads/construction speciality/Expansion Joint Solutions/FYW.pdf",
            },
            {
              name: "GFPS",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFPS.pdf",
            },
            {
              name: "GFS-W",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFS-W.pdf",
            },
            {
              name: "GFS",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFS.pdf",
            },
            {
              name: "GFS-W",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFS-W.pdf",
            },
            {
              name: "GFS",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFS.pdf",
            },
            {
              name: "GFST",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFST.pdf",
            },
            {
              name: "GFT",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GFT.pdf",
            },
            {
              name: "GTP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GTP.pdf",
            },
            {
              name: "GTR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GTR.pdf",
            },
            {
              name: "GTW",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GTW.pdf",
            },
            {
              name: "GYMF",
              file: "/uploads/construction speciality/Expansion Joint Solutions/GYMF.pdf",
            },
            {
              name: "HB",
              file: "/uploads/construction speciality/Expansion Joint Solutions/HB.pdf",
            },
            {
              name: "HC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/HC.pdf",
            },
            {
              name: "HF",
              file: "/uploads/construction speciality/Expansion Joint Solutions/HF.pdf",
            },
            {
              name: "HFR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/HFR.pdf",
            },
            {
              name: "KB & KBC Series",
              file: "/uploads/construction speciality/Expansion Joint Solutions/KB & KBC Series.pdf",
            },
            {
              name: "KBC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/KBC.pdf",
            },
            {
              name: "LAF-2G Series",
              file: "/uploads/construction speciality/Expansion Joint Solutions/LAF-2G Series.pdf",
            },
            {
              name: "LAS-2G Series",
              file: "/uploads/construction speciality/Expansion Joint Solutions/LAS-2G Series.pdf",
            },
            {
              name: "LSRR-LSRW",
              file: "/uploads/construction speciality/Expansion Joint Solutions/LSRR-LSRW.pdf",
            },
            {
              name: "MARC-MARR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/MARC-MARR.pdf",
            },
            {
              name: "PC-2G",
              file: "/uploads/construction speciality/Expansion Joint Solutions/PC-2G.pdf",
            },
            {
              name: "PCS-2G",
              file: "/uploads/construction speciality/Expansion Joint Solutions/PCS-2G.pdf",
            },
            {
              name: "PDA",
              file: "/uploads/construction speciality/Expansion Joint Solutions/PDA.pdf",
            },
            {
              name: "PTC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/PTC.pdf",
            },
            {
              name: "PTCP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/PTCP.pdf",
            },
            {
              name: "RFA",
              file: "/uploads/construction speciality/Expansion Joint Solutions/RFA.pdf",
            },
            {
              name: "RFB",
              file: "/uploads/construction speciality/Expansion Joint Solutions/RFB.pdf",
            },
            {
              name: "RFC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/RFC.pdf",
            },
            {
              name: "RFD",
              file: "/uploads/construction speciality/Expansion Joint Solutions/RFD.pdf",
            },
            {
              name: "RJT",
              file: "/uploads/construction speciality/Expansion Joint Solutions/RJT.pdf",
            },
            {
              name: "SC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SC.pdf",
            },
            {
              name: "SCC - SFC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SCC - SFC.pdf",
            },
            {
              name: "SCW - SFW",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SCW - SFW.pdf",
            },
            {
              name: "SF 2-7",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SF 2-7.pdf",
            },
            {
              name: "SF 8-11",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SF 8-11.pdf",
            },
            {
              name: "SF 12 and Up",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SF 12 and Up.pdf",
            },
            {
              name: "SGC",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SGC.pdf",
            },
            {
              name: "SGP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SGP.pdf",
            },
            {
              name: "SGR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SGR.pdf",
            },
            {
              name: "SGW",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SGW.pdf",
            },
            {
              name: "SHP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SHP.pdf",
            },
            {
              name: "SJHD",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SJHD.pdf",
            },
            {
              name: "SJP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SJP.pdf",
            },
            {
              name: "SJPF",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SJPF.pdf",
            },
            {
              name: "SJPFR",
              file: "client/uploads/construction speciality/Expansion Joint Solutions/SJPFR.pdf",
            },
            {
              name: "SMP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SMP.pdf",
            },
            {
              name: "SSR 2-4",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SSR 2-4.pdf",
            },
            {
              name: "SSR 5 and Up",
              file: "/uploads/construction speciality/Expansion Joint Solutions/SSR 5 and Up.pdf",
            },
            {
              name: "Thermal Vapor Barrier",
              file: "/uploads/construction speciality/Expansion Joint Solutions/Thermal Vapor Barrier.pdf",
            },
            {
              name: "Vapor Barrier",
              file: "/uploads/construction speciality/Expansion Joint Solutions/Vapor Barrier.pdf",
            },
            {
              name: "VF",
              file: "/uploads/construction speciality/Expansion Joint Solutions/VF.pdf",
            },
            {
              name: "VFR",
              file: "/uploads/construction speciality/Expansion Joint Solutions/VFR.pdf",
            },
            {
              name: "XLP-2G",
              file: "/uploads/construction speciality/Expansion Joint Solutions/XLP-2G.pdf",
            },
            {
              name: "XLP",
              file: "/uploads/construction speciality/Expansion Joint Solutions/XLP.pdf",
            },
            {
              name: "XLS-2G",
              file: "/uploads/construction speciality/Expansion Joint Solutions/XLS-2G.pdf",
            },
            {
              name: "XLS",
              file: "/uploads/construction speciality/Expansion Joint Solutions/XLS.pdf",
            },
            {
              name: "ZB",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ZB.pdf",
            },
            {
              name: "ZBSM",
              file: "/uploads/construction speciality/Expansion Joint Solutions/ZBSM.pdf",
            },
          ],
        },
        {
          name: "Wall Protection",
          products: [
            {
              name: "8PH S8PH",
              file: "/uploads/construction speciality/Wall Protection/8PH S8PH.pdf",
            },
            {
              name: "A1 A2-DFP",
              file: "/uploads/construction speciality/Wall Protection/A1 A2-DFP.pdf",
            },
            {
              name: "ACO-8",
              file: "/uploads/construction speciality/Wall Protection/ACO-8.pdf",
            },
            {
              name: "Acrovyn by Design® Metallics Collection",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn by Design® Metallics Collection.pdf",
            },
            {
              name: "Acrovyn by Design®",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn by Design®.pdf",
            },
            {
              name: "Acrovyn Dimensional Moldings",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn Dimensional Moldings.pdf",
            },
            {
              name: "Acrovyn Kick Push Plates",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn Kick Push Plates.pdf",
            },
            {
              name: "Acrovyn Rubstrips",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn Rubstrips.pdf",
            },
            {
              name: "Acrovyn Trims",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn Trims.pdf",
            },
            {
              name: "Acrovyn® Brushed Metals",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn® Brushed Metals.pdf",
            },
            {
              name: "Acrovyn® Solid Colors",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn® Solid Colors.pdf",
            },
            {
              name: "Acrovyn® Strata",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn® Strata.pdf",
            },
            {
              name: "Acrovyn® Trim",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn® Trim.pdf",
            },
            {
              name: "Acrovyn® Wall Panels",
              file: "/uploads/construction speciality/Wall Protection/Acrovyn® Wall Panels.pdf",
            },
            {
              name: "Aluminum Trim",
              file: "/uploads/construction speciality/Wall Protection/Aluminum Trim.pdf",
            },
            {
              name: "ASCO-8",
              file: "/uploads/construction speciality/Wall Protection/ASCO-8.pdf",
            },
            {
              name: "AW-10C",
              file: "/uploads/construction speciality/Wall Protection/AW-10C.pdf",
            },
            {
              name: "AW-CR CRVB CRVBK",
              file: "/uploads/construction speciality/Wall Protection/AW-CR CRVB CRVBK.pdf",
            },
            {
              name: "B1 B2-DFP",
              file: "/uploads/construction speciality/Wall Protection/B1 B2-DFP.pdf",
            },
            {
              name: "BG-10",
              file: "/uploads/construction speciality/Wall Protection/BG-10.pdf",
            },
            {
              name: "BG-30",
              file: "/uploads/construction speciality/Wall Protection/BG-30.pdf",
            },
            {
              name: "BL-100A 200A",
              file: "/uploads/construction speciality/Wall Protection/BL-100A 200A.pdf",
            },
            {
              name: "CO-8",
              file: "/uploads/construction speciality/Wall Protection/CO-8.pdf",
            },
            {
              name: "Colonial Rail FR-252",
              file: "/uploads/construction speciality/Wall Protection/Colonial Rail FR-252.pdf",
            },
            {
              name: "D1 D2-DFP",
              file: "/uploads/construction speciality/Wall Protection/D1 D2-DFP.pdf",
            },
            {
              name: "Direct Apply Attachment",
              file: "/uploads/construction speciality/Wall Protection/Direct Apply Attachment.pdf",
            },
            {
              name: "Door Cladding",
              file: "/uploads/construction speciality/Wall Protection/Door Cladding.pdf",
            },
            {
              name: "Door Edge Protectors",
              file: "/uploads/construction speciality/Wall Protection/Door Edge Protectors.pdf",
            },
            {
              name: "Door Knob & Lever Protectors",
              file: "/uploads/construction speciality/Wall Protection/Door Knob & Lever Protectors.pdf",
            },
            {
              name: "ECR-6S 6SF",
              file: "/uploads/construction speciality/Wall Protection/ECR-6S 6SF.pdf",
            },
            {
              name: "ECR-20S",
              file: "/uploads/construction speciality/Wall Protection/ECR-20S.pdf",
            },
            {
              name: "ECR-32A Series",
              file: "/uploads/construction speciality/Wall Protection/ECR-32A Series.pdf",
            },
            {
              name: "ECR-32S Series",
              file: "/uploads/construction speciality/Wall Protection/ECR-32S Series.pdf",
            },
            {
              name: "ECR-60A Series",
              file: "/uploads/construction speciality/Wall Protection/ECR-60A Series.pdf",
            },
            {
              name: "ECR-60S Series",
              file: "/uploads/construction speciality/Wall Protection/ECR-60S Series.pdf",
            },
            {
              name: "Federal Rail FR-253",
              file: "/uploads/construction speciality/Wall Protection/Federal Rail FR-253.pdf",
            },
            {
              name: "FR-125",
              file: "/uploads/construction speciality/Wall Protection/FR-125.pdf",
            },
            {
              name: "FR-225",
              file: "/uploads/construction speciality/Wall Protection/FR-225.pdf",
            },
            {
              name: "FR-270",
              file: "/uploads/construction speciality/Wall Protection/FR-270.pdf",
            },
            {
              name: "French Cleat System Attachment",
              file: "/uploads/construction speciality/Wall Protection/French Cleat System Attachment.pdf",
            },
            {
              name: "FRW-225",
              file: "/uploads/construction speciality/Wall Protection/FRW-225.pdf",
            },
            {
              name: "FRW-260",
              file: "/uploads/construction speciality/Wall Protection/FRW-260.pdf",
            },
            {
              name: "FRW-270",
              file: "/uploads/construction speciality/Wall Protection/FRW-270.pdf",
            },
            {
              name: "FRW-451 451S 451V",
              file: "/uploads/construction speciality/Wall Protection/FRW-451 451S 451V.pdf",
            },
            {
              name: "FS-10",
              file: "/uploads/construction speciality/Wall Protection/FS-10.pdf",
            },
            {
              name: "FS-10R",
              file: "/uploads/construction speciality/Wall Protection/FS-10R.pdf",
            },
            {
              name: "FS-20",
              file: "/uploads/construction speciality/Wall Protection/FS-20.pdf",
            },
            {
              name: "FS-20R",
              file: "/uploads/construction speciality/Wall Protection/FS-20R.pdf",
            },
            {
              name: "FSC-25",
              file: "/uploads/construction speciality/Wall Protection/FSC-25.pdf",
            },
            {
              name: "HB-60B",
              file: "/uploads/construction speciality/Wall Protection/HB-60B.pdf",
            },
            {
              name: "HB-75D",
              file: "/uploads/construction speciality/Wall Protection/HB-75D.pdf",
            },
            {
              name: "HB-100D",
              file: "/uploads/construction speciality/Wall Protection/HB-100D.pdf",
            },
            {
              name: "HB-200W30",
              file: "/uploads/construction speciality/Wall Protection/HB-200W30.pdf",
            },
            {
              name: "HB-200W50",
              file: "/uploads/construction speciality/Wall Protection/HB-200W50.pdf",
            },
            {
              name: "HC75C",
              file: "/uploads/construction speciality/Wall Protection/HC75C.pdf",
            },
            {
              name: "HC100C",
              file: "/uploads/construction speciality/Wall Protection/HC100C.pdf",
            },
            {
              name: "HR-6CHRO-6",
              file: "/uploads/construction speciality/Wall Protection/HR-6CHRO-6.pdf",
            },
            {
              name: "HR-8C",
              file: "/uploads/construction speciality/Wall Protection/HR-8C.pdf",
            },
            {
              name: "HRB-4C",
              file: "/uploads/construction speciality/Wall Protection/HRB-4C.pdf",
            },
            {
              name: "HRB-10C",
              file: "client/uploads/construction speciality/Wall Protection/HRB-10C.pdf",
            },
            {
              name: "HRB-20",
              file: "/uploads/construction speciality/Wall Protection/HRB-20.pdf",
            },
            {
              name: "HRB-35",
              file: "/uploads/construction speciality/Wall Protection/HRB-35.pdf",
            },
            {
              name: "HRBW-10C",
              file: "/uploads/construction speciality/Wall Protection/HRBW-10C.pdf",
            },
            {
              name: "HRBW-20",
              file: "/uploads/construction speciality/Wall Protection/HRBW-20.pdf",
            },
            {
              name: "HRBW-35",
              file: "/uploads/construction speciality/Wall Protection/HRBW-35.pdf",
            },
            {
              name: "HRW-45",
              file: "/uploads/construction speciality/Wall Protection/HRW-45.pdf",
            },
            {
              name: "LG SERIES",
              file: "/uploads/construction speciality/Wall Protection/LG SERIES.pdf",
            },
            {
              name: "Neoclassic Rail FR-251",
              file: "/uploads/construction speciality/Wall Protection/Neoclassic Rail FR-251.pdf",
            },
            {
              name: "P-OA P-RA",
              file: "/uploads/construction speciality/Wall Protection/P-OA P-RA.pdf",
            },
            {
              name: "P-OAA  P-RAA",
              file: "/uploads/construction speciality/Wall Protection/P-OAA  P-RAA.pdf",
            },
            {
              name: "P-OAM  P-RAM",
              file: "/uploads/construction speciality/Wall Protection/P-OAM  P-RAM.pdf",
            },
            {
              name: "P-OAW  P-RAW",
              file: "/uploads/construction speciality/Wall Protection/P-OAW  P-RAW.pdf",
            },
            {
              name: "P-OM",
              file: "/uploads/construction speciality/Wall Protection/P-OM.pdf",
            },
            {
              name: "P-OMA",
              file: "/uploads/construction speciality/Wall Protection/P-OMA.pdf",
            },
            {
              name: "P-OMM",
              file: "/uploads/construction speciality/Wall Protection/P-OMM.pdf",
            },
            {
              name: "P-OMS",
              file: "/uploads/construction speciality/Wall Protection/P-OMS.pdf",
            },
            {
              name: "P-OMW",
              file: "/uploads/construction speciality/Wall Protection/P-OMW.pdf",
            },
            {
              name: "P-OW  P-RW",
              file: "/uploads/construction speciality/Wall Protection/P-OW  P-RW.pdf",
            },
            {
              name: "P-OWA  P-RWA",
              file: "/uploads/construction speciality/Wall Protection/P-OWA  P-RWA.pdf",
            },
            {
              name: "P-OWM  P-RWM",
              file: "/uploads/construction speciality/Wall Protection/P-OWM  P-RWM.pdf",
            },
            {
              name: "P-RAS  P-OAS",
              file: "/uploads/construction speciality/Wall Protection/P-RAS  P-OAS.pdf",
            },
            {
              name: "P-RS  P-OS",
              file: "/uploads/construction speciality/Wall Protection/P-RS  P-OS.pdf",
            },
            {
              name: "P-RSA P-OSA",
              file: "/uploads/construction speciality/Wall Protection/P-RSA P-OSA.pdf",
            },
            {
              name: "P-RSM  P-OSM",
              file: "/uploads/construction speciality/Wall Protection/P-RSM  P-OSM.pdf",
            },
            {
              name: "P-RSS  P-OSS",
              file: "/uploads/construction speciality/Wall Protection/P-RSS  P-OSS.pdf",
            },
            {
              name: "P-RSW  P-OSW",
              file: "/uploads/construction speciality/Wall Protection/P-RSW  P-OSW.pdf",
            },
            {
              name: "P-RWS P-OWS",
              file: "/uploads/construction speciality/Wall Protection/P-RWS P-OWS.pdf",
            },
            {
              name: "P-RWW P-OWW",
              file: "/uploads/construction speciality/Wall Protection/P-RWW P-OWW.pdf",
            },
            {
              name: "Polycarbonate Rubstrips",
              file: "/uploads/construction speciality/Wall Protection/Polycarbonate Rubstrips.pdf",
            },
            {
              name: "Renaissance Wood Wall Panel with Beveled Lumbered Edge",
              file: "/uploads/construction speciality/Wall Protection/Renaissance Wood Wall Panel with Beveled Lumbered Edge.pdf",
            },
            {
              name: "Renaissance Wood Wall Panel with Radius Lumbered Edge",
              file: "/uploads/construction speciality/Wall Protection/Renaissance Wood Wall Panel with Radius Lumbered Edge.pdf",
            },
            {
              name: "SCO-8",
              file: "/uploads/construction speciality/Wall Protection/SCO-8.pdf",
            },
            {
              name: "SCR BCR ECR-40",
              file: "/uploads/construction speciality/Wall Protection/SCR BCR ECR-40.pdf",
            },
            {
              name: "SCR BCR ECR-48",
              file: "/uploads/construction speciality/Wall Protection/SCR BCR ECR-48.pdf",
            },
            {
              name: "SCR BCR ECR-64",
              file: "/uploads/construction speciality/Wall Protection/SCR BCR ECR-64.pdf",
            },
            {
              name: "SCR BCR-50",
              file: "/uploads/construction speciality/Wall Protection/SCR BCR-50.pdf",
            },
            {
              name: "SCR BCR-80",
              file: "/uploads/construction speciality/Wall Protection/SCR BCR-80.pdf",
            },
            {
              name: "SCR-16SSP 16SSV",
              file: "/uploads/construction speciality/Wall Protection/SCR-16SSP 16SSV.pdf",
            },
            {
              name: "SFS-10",
              file: "/uploads/construction speciality/Wall Protection/SFS-10.pdf",
            },
            {
              name: "SFS-10R",
              file: "/uploads/construction speciality/Wall Protection/SFS-10R.pdf",
            },
            {
              name: "SFS-20",
              file: "/uploads/construction speciality/Wall Protection/SFS-20.pdf",
            },
            {
              name: "SFS-20R",
              file: "/uploads/construction speciality/Wall Protection/SFS-20R.pdf",
            },
            {
              name: "SM-10",
              file: "/uploads/construction speciality/Wall Protection/SM-10.pdf",
            },
            {
              name: "SM-20",
              file: "/uploads/construction speciality/Wall Protection/SM-20.pdf",
            },
            {
              name: "SM-20M",
              file: "/uploads/construction speciality/Wall Protection/SM-20M.pdf",
            },
            {
              name: "SMWS-10",
              file: "/uploads/construction speciality/Wall Protection/SMWS-10.pdf",
            },
            {
              name: "SMWS-20",
              file: "/uploads/construction speciality/Wall Protection/SMWS-20.pdf",
            },
            {
              name: "SSM-10 SSM-15",
              file: "/uploads/construction speciality/Wall Protection/SSM-10 SSM-15.pdf",
            },
            {
              name: "SSM-20 SSM-25",
              file: "/uploads/construction speciality/Wall Protection/SSM-20 SSM-25.pdf",
            },
            {
              name: "Stainless Steel Rubstrips",
              file: "/uploads/construction speciality/Wall Protection/Stainless Steel Rubstrips.pdf",
            },
            {
              name: "Sure Snap® System Attachment",
              file: "/uploads/construction speciality/Wall Protection/Sure Snap® System Attachment.pdf",
            },
            {
              name: "TFC  TFCH",
              file: "/uploads/construction speciality/Wall Protection/TFC  TFCH.pdf",
            },
            {
              name: "Tudor Rail FR-260 260V",
              file: "/uploads/construction speciality/Wall Protection/Tudor Rail FR-260 260V.pdf",
            },
            {
              name: "VA SERIES",
              file: "/uploads/construction speciality/Wall Protection/VA SERIES.pdf",
            },
            {
              name: "Victorian Rail FR-451",
              file: "/uploads/construction speciality/Wall Protection/Victorian Rail FR-451.pdf",
            },
          ],
        },
      ],
    },
  ]);

  const [cielingVendors, setCielingVendors] = useState([
    {
      name: "USG",
      subVendors: [
        {
          name: "Acoustical Ceiling Panels",
          products: [
            {
              name: "Mars™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-ceiling-panels-data-SC1966.pdf",
            },
            {
              name: "Mars™ Healthcare Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare Clean Room Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare High-CAC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare High-NRC/High-CAC (80/40) Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare with AirCare™ Coating Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ High-CAC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-high-nrc-ceiling-panels-data-SC2487.pdf",
            },
            {
              name: "Mars™ High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-high-nrc-ceiling-panels-data-SC2487.pdf",
            },
            {
              name: "Mars™ High-NRC Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
            {
              name: "Mars™ High-NRC/High-CAC (80/40) Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-high-nrc-ceiling-panels-data-SC2487.pdf",
            },
            {
              name: "Mars™ Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
            {
              name: "Halcyon™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
            {
              name: "Halcyon™ Canopies Acoustical Clouds",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-halcyon-climaplus-ceiling-panels-data-SC2365.pdf",
            },
            {
              name: "Halcyon™ Eco Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
            {
              name: "Halcyon™ Healthcare Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-halcyon-healthcare-datasheet-en-SC2652.pdf",
            },
            {
              name: "Halcyon™ Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/halcyon-climaplus-logix-panels-data-sheet-en-IS272.pdf",
            },
            {
              name: "Radar™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-ceiling-panels-data-SC2127.pdf",
            },
            {
              name: "Radar™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radar-basic-data-sheet-en-SC2288.pdf",
            },
            {
              name: "Radar™ Basic Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radar-basic-data-sheet-en-SC2288.pdf",
            },
            {
              name: "Radar™ Basic Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radar-basic-data-sheet-en-SC2288.pdf",
            },
            {
              name: "Radar™ Ceramic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-ceramic-climaplus-ceiling-panels-data-SC2293.pdf",
            },
            {
              name: "Radar™ Education Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-education-ceiling-panels-submittal-SC2514.pdf",
            },
            {
              name: "Radar™ Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-ceiling-panels-data-SC2127.pdf",
            },
            {
              name: "Radar™ Firecode® High-CAC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-high-cac-high-nrc-ceiling-panels-data-SC2290.pdf",
            },
            {
              name: "Radar™ Firecode® High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-high-cac-high-nrc-ceiling-panels-data-SC2290.pdf",
            },
            {
              name: "Radar™ Firecode® High-NRC/High-CAC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-high-cac-high-nrc-ceiling-panels-data-SC2290.pdf",
            },
            {
              name: "Radar™ High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-high-cac-high-nrc-ceiling-panels-data-SC2290.pdf",
            },
            {
              name: "Radar™ High-NRC/High-CAC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-high-cac-high-nrc-ceiling-panels-data-SC2290.pdf",
            },
            {
              name: "Radar™ Illusion™ Firecode® Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-illusion-ceiling-panels-data-SC2126.pdf",
            },
            {
              name: "Radar™ Illusion™ Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-illusion-ceiling-panels-data-SC2126.pdf",
            },
            {
              name: "Radar™ Open Plan Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-ceiling-panels-open-plan-data-SC2565.pdf",
            },
            {
              name: "Eclipse™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-eclipse-climaplus-ceiling-panels-data-SC1812.pdf",
            },
            {
              name: "Eclipse™ High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-eclipse-climaplus-ceiling-panels-data-SC1812.pdf",
            },
            {
              name: "Eclipse™ Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-eclipse-climaplus-illusion-pedestals-data-SC1846.pdf",
            },
            {
              name: "Renditions™ Animations Eclipse™ Face-Routed Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-rendition-animations-ceiling-panels-data-IC327.pdf",
            },
            {
              name: "Aspen™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-aspen-ceiling-panels-data-SC1809.pdf",
            },
            {
              name: "Aspen™ Basic Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-aspen-ceiling-panels-data-SC1809.pdf",
            },
            {
              name: "Astro® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-astro-climaplus-ceiling-panels-data-SC2321.pdf",
            },
            {
              name: "Astro® Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-astro-climaplus-ceiling-panels-data-SC2321.pdf",
            },
            {
              name: "Astro® Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-astro-climaplus-ceiling-panels-data-SC2321.pdf",
            },
            {
              name: "Clean Room™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-clean-room-climaplus-ceiling-panels-data-SC1811.pdf",
            },
            {
              name: "F Fissured™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-f-fissured-acoustic-ceiling-submittal-SC1816.pdf",
            },
            {
              name: "Fissured™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-fissured-ceiling-panels-data-SC1815.pdf",
            },
            {
              name: "Fissured™ Basic Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-fissured-ceiling-panels-data-SC1815.pdf",
            },
            {
              name: "Frost™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceilings-panels-data-sheet-SC1968.pdf",
            },
            {
              name: "Frost™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceiling-panels-data-SC1817.pdf",
            },
            {
              name: "Frost™ Basic Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceiling-panels-data-SC1817.pdf",
            },
            {
              name: "Frost™ High-LR Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceilings-panels-data-sheet-SC1968.pdf",
            },
            {
              name: "Glacier™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-glacier-ceiling-panels-data-SC1819.pdf",
            },
            {
              name: "Glacier™ Basic Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-glacier-ceiling-panels-data-SC1819.pdf",
            },
            {
              name: "Heradesign™ Wood Wool Direct Mount Wall and Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/heradesign-wood-wool-direct-mount-ceiling-panels-data-en-sc3260.pdf",
            },
            {
              name: "Heradesign™ Wood Wool Lay-in Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/heradesign-wood-wool-lay-in-ceiling-panels-data-en-sc3259.pdf",
            },
            {
              name: "Juno™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/juno-acoustial-panels-data-sheet-en-SC342598.pdf",
            },
            {
              name: "Kitchen Lay-In Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/kitchen-lay-in-acoustical-panels-data-en-sc3226.pdf",
            },
            {
              name: "Millennia® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-millenia-climaplus-ceiling-panels-data-SC1824.pdf",
            },
            {
              name: "Millennia® High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-millenia-climaplus-ceiling-panels-data-SC1824.pdf",
            },
            {
              name: "Millennia® Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-millenia-climaplus-ceiling-panels-data-SC1824.pdf",
            },
            {
              name: "Olympia™ Micro™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-olympia-micro-climaplus-ceiling-panels-data-SC2180.pdf",
            },
            {
              name: "Olympia™ Micro™ Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-olympia-micro-climaplus-ceiling-panels-data-SC2180.pdf",
            },
            {
              name: "Orion™ 60 Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-orion-datasheet-SC2648.pdf",
            },
            {
              name: "Orion™ 75 Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-orion-datasheet-SC2648.pdf",
            },
            {
              name: "Orion™ 85 Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-orion-datasheet-SC2648.pdf",
            },
            {
              name: "Pebbled™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-pebbled-climaplus-ceiling-panels-data-SC1836.pdf",
            },
            {
              name: "Premier Hi-Lite™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-premier-hi-lite-climaplus-ceiling-panels-data-SC1838.pdf",
            },
            {
              name: "Premier Nubby™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-premier-nubby-climaplus-ceiling-panels-data-SC1839.pdf",
            },
            {
              name: "Renditions™ Animations Frost™ Basic Face-Routed Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-rendition-animations-ceiling-panels-data-IC327.pdf",
            },
            {
              name: "Renditions™ Animations Frost™ Face-Routed Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-rendition-animations-ceiling-panels-data-IC327.pdf",
            },
            {
              name: "Renditions™ Boundaries Frost™ Basic Face-Routed Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-renditions-boundaries-ceiling-panels-data-IC332.pdf",
            },
            {
              name: "Renditions™ Boundaries Frost™ Face-Routed Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-renditions-customs-ceiling-panels-data-IC356.pdf",
            },
            {
              name: "Sandrift™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sandrift-climaplus-ceiling-panels-data-SC1841.pdf",
            },
            {
              name: "Sandrift™ Basic Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sandrift-climaplus-ceiling-panels-data-SC1841.pdf",
            },
            {
              name: "Sheetrock® Brand Clean Room Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Sheetrock® Brand Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Touchstone™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-touchstone-climaplus-ceiling-panels-data-SC2214.pdf",
            },
            {
              name: "Umbral™ Direct Mount Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-umbral-direct-mount-panels-data-en-ic307174.pdf",
            },
          ],
        },
        {
          name: "Drywall Ceilings",
          products: [
            {
              name: "Ensemble® Acoustical Drywall Ceiling direct mount system",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-acoustical-drywall-ceiling-system-direct-mount-system-en-SC3237.pdf",
            },
            {
              name: "Ensemble® Acoustical Drywall Ceiling suspended system",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-monolithic-ceiling-system-data-en-sc2791.pdf",
            },
            {
              name: "Sheetrock® Brand Clean Room Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Sheetrock® Brand Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
          ],
        },
        {
          name: "Metal Ceiling Panels",
          products: [
            {
              name: "Barz®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-colortex-barz-data-en-ic5412.pdf",
            },
            {
              name: "C2 Paired Compässo™ Channel Accents",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-c2-paired-compasso-trim-data-en-IC401.pdf",
            },
            {
              name: "Celebration™ Metal Canopies",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-celebration-canopies-data-sheet-en-IC631.pdf",
            },
            {
              name: "Celebration™ Snap-In Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-celebration-metal-ceiling-panels-data-IC308.pdf",
            },
            {
              name: "Celebration™ Torsion Spring System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/celebration-torsion-spring-specialty-metal-ceiling-panels-datasheet-IC622.pdf",
            },
            {
              name: "Compässo™ Suspension Trim",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-compasso-standard-perimeter-trims-data-en-IC5404.pdf",
            },
            {
              name: "Curvatura™ 3-Dimensional Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-curvatura-ceiling-panels-ic310.pdf",
            },
            {
              name: "Design Solutions - Barz®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-barz-data-en-IC776.pdf",
            },
            {
              name: "Design Solutions - Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/design-solutions-illusions-data-sheet-en-ic5487.pdf",
            },
            {
              name: "Geometrix® 3-Dimensional Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-geometrix-3d-metal-ceiling-panels-data-IC424.pdf",
            },
            {
              name: "Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/illusions-formed-metal-panel-system-data-en-IC5399.pdf",
            },
            {
              name: "Libretto® Gridless Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-libretto-data-en-IC526.pdf",
            },
            {
              name: "Panz® Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-panz-metal-ceiling-panels-data-IC314.pdf",
            },
            {
              name: "Paraline® Baffles Linear Ceiling System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-baffles-data-en-IC700.pdf",
            },
            {
              name: "Paraline® Linear Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-linear-metal-ceiling-panels-data-IC315.pdf",
            },
            {
              name: "Paraline® Plus Linear Metal Systems",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-plus-linear-metal-system-datasheet-en-IC724.pdf",
            },
            {
              name: "Pixels® Metal Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-pixels-metal-ceiling-panels-data-en-IC563.pdf",
            },
            {
              name: "Pixels® Wall Mounted Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/pixels-wall-mounted-panels-data-en-IC605.pdf",
            },
            {
              name: "Planx™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/planx-linear-metal-suspended-ceiling-system-data-en-IC5416.pdf",
            },
            {
              name: "Radians®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radians-curved-metal-panel-system-data-en-IC5410.pdf",
            },
            {
              name: "Wallforms™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
            {
              name: "WireWorks™ Open Cell Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-wireworks-open-cell-ceiling-panels-data-IC325.pdf",
            },
          ],
        },
        {
          name: "Translucent Panels",
          products: [
            {
              name: "Billo™ 3-Dimensional Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-billo-data-IC473.pdf",
            },
            {
              name: "Translucents™ Canopies",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-translucents-canopies-ceiling-panels-data-IC596.pdf",
            },
            {
              name: "Translucents™ Luminous Infill Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-translucents-luminous-infill-ceiling-panels-data-IC406.pdf",
            },
          ],
        },
        {
          name: "Wood Panels",
          products: [
            {
              name: "Barz®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-colortex-barz-data-en-ic5412.pdf",
            },
            {
              name: "Design Solutions - Barz®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-barz-data-en-IC776.pdf",
            },
            {
              name: "Design Solutions - Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/design-solutions-illusions-data-sheet-en-ic5487.pdf",
            },
            {
              name: "Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/illusions-formed-metal-panel-system-data-en-IC5399.pdf",
            },
            {
              name: "Planx™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/planx-linear-metal-suspended-ceiling-system-data-en-IC5416.pdf",
            },
            {
              name: "Radians®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radians-curved-metal-panel-system-data-en-IC5410.pdf",
            },
            {
              name: "True® Wood Grilles",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-true-wood-grilles-data-sheet-en-IC715.pdf",
            },
            {
              name: "True® Wood Linear Planks",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/true-wood-linear-planks-data-en-IC5409.pdf",
            },
            {
              name: "True® Wood Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-true-wood-data-en-IC558.pdf",
            },
            {
              name: "Wallforms™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
          ],
        },
        {
          name: "Acoustical Drywall",
          products: [
            {
              name: "Ensemble® Acoustical Drywall Ceiling direct mount system",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-acoustical-drywall-ceiling-system-direct-mount-system-en-SC3237.pdf",
            },
            {
              name: "Ensemble® Acoustical Drywall Ceiling suspended system",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-monolithic-ceiling-system-data-en-sc2791.pdf",
            },
            {
              name: "Sheetrock® Brand Clean Room Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Sheetrock® Brand Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
          ],
        },
        {
          name: "Baffles",
          products: [
            {
              name: "Barz® COLORTEX",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-colortex-barz-data-en-ic5412.pdf",
            },
            {
              name: "Barz® OPEN PLENUM MODULAR ACOUSTIC SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/barz-open-plenum-modular-acoustical-system-data-en-ic5411.pdf",
            },
            {
              name: "Barz® + Brilliance™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-barz-brilliance-data-en-ic307480.pdf",
            },
            {
              name: "Design Solutions - Barz®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-barz-data-en-IC776.pdf",
            },
            {
              name: "Design Solutions - Barz® + Brilliance",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-design-solutions-barz-brilliance-data-en-ic307329.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Barz® + Brilliance™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-colortex-barz-brilliance-data-en-ic349072.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Barz® Direct-Mount PET Baffles",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-design-solutions-colortex-barz-data-en-ic307335.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Barz® PET Baffles",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-colortex-barz-acoustic-panel-system-data-en-ic277037.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Blades Acoustic Linear Ceiling System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-colortex-blades-data-en-ic328635.pdf",
            },
            {
              name: "Paraline® Baffles Linear Ceiling System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-baffles-data-en-IC700.pdf",
            },
            {
              name: "True® Wood Grilles",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-true-wood-grilles-data-sheet-en-IC715.pdf",
            },
          ],
        },
        {
          name: "Curved Ceiling Panel Systems",
          products: [
            {
              name: "Curvatura™ 3-Dimensional Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-curvatura-ceiling-panels-ic310.pdf",
            },
            {
              name: "Libretto® Gridless Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-libretto-data-en-IC526.pdf",
            },
            {
              name: "Paraline® Linear Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-linear-metal-ceiling-panels-data-IC315.pdf",
            },
            {
              name: "Paraline® Plus Linear Metal Systems",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-plus-linear-metal-system-datasheet-en-IC724.pdf",
            },
            {
              name: "Radians®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radians-curved-metal-panel-system-data-en-IC5410.pdf",
            },
            {
              name: "Wallforms™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
          ],
        },
        {
          name: "Linear Ceiling Panels & Systems",
          products: [
            {
              name: "Barz® COLORTEX",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-colortex-barz-data-en-ic5412.pdf",
            },
            {
              name: "Barz® OPEN PLENUM MODULAR ACOUSTIC SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/barz-open-plenum-modular-acoustical-system-data-en-ic5411.pdf",
            },
            {
              name: "Design Solutions - Barz®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-barz-data-en-IC776.pdf",
            },
            {
              name: "Design Solutions - Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/design-solutions-illusions-data-sheet-en-ic5487.pdf",
            },
            {
              name: "Design Solutions - Planx™ Universal",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-planx-universal-data-en-ic349048.pdf",
            },
            {
              name: "Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/illusions-formed-metal-panel-system-data-en-IC5399.pdf",
            },
            {
              name: "Paraline® Baffles Linear Ceiling System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-baffles-data-en-IC700.pdf",
            },
            {
              name: "Paraline® Linear Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-linear-metal-ceiling-panels-data-IC315.pdf",
            },
            {
              name: "Planx™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/planx-linear-metal-suspended-ceiling-system-data-en-IC5416.pdf",
            },
            {
              name: "True® Wood Grilles",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-true-wood-grilles-data-sheet-en-IC715.pdf",
            },
            {
              name: "Wallforms™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
          ],
        },
        {
          name: "Modular Ceiling Panels",
          products: [
            {
              name: "Design Solutions - Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/design-solutions-illusions-data-sheet-en-ic5487.pdf",
            },
            {
              name: "Geometrix® 3-Dimensional Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-geometrix-3d-metal-ceiling-panels-data-IC424.pdf",
            },
            {
              name: "Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/illusions-formed-metal-panel-system-data-en-IC5399.pdf",
            },
            {
              name: "True® Wood Grilles",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-true-wood-grilles-data-sheet-en-IC715.pdf",
            },
          ],
        },
        {
          name: "Open Cell",
          products: [
            {
              name: "Design Solutions - Beamz™ Interconnected Baffles and Pods",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-beamz-data-en-ic328653.pdf",
            },
            {
              name: "Design Solutions - Expanse™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-design-solutions-expanse-data-en-ic307323.pdf",
            },
            {
              name: "GridWare™ Open Cell Decorative Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-gridware-open-cell-suspension-system-data-en-ic312.pdf",
            },
            {
              name: "WireWorks™ Open Cell Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-wireworks-open-cell-ceiling-panels-data-IC325.pdf",
            },
          ],
        },
        {
          name: "Planes",
          products: [
            {
              name: "Billo™ 3-Dimensional Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-billo-data-IC473.pdf",
            },
            {
              name: "Celebration™ Snap-In Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-celebration-metal-ceiling-panels-data-IC308.pdf",
            },
            {
              name: "Celebration™ Torsion Spring System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/celebration-torsion-spring-specialty-metal-ceiling-panels-datasheet-IC622.pdf",
            },
            {
              name: "Design Solutions - Illusions® + Glow™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-design-solutions-illusions-glow-data-en-ic321572.pdf",
            },
            {
              name: "Geometrix® 3-Dimensional Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-geometrix-3d-metal-ceiling-panels-data-IC424.pdf",
            },
            {
              name: "Illusions® + Glow™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-illusions-glow-data-en-ic321578.pdf",
            },
            {
              name: "Panz® Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-panz-metal-ceiling-panels-data-IC314.pdf",
            },
            {
              name: "Pixels® Metal Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-pixels-metal-ceiling-panels-data-en-IC563.pdf",
            },
            {
              name: "Translucents™ Luminous Infill Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-translucents-luminous-infill-ceiling-panels-data-IC406.pdf",
            },
            {
              name: "True® Wood Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-true-wood-data-en-IC558.pdf",
            },
          ],
        },
        {
          name: "Pods",
          products: [
            {
              name: "Halcyon™ Canopies Acoustical Clouds",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-halcyon-canopies-data-en-SC2797.pdf",
            },
            {
              name: "Celebration™ Metal Canopies",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-celebration-canopies-data-sheet-en-IC631.pdf",
            },
            {
              name: "Compositions® Decorative Clouds",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/compositions-decorative-clouds-data-en-IS282.pdf",
            },
            {
              name: "Design Solutions - Beamz™ Interconnected Baffles and Pods",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-beamz-data-en-ic328653.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Blades Acoustic Linear Ceiling System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-colortex-blades-data-en-ic328635.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Radialz",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-design-solutions-colortex-radialz-data-en-ic307317.pdf",
            },
            {
              name: "Design Solutions - Colortex™ Trimetrix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-plus-design-solutions-colortex-trimetrix-data-en-ic307305.pdf",
            },
            {
              name: "Libretto® Gridless Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-libretto-data-en-IC526.pdf",
            },
            {
              name: "Translucents™ Canopies",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-translucents-canopies-ceiling-panels-data-IC596.pdf",
            },
          ],
        },
        {
          name: "Direct Mount",
          products: [
            {
              name: "Heradesign™ Wood Wool Direct Mount Wall and Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/heradesign-wood-wool-direct-mount-ceiling-panels-data-en-sc3260.pdf",
            },
            {
              name: "Celebration™ Metal Canopies",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-umbral-direct-mount-panels-data-en-ic307174.pdf",
            },
            {
              name: "USG Drywall Suspension System - Direct Mount",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-flat-data-ac3117.pdf",
            },
          ],
        },
        {
          name: "Wall Mount",
          products: [
            {
              name: "Pixels® Wall Mounted Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/pixels-wall-mounted-panels-data-en-IC605.pdf",
            },
            {
              name: "Wallforms™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
          ],
        },
        {
          name: "Healthcare",
          products: [
            {
              name: "Mars™ Acoustical Panels",
              file: "Mars™ Healthcare Clean Room Acoustical Panels",
            },
            {
              name: "Mars™ Healthcare Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare Clean Room Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare with AirCare™ Coating Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ High-CAC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-high-nrc-ceiling-panels-data-SC2487.pdf",
            },
            {
              name: "Mars™ High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-high-nrc-ceiling-panels-data-SC2487.pdf",
            },
            {
              name: "Mars™ High-NRC Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
            {
              name: "Mars™ High-NRC/High-CAC (80/40) Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-high-nrc-ceiling-panels-data-SC2487.pdf",
            },
            {
              name: "Halcyon™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
            {
              name: "Halcyon™ Healthcare Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-halcyon-healthcare-datasheet-en-SC2652.pdf",
            },
            {
              name: "Halcyon™ Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/halcyon-climaplus-logix-panels-data-sheet-en-IS272.pdf",
            },
            {
              name: "Radar™ Ceramic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-ceramic-climaplus-ceiling-panels-data-SC2293.pdf",
            },
            {
              name: "Eclipse™ High-NRC Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-eclipse-climaplus-ceiling-panels-data-SC1812.pdf",
            },
            {
              name: "Clean Room™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-clean-room-climaplus-ceiling-panels-data-SC1811.pdf",
            },
            {
              name: "Frost™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceilings-panels-data-sheet-SC1968.pdf",
            },
            {
              name: "Millennia® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-millenia-climaplus-ceiling-panels-data-SC1824.pdf",
            },
            {
              name: "Orion™ 60 Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-orion-datasheet-SC2648.pdf",
            },
            {
              name: "Orion™ 75 Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-orion-datasheet-SC2648.pdf",
            },
            {
              name: "Orion™ 85 Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-orion-datasheet-SC2648.pdf",
            },
            {
              name: "Sheetrock® Brand Clean Room Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Sheetrock® Brand Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
          ],
        },
        {
          name: "Cleanroom",
          products: [
            {
              name: "Mars™ Healthcare Clean Room Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-healthcare-data-sheet-en-SC2585.pdf",
            },
            {
              name: "Mars™ Healthcare Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-clean-room-climaplus-ceiling-panels-data-SC1811.pdf",
            },
            {
              name: "Sheetrock® Brand Clean Room Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
          ],
        },
        {
          name: "Exterior Ceilings",
          products: [
            {
              name: "Barz® COLORTEX",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-colortex-barz-data-en-ic5412.pdf",
            },
            {
              name: "Barz® OPEN PLENUM MODULAR ACOUSTIC SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/barz-open-plenum-modular-acoustical-system-data-en-ic5411.pdf",
            },
            {
              name: "Celebration™ Snap-In Metal Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-celebration-metal-ceiling-panels-data-IC308.pdf",
            },
            {
              name: "Celebration™ Torsion Spring System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/celebration-torsion-spring-specialty-metal-ceiling-panels-datasheet-IC622.pdf",
            },
            {
              name: "Donn® Brand ZXLA™ 15/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-zxla-suspension-system-data-AC3029.pdf",
            },
            {
              name: "Drywall Suspension System - flat ceiling",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-flat-data-ac3117.pdf",
            },
            {
              name: "Drywall Suspension System - CURVED CEILINGS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-curved-data-ac3118.pdf",
            },
            {
              name: "Illusions®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/illusions-formed-metal-panel-system-data-en-IC5399.pdf",
            },
            {
              name: "Paraline® Linear Metal System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-linear-metal-ceiling-panels-data-IC315.pdf",
            },
            {
              name: "Paraline® Plus Linear Metal Systems",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-paraline-plus-linear-metal-system-datasheet-en-IC724.pdf",
            },
            {
              name: "Pixels® Metal Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-pixels-metal-ceiling-panels-data-en-IC563.pdf",
            },
            {
              name: "Planx™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/planx-linear-metal-suspended-ceiling-system-data-en-IC5416.pdf",
            },
            {
              name: "Radians®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radians-curved-metal-panel-system-data-en-IC5410.pdf",
            },
            {
              name: "Sheetrock® Brand Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Wallforms™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
          ],
        },
        {
          name: "Residential Ceiling Panels",
          products: [
            {
              name: "Mars™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-mars-climaplus-planks-ceiling-panels-data-SC2509.pdf",
            },
            {
              name: "Radar™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-education-ceiling-panels-submittal-SC2514.pdf",
            },
            {
              name: "Radar™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radar-basic-data-sheet-en-SC2288.pdf",
            },
            {
              name: "Radar™ Basic Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radar-basic-data-sheet-en-SC2288.pdf",
            },
            {
              name: "Radar™ Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-ceiling-panels-data-SC2127.pdf",
            },
            {
              name: "Radar™ Illusion™ Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-radar-climaplus-illusion-ceiling-panels-data-SC2126.pdf",
            },
            {
              name: "Eclipse™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-eclipse-climaplus-ceiling-panels-data-SC1812.pdf",
            },
            {
              name: "Eclipse™ Illusion™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-eclipse-climaplus-illusion-pedestals-data-SC1846.pdf",
            },
            {
              name: "Adobe™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/budget-mineral-fiber-panels-adobe-plateau-sierra-stonehurst-data-en.pdf",
            },
            {
              name: "Alpine™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/designer-medium-textured-panels-alpine-majestic-moonscape-olympia-micro-saville-row-data-en.pdf",
            },
            {
              name: "Arctic™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/designer-cast-panels-arctic-cheyenne-frost-glacier-sandrift-data-en.pdf",
            },
            {
              name: "Astro® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-astro-climaplus-ceiling-panels-data-SC2321.pdf",
            },
            {
              name: "Chambray™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberglass-panels-chambray-tabaret-data-en.pdf",
            },
            {
              name: "Cheyenne™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/designer-cast-panels-arctic-cheyenne-frost-glacier-sandrift-data-en.pdf",
            },
            {
              name: "Custom White & Wood Fiber Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/budget-wood-fiber-panels-custom-white-lace-orleans-tivoli-data-en.pdf",
            },
            {
              name: "Fifth Avenue™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/classic-fissured-panels-fifth-avenue-radar-data-en.pdf",
            },
            {
              name: "Fifth Avenue™ Firecode® Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/classic-fissured-panels-fifth-avenue-radar-data-en.pdf",
            },
            {
              name: "Frost™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceilings-panels-data-sheet-SC1968.pdf",
            },
            {
              name: "Frost™ High-LR Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-frost-ceilings-panels-data-sheet-SC1968.pdf",
            },
            {
              name: "Glacier™ Basic Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-glacier-ceiling-panels-data-SC1819.pdf",
            },
            {
              name: "Luna™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/designer-fine-textured-panels-astro-eclipse-galaxy-luna-mars-data-en.pdf",
            },
            {
              name: "Majestic™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/designer-medium-textured-panels-alpine-majestic-moonscape-olympia-micro-saville-row-data-en.pdf",
            },
            {
              name: "Olympia™ Micro™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-olympia-micro-climaplus-ceiling-panels-data-SC2180.pdf",
            },
            {
              name: "Plateau™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/budget-mineral-fiber-panels-adobe-plateau-sierra-stonehurst-data-en.pdf",
            },
            {
              name: "Sandrift™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sandrift-climaplus-ceiling-panels-data-SC1841.pdf",
            },
            {
              name: "Saville Row™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/designer-medium-textured-panels-alpine-majestic-moonscape-olympia-micro-saville-row-data-en.pdf",
            },
            {
              name: "Sheetrock® Brand Lay-in Gypsum Ceiling Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-lay-in-ceiling-panel-climaplus-data-SC1820.pdf",
            },
            {
              name: "Sierra™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/budget-mineral-fiber-panels-adobe-plateau-sierra-stonehurst-data-en.pdf",
            },
            {
              name: "Stonehurst™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/budget-mineral-fiber-panels-adobe-plateau-sierra-stonehurst-data-en.pdf",
            },
            {
              name: "Superpanel™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/special-use-panels-superpanel-sheetrock-lay-in-gypsum-data-en.pdf",
            },
            {
              name: "Tabaret™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/fiberglass-panels-chambray-tabaret-data-en.pdf",
            },
            {
              name: "Tivoli™ Class C Wood-Fiber Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/budget-wood-fiber-panels-custom-white-lace-orleans-tivoli-data-en.pdf",
            },
          ],
        },
        {
          name: "Acoustical Suspension Systems",
          products: [
            {
              name: "Donn® Brand AdvanceSpan™ Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-donn-brand-advancespan-dxas-dxtas-acoustical-suspension-system-datasheet-en-AC3324.pdf",
            },
            {
              name: "Donn® Brand AX™/AXCE™ 15/16'' Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-ax-suspension-system-data-AC3041.pdf",
            },
            {
              name: "Donn® Brand Centricitee™ DXT™/DXLT™ 9/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-centricitee-dxt-dxlt-suspension-system-data-AC3040.pdf",
            },
            {
              name: "Donn® Brand CE™ Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-ce-suspension-system-data-AC3129.pdf",
            },
            {
              name: "Donn® Brand DXLA™/DXACE ™ 15/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-dxla-suspension-system-data-AC3036.pdf",
            },
            {
              name: "Donn® Brand DXSS™ Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-dxss-suspension-system-data-AC3068.pdf",
            },
            {
              name: "Donn® Brand DXW™ 1-1/2 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-dxw-acoustical-suspension-system-data-sheet-en-us-AC3037.pdf",
            },
            {
              name: "Donn® Brand DX®/DXL™ 15/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-dx-dxl-suspension-system-data-AC3167.pdf",
            },
            {
              name: "Donn® Brand DX®/DXL™ Concealed Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-dx-dxl-concealed-suspension-system-data-AC3035.pdf",
            },
            {
              name: "Donn® Brand Fineline® 1/8 DXFF™ 9/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-fineline-1-8-dxff-suspension-system-data-AC3033.pdf",
            },
            {
              name: "Donn® Brand Fineline® DXF™/DXLF™ 9/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-fineline-DXFEV-data-submittal-en-AC3304.pdf",
            },
            {
              name: "Donn® Brand Identitee® DXI™ Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-identitee-dxi-suspension-system-data-en-AC3281.pdf",
            },
            {
              name: "Donn® Brand ZXLA™ 15/16 Acoustical Suspension System",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-zxla-suspension-system-data-AC3029.pdf",
            },
          ],
        },
        {
          name: "Drywall Grid Systems",
          products: [
            {
              name: "Drywall Suspension System - flat ceiling",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-flat-data-ac3117.pdf",
            },
            {
              name: "Drywall Suspension System - CURVED CEILINGS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-curved-data-ac3118.pdf",
            },
            {
              name: "Drywall Suspension System - Stucco/Plaster/EIFS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-stucco-plaster-eifs-data-ac307560.pdf",
            },
            {
              name: "Drywall Suspension System - Wall-to-Wall",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-wall-to-wall-suspension-system-data-ac3230.pdf",
            },
            {
              name: "USG Drywall Suspension System - Direct Mount",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-drywall-suspension-system-flat-data-ac3117.pdf",
            },
          ],
        },
        {
          name: "Trim and Components",
          products: [
            {
              name: "C2 Paired Compässo™ Channel Accents",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-c2-paired-compasso-trim-data-en-IC401.pdf",
            },
            {
              name: "Compässo™ Elite Ceiling Suspension Trim FOR DRYWALL EXTRUDED PERIMETER TRIMS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-compasso-elite-for-drywall-extruded-perimeter-trim-datasheet-en-AC3317.pdf",
            },
            {
              name: "Compässo™ Elite Ceiling Suspension Trim FOR DRYWALL EXTRUDED ALUMINUM PERIMETER TRIMS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-compasso-data-en-IC309.pdf",
            },
            {
              name: "Compässo™ Elite Transitions",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ceilings-compasso-elite-transitions-datasheet-IC623.pdf",
            },
            {
              name: "Compässo™ Slim Perimeter Trim",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-compasso-slim-data-en-IC538.pdf",
            },
            {
              name: "Compässo™ Suspension Trim",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-compasso-standard-perimeter-trims-data-en-IC5404.pdf",
            },
          ],
        },
        {
          name: "Suspension System Moldings & Accessories",
          products: [
            {
              name: "Suspension Systems Donn® 2-Way Seismic Separation Joint Clip",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-dh2-two-way-seismic-separation-joint-clip-data-en-AC3301.pdf",
            },
            {
              name: "USG DONN® BRAND M7 OVERLAPPING WALL ANGLE ",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/m7-overlapping-wall-angle-data-AC3270.pdf",
            },
            {
              name: "Suspension Systems Donn® ACM7 Seismic Clip",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/seismic-ACM7-clip-submittal-AC3269.pdf",
            },
            {
              name: "USG SUSPENSION SYSTEMS ACCESSORIES—MOLDINGS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-suspension-systems-accessory-data-AC2396.pdf",
            },
            {
              name: " Suspension Systems Donn® SB2 Adjustable Wall Molding Bracket",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-suspension-systems-sb2-adjustable-wall-molding-bracket-submittal-en-AC3280.pdf",
            },
            {
              name: "Donn ® Suspension Systems Description 4-Way Seismic Separation Joint Clip",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/seismic-4-way-expansion-joint-clip-submittal-AC3271.pdf",
            },
            {
              name: "Donn® Brand Acoustical Suspension System Moldings",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-suspension-systems-accessory-data-AC2396.pdf",
            },
            {
              name: "Donn® Brand Transition Molding",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-transition-molding-data-sheet-en-AC3315.pdf",
            },
            {
              name: "TSB-24 Ceiling Cloud Suspension Brace",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/donn-suspension-systems-accessory-data-AC2396.pdf",
            },
          ],
        },
        {
          name: "Ensemble® Acoustical Drywall Ceiling (COMBINED)",
          products: [
            {
              name: "USG ENSEMBLE® ACOUSTICAL  DRYWALL CEILING—SUSPENDED SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-monolithic-ceiling-system-data-en-sc2791.pdf",
            },
            {
              name: "USG ENSEMBLE® ACOUSTICAL  DRYWALL CEILING—DIRECT MOUNT SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-acoustical-drywall-ceiling-system-direct-mount-system-en-SC3237.pdf",
            },
            {
              name: "USG ENSEMBLE® ACOUSTICAL  DRYWALL—DIRECT MOUNT WALL SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-acoustical-drywall-direct-mount-system-en-SC3238.pdf",
            },
            {
              name: "USG COMPÄSSO™ ELITE FOR USG ENSEMBLE® ACOUSTICAL DRYWALL CEILING SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-compasso-elite-for-usg-ensemble-acoustical-drywall-ceiling-data-sheet-en-AC290391.pdf",
            },
            {
              name: "USG SHEETROCK® BRAND  ENSEMBLE™ COMPOUND CEILING",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-ensemble-ceiling-compound-submittal-en-sc5025.pdf",
            },
            {
              name: "USG ENSEMBLE™ SPRAY-APPLIED FINISH",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-fine-textured-spray-applied-finish-submittal-en-SC2863.pdf",
            },
            {
              name: " ACOUSTICAL DRYWALL CEILING– DIRECT MOUNT SYSTEM, RETURN AIR PLENUM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-acoustical-drywall-direct-mount-return-air-plenum-data-en-SC281069.pdf",
            },
            {
              name: "ENSEMBLE® ACOUSTICAL  DRYWALL CEILING—CURVED SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/ensemble-curved-ceiling-system-data-en-SC3264.pdf",
            },
            {
              name: "USG ENSEMBLE™ SPRAY-APPLIED FINISH",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-ensemble-spray-applied-finish-custom-color-submittal-en-sc5446.pdf",
            },
          ],
        },
        {
          name: "Logix™ Integrated System(COMBINED)",
          products: [
            {
              name: "USG MARS™/MARS™ HIGH-NRC LOGIX™ ACOUSTICAL PANELS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
            {
              name: " LOGIX™ SUSPENSION SYSTEMS, ACCESSORIES, USG PANZ® METAL PANELS AND CONNECTOR PANELS ",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/logix-integrated-ceilings-data-en-IS283.pdf",
            },
            {
              name: "LOGIX™ INTEGRATED CEILING SYSTEMS USG UTILITY MODULE BRACKET",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-logix-brand-submittal-AC3308.pdf",
            },
            {
              name: "HALCYON™ LOGIX™ ACOUSTICAL PANELS",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/halcyon-climaplus-logix-panels-data-sheet-en-IS272.pdf",
            },
          ],
        },
        {
          name: "Halcyon™ Logix™ Acoustical Panels(COMBINED)",
          products: [
            {
              name: "Halcyon™ Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/halcyon-climaplus-logix-panels-data-sheet-en-IS272.pdf",
            },
          ],
        },
        {
          name: "Mars™ Logix™ Acoustical Panels(COMBINED)",
          products: [
            {
              name: "Mars™ Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
          ],
        },
        {
          name: "Mars™ High-NRC Logix™ Acoustical Panels(COMBINED)",
          products: [
            {
              name: "Mars™ Logix™ Acoustical Panels",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/mars-climaplus-logix-panels-data-sheet-en-IS274.pdf",
            },
          ],
        },
        {
          name: "Ceilings Plus | Radians®",
          products: [
            {
              name: "USG Ceilings Plus® RADIANS® CURVED METAL CEILING SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/radians-curved-metal-panel-system-data-en-IC5410.pdf",
            },
          ],
        },
        {
          name: "Ceilings Plus | Illusions®",
          products: [
            {
              name: "USG Ceilings Plus® ILLUSIONS® FORMED METAL PANEL SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/illusions-formed-metal-panel-system-data-en-IC5399.pdf",
            },
          ],
        },
        {
          name: "Ceilings Plus | Barz®",
          products: [
            {
              name: "Barz® COLORTEX",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-colortex-barz-data-en-ic5412.pdf",
            },
            {
              name: "Barz® OPEN PLENUM MODULAR ACOUSTIC SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/barz-open-plenum-modular-acoustical-system-data-en-ic5411.pdf",
            },
          ],
        },
        {
          name: "Ceilings Plus | Planx™",
          products: [
            {
              name: "USG Ceilings Plus® PLANX™",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/planx-linear-metal-suspended-ceiling-system-data-en-IC5416.pdf",
            },
          ],
        },
        {
          name: "Design Solutions - Barz®",
          products: [
            {
              name: "USG Ceilings Plus® Design Solutions-BARZ®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-barz-data-en-IC776.pdf",
            },
          ],
        },
        {
          name: "Ceilings Plus | Wallforms™",
          products: [
            {
              name: "USG Ceilings Plus® WALLFORMS™ FORMED WALL PANEL SYSTEM",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/wallforms-formed-wall-panel-system-data-en-IC5415.pdf",
            },
          ],
        },
        {
          name: "Design Solutions - Barz®",
          products: [
            {
              name: "USG Ceilings Plus® Design Solutions-BARZ®",
              file: "https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-design-solutions-barz-data-en-IC776.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "Armstrong World Industries",
      subVendors: [
        {
          name: "​​Mineral Fiber and Fiberglass Ceiling Tiles",
          products: [
            {
              name: "CALLA HEALTH ZONE AIRASSURE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/calla-health-zone-airassure-data-sheet.pdf",
            },
            {
              name: "ULTIMA Lay-In and Tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ultima-square-lay-in.pdf",
            },
            {
              name: "ULTIMA HEALTH ZONE AIRASSURE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ultima-health-zone-airassure-data-sheet.pdf",
            },
            {
              name: "SCHOOL ZONE FINE FISSURED AIRASSURE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/school-zone-fine-fissured-airassure-data-sheet.pdf",
            },
            {
              name: "OPTIMA Concealed",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/optima-concealed-data-sheet.pdf",
            },
            {
              name: "LYRA Plant Based",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/lyra-pb-tegular.pdf",
            },
            {
              name: "LYRA Concealed",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/lyra-concealed.pdf",
            },
            {
              name: "LYRA VECTOR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/lyra-vector.pdf",
            },
            {
              name: "INVISACOUSTICS",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/invisacoustics-data-sheet.pdf",
            },
            {
              name: "LYRA PB Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/lyra-pb-shapes-for-designflex.pdf",
            },
            {
              name: "ACOUSTIBUILT Seamless Acoustical Ceiling System",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/acoustibuilt-data-sheet.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/soundscapes-shapes-data-sheet.pdf",
            },
            {
              name: "CALLA",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/calla-square-lay-in.pdf",
            },
            {
              name: "CALLA Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/calla-shapes-for-designflex.pdf",
            },
            {
              name: "ARMATUFF",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ARMATUFF.pdf",
            },
            {
              name: "BACKSTAGE NOIR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/BACKSTAGE NOIR.pdf",
            },
            {
              name: "CALLA for DYNAMAX plus",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CALLA for DYNAMAX plus.pdf",
            },
            {
              name: "CALLA for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CALLA for DYNAMAX.pdf",
            },
            {
              name: "CALLA High CAC",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CALLA High CAC.pdf",
            },
            {
              name: "CALLA High NRC",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CALLA High NRC.pdf",
            },
            {
              name: "CALLA PRIVASSURE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CALLA PRIVASSURE.pdf",
            },
            {
              name: "CALLA VECTOR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CALLA VECTOR.pdf",
            },
            {
              name: "Calla Health Zone",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/calla-health-zone.pdf",
            },
            {
              name: "CANYON",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CANYON.pdf",
            },
            {
              name: "CERAMAGUARD FINE FISSURED",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CERAMAGUARD FINE FISSURED.pdf",
            },
            {
              name: "CERAMAGUARD",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CERAMAGUARD.pdf",
            },
            {
              name: "CIRRUS Profiles",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CIRRUS Profiles.pdf",
            },
            {
              name: "CIRRUS SECOND LOOK",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CIRRUS SECOND LOOK.pdf",
            },
            {
              name: "CIRRUS Square Lay-in",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CIRRUS Square Lay-in.pdf",
            },
            {
              name: "CIRRUS Tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CIRRUS Tegular.pdf",
            },
            {
              name: "CIRRUS THEMES",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CIRRUS THEMES.pdf",
            },
            {
              name: "CIRRUS® High NRC  square lay in",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CIRRUS® High NRC  square lay in.pdf",
            },
            {
              name: "CLEAN ROOM FL",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CLEAN ROOM FL.pdf",
            },
            {
              name: "CLEAN ROOM VL",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CLEAN ROOM VL.pdf",
            },
            {
              name: "CORTEGA SECOND LOOK",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CORTEGA SECOND LOOK.pdf",
            },
            {
              name: "CORTEGA",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/CORTEGA.pdf",
            },
            {
              name: "DESIGNER",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/DESIGNER.pdf",
            },
            {
              name: "DESIGNSTACKZ Ceiling System",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/DESIGNSTACKZ Ceiling System.pdf",
            },
            {
              name: "DUNE for DYNAMAX plus",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/DUNE for DYNAMAX plus.pdf",
            },
            {
              name: "DUNE for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/DUNE for DYNAMAX.pdf",
            },
            {
              name: "DUNE SECOND LOOK",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/DUNE SECOND LOOK.pdf",
            },
            {
              name: "DUNE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/DUNE.pdf",
            },
            {
              name: "FINE FISSURED for DYNAMAX PLUS",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED for DYNAMAX PLUS.pdf",
            },
            {
              name: "FINE FISSURED for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED for DYNAMAX.pdf",
            },
            {
              name: "FINE FISSURED High NRC SQUARE LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED High NRC SQUARE LAY IN.pdf",
            },
            {
              name: "FINE FISSURED High NRC TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED High NRC TEGULAR.pdf",
            },
            {
              name: "FINE FISSURED SECOND LOOK",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED SECOND LOOK.pdf",
            },
            {
              name: "FINE FISSURED Square Lay-in",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED Square Lay-in.pdf",
            },
            {
              name: "FINE FISSURED Tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED Tegular.pdf",
            },
            {
              name: "FINE FISSURED TILE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FINE FISSURED TILE.pdf",
            },
            {
              name: "FISSURED",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/FISSURED.pdf",
            },
            {
              name: "GEORGIAN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/GEORGIAN.pdf",
            },
            {
              name: "GRAPHIS FINETEX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/GRAPHIS FINETEX.pdf",
            },
            {
              name: "GRAPHIS RUSTEX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/GRAPHIS RUSTEX.pdf",
            },
            {
              name: "Infill Panels",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/Infill Panels.pdf",
            },
            {
              name: "IRRUS High NRC tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/IRRUS High NRC tegular.pdf",
            },
            {
              name: "KITCHEN ZONE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/KITCHEN ZONE.pdf",
            },
            {
              name: "LEDGES",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/LEDGES.pdf",
            },
            {
              name: "LYRA CAPZ",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/LYRA CAPZ.pdf",
            },
            {
              name: "LYRA PB Direct Apply",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/LYRA PB Direct Apply.pdf",
            },
            {
              name: "MESA SECOND LOOK",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/MESA SECOND LOOK.pdf",
            },
            {
              name: "MESA",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/MESA.pdf",
            },
            {
              name: "OPTIMA CAPZ",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA CAPZ.pdf",
            },
            {
              name: "OPTIMA CREATE!",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA CREATE!.pdf",
            },
            {
              name: "OPTIMA HEALTH ZONE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA HEALTH ZONE.pdf",
            },
            {
              name: "OPTIMA Lay-In",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA Lay-In.pdf",
            },
            {
              name: "OPTIMA PB Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA PB Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "OPTIMA PB VECTOR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA PB VECTOR.pdf",
            },
            {
              name: "OPTIMA Plant Based LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA Plant Based LAY IN.pdf",
            },
            {
              name: "OPTIMA Plant Based TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA Plant Based TEGULAR.pdf",
            },
            {
              name: "OPTIMA Tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/OPTIMA Tegular.pdf",
            },
            {
              name: "PAINTED NUBBY",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/PAINTED NUBBY.pdf",
            },
            {
              name: "PEBBLE",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/PEBBLE.pdf",
            },
            {
              name: "PUEBLO Lay-In and Tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/PUEBLO Lay-In and Tegular.pdf",
            },
            {
              name: "RANDOM FISSURED",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/RANDOM FISSURED.pdf",
            },
            {
              name: "SCHOOL ZONE FINE FISSURED",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/SCHOOL ZONE FINE FISSURED.pdf",
            },
            {
              name: "SHASTA",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/SHASTA.pdf",
            },
            {
              name: "SOUNDSCAPES Basics",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/SOUNDSCAPES Basics.pdf",
            },
            {
              name: "SOUNDSCAPES Blades – Wood Looks",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/SOUNDSCAPES Blades – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Blades",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/SOUNDSCAPES Blades.pdf",
            },
            {
              name: "TECHZONE with CALLA Field Panels LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with CALLA Field Panels LAY IN.pdf",
            },
            {
              name: "TECHZONE with CALLA Field Panels TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with CALLA Field Panels TEGULAR.pdf",
            },
            {
              name: "TECHZONE with LYRA PB Field Panels HIGH CAC SQUARE LAY IN & TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with LYRA PB Field Panels HIGH CAC SQUARE LAY IN & TEGULAR.pdf",
            },
            {
              name: "TECHZONE with LYRA PB Field Panels SQUARE LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with LYRA PB Field Panels SQUARE LAY IN.pdf",
            },
            {
              name: "TECHZONE with LYRA PB Field Panels TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with LYRA PB Field Panels TEGULAR.pdf",
            },
            {
              name: "TECHZONE with OPTIMA Technical Panels SQUARE LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with OPTIMA Technical Panels SQUARE LAY IN.pdf",
            },
            {
              name: "TECHZONE with OPTIMA Technical Panels TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TECHZONE with OPTIMA Technical Panels TEGULAR.pdf",
            },
            {
              name: "TINCRAFT",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TINCRAFT.pdf",
            },
            {
              name: "TUNDRA",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/TUNDRA.pdf",
            },
            {
              name: "ULTIMA AIRASSURE for DYNAMAX PLUS",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA AIRASSURE for DYNAMAX PLUS.pdf",
            },
            {
              name: "ULTIMA AIRASSURE for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA AIRASSURE for DYNAMAX.pdf",
            },
            {
              name: "ULTIMA CREATE!",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA CREATE!.pdf",
            },
            {
              name: "ULTIMA for DYNAMAX PLUS",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA for DYNAMAX PLUS.pdf",
            },
            {
              name: "ULTIMA for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA for DYNAMAX.pdf",
            },
            {
              name: "ULTIMA HEALTH ZONE CREATE!",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA HEALTH ZONE CREATE!.pdf",
            },
            {
              name: "ULTIMA HEALTH ZONE Square Lay-in",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA HEALTH ZONE Square Lay-in.pdf",
            },
            {
              name: "ULTIMA HEALTH ZONE Tegular",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA HEALTH ZONE Tegular.pdf",
            },
            {
              name: "ULTIMA High NRC SQUARE LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA High NRC SQUARE LAY IN.pdf",
            },
            {
              name: "ULTIMA High NRC TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA High NRC TEGULAR.pdf",
            },
            {
              name: "ULTIMA Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "ULTIMA VECTOR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA VECTOR.pdf",
            },
            {
              name: "ULTIMA with AIRGUARD Coating SQUARE LAY IN",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA with AIRGUARD Coating SQUARE LAY IN.pdf",
            },
            {
              name: "ULTIMA with AIRGUARD Coating TEGULAR",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/ULTIMA with AIRGUARD Coating TEGULAR.pdf",
            },
            {
              name: "VL",
              file: "/uploads/Armstrong World Industries/Mineral Fiber & Fiberglass Ceilings/VL.pdf",
            },
          ],
        },
        {
          name: "ACOUSTIBUILT Seamless Acoustical Ceiling System",
          products: [
            {
              name: "ACOUSTIBUILT",
              file: "/uploads/Armstrong World Industries/ACOUSTIBUILT Seamless Acoustical Ceiling System/acoustibuilt-data-sheet.pdf",
            },
            {
              name: "AXIOM Knife Edge",
              file: "/uploads/Armstrong World Industries/ACOUSTIBUILT Seamless Acoustical Ceiling System/AXIOM Knife Edge.pdf",
            },
            {
              name: "Drywall Grid Linear Lighting",
              file: "/uploads/Armstrong World Industries/ACOUSTIBUILT Seamless Acoustical Ceiling System/Drywall Grid Linear Lighting.pdf",
            },
            {
              name: "SIMPLESOFFIT",
              file: "/uploads/Armstrong World Industries/ACOUSTIBUILT Seamless Acoustical Ceiling System/SIMPLESOFFIT.pdf",
            },
            {
              name: "VIDASHIELD UV24 Air Purification System",
              file: "/uploads/Armstrong World Industries/ACOUSTIBUILT Seamless Acoustical Ceiling System/VIDASHIELD UV24 Air Purification System.pdf",
            },
          ],
        },
        {
          name: "Direct-Attach Walls",
          products: [
            {
              name: "FELTWORKS Acoustical Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/FELTWORKS Acoustical Wall Panels.pdf",
            },
            {
              name: "SOUNDSCAPES Blades Walls – Wood Looks",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/SOUNDSCAPES Blades Walls – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Blades Walls",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/SOUNDSCAPES Blades Walls.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/SOUNDSCAPES Shapes Wall Panels.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes Walls – Wood Looks",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/SOUNDSCAPES Shapes Walls – Wood Looks.pdf",
            },
            {
              name: "TECTUM CREATE! Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM CREATE! Wall Panels.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines Direct-Attach Walls",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM DESIGNART - Lines Direct-Attach Walls.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines High NRC Walls",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM DESIGNART - Lines High NRC Walls.pdf",
            },
            {
              name: "TECTUM DESIGNART - Shapes Direct-Attach Walls",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM DESIGNART - Shapes Direct-Attach Walls.pdf",
            },
            {
              name: "TECTUM Direct-Attach Walls",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM Direct-Attach Walls.pdf",
            },
            {
              name: "TECTUM FINALE PB Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM FINALE PB Wall Panels.pdf",
            },
            {
              name: "TECTUM FINALE Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM FINALE Wall Panels.pdf",
            },
            {
              name: "TECTUM High NRC Direct-Attach Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/TECTUM High NRC Direct-Attach Wall Panels.pdf",
            },
            {
              name: "WOODWORKS Grille - Forté Solid Wall Panels",
              file: "/uploads/Armstrong World Industries/Direct-Attach Walls/WOODWORKS Grille - Forté Solid Wall Panels.pdf",
            },
          ],
        },
        {
          name: "CASTWORKS Architectural Forms",
          products: [
            {
              name: "CASTWORKS Access Panels",
              file: "/uploads/Armstrong World Industries/CASTWORKS Architectural Forms/CASTWORKS Access Panels.pdf",
            },
            {
              name: "CASTWORKS Column Covers",
              file: "/uploads/Armstrong World Industries/CASTWORKS Architectural Forms/CASTWORKS Column Covers.pdf",
            },
            {
              name: "CASTWORKS GRG GFRG architectural forms",
              file: "/uploads/Armstrong World Industries/CASTWORKS Architectural Forms/CASTWORKS GRG GFRG architectural forms.pdf",
            },
            {
              name: "CASTWORKS Interior Domes",
              file: "/uploads/Armstrong World Industries/CASTWORKS Architectural Forms/CASTWORKS Interior Domes.pdf",
            },
            {
              name: "CASTWORKS METAPHORS Ceiling Panels",
              file: "/uploads/Armstrong World Industries/CASTWORKS Architectural Forms/CASTWORKS METAPHORS Ceiling Panels.pdf",
            },
            {
              name: "CASTWORKS METAPHORS Coffers",
              file: "/uploads/Armstrong World Industries/CASTWORKS Architectural Forms/CASTWORKS METAPHORS Coffers.pdf",
            },
          ],
        },
        {
          name: "Felt Ceilings",
          products: [
            {
              name: "FELTWORKS Acoustical Ceiling Panels",
              file: "/uploads/Armstrong World Industries/Felt Ceilings/FELTWORKS Acoustical Ceiling Panels.pdf",
            },
            {
              name: "FELTWORKS Blades - HookOn Ebbs & Flows Kits",
              file: "/uploads/Armstrong World Industries/Felt Ceilings/FELTWORKS Blades - HookOn Ebbs & Flows Kits.pdf",
            },
            {
              name: "FELTWORKS Blades - HookOn Peaks & Valleys Kits",
              file: "/uploads/Armstrong World Industries/Felt Ceilings/FELTWORKS Blades - HookOn Peaks & Valleys Kits.pdf",
            },
            {
              name: "FELTWORKS Blades - VARAFFIX Reinforced Rectangular",
              file: "/uploads/Armstrong World Industries/Felt Ceilings/FELTWORKS Blades - VARAFFIX Reinforced Rectangular.pdf",
            },
            {
              name: "FELTWORKS Open Cell Wall-to-Wall Ceiling",
              file: "/uploads/Armstrong World Industries/Felt Ceilings/FELTWORKS Open Cell Wall-to-Wall Ceiling.pdf",
            },
            {
              name: "FELTWORKS Open Cell",
              file: "/uploads/Armstrong World Industries/Felt Ceilings/FELTWORKS Open Cell.pdf",
            },
          ],
        },
        {
          name: "METAL Ceilings",
          products: [
            {
              name: "METAL FASTTRACK",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METAL FASTTRACK.pdf",
            },
            {
              name: "METALWORKS 3D",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS 3D.pdf",
            },
            {
              name: "METALWORKS Blades - Classics",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Blades - Classics.pdf",
            },
            {
              name: "METALWORKS Canopies",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Canopies.pdf",
            },
            {
              name: "METALWORKS CAPZ",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS CAPZ.pdf",
            },
            {
              name: "METALWORKS Clip-On",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Clip-On.pdf",
            },
            {
              name: "METALWORKS Concealed",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Concealed.pdf",
            },
            {
              name: "METALWORKS Downlight Solutions CLIP ON",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Downlight Solutions CLIP ON.pdf",
            },
            {
              name: "METALWORKS Downlight Solutions OTRSION SPRING SHAPES",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Downlight Solutions OTRSION SPRING SHAPES.pdf",
            },
            {
              name: "METALWORKS Downlight Solutions TORSION SPRINGS",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Downlight Solutions TORSION SPRINGS.pdf",
            },
            {
              name: "METALWORKS for DESIGNFLEX Tegular",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS for DESIGNFLEX Tegular.pdf",
            },
            {
              name: "METALWORKS IMMIX Blades",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS IMMIX Blades.pdf",
            },
            {
              name: "METALWORKS IMMIX Linear",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS IMMIX Linear.pdf",
            },
            {
              name: "METALWORKS Lay-In for DYNAMAX PLUS",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Lay-In for DYNAMAX PLUS.pdf",
            },
            {
              name: "METALWORKS Lay-In for DYNAMAX",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Lay-In for DYNAMAX.pdf",
            },
            {
              name: "METALWORKS Linear",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Linear - Classics.pdf",
            },
            {
              name: "METALWORKS Linear - DIVERGE",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Linear - DIVERGE.pdf",
            },
            {
              name: "METALWORKS Linear - SYNCHRO Ceiling Planks",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Linear - SYNCHRO Ceiling Planks.pdf",
            },
            {
              name: "METALWORKS Mesh - Expanded Metal",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Mesh - Expanded Metal.pdf",
            },
            {
              name: "METALWORKS Mesh - Welded Wire",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Mesh - Welded Wire.pdf",
            },
            {
              name: "METALWORKS Mesh - Woven Wire",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Mesh - Woven Wire.pdf",
            },
            {
              name: "METALWORKS Mesh Torsion Spring",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Mesh Torsion Spring.pdf",
            },
            {
              name: "METALWORKS Open Cell",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Open Cell.pdf",
            },
            {
              name: "METALWORKS Plank",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Plank.pdf",
            },
            {
              name: "METALWORKS RH200 Flat & Curved Systems",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS RH200 Flat & Curved Systems.pdf",
            },
            {
              name: "METALWORKS RH215 Plank and Faceted Custom Systems",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS RH215 Plank and Faceted Custom Systems.pdf",
            },
            {
              name: "METALWORKS SECURELOCK Plus Custom Ceilings",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS SECURELOCK Plus Custom Ceilings.pdf",
            },
            {
              name: "METALWORKS SECURELOCK",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS SECURELOCK.pdf",
            },
            {
              name: "METALWORKS Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "METALWORKS Tartan Custom System",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Tartan Custom System.pdf",
            },
            {
              name: "METALWORKS Tegular",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Tegular.pdf",
            },
            {
              name: "METALWORKS Torsion Spring Shapes",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Torsion Spring Shapes.pdf",
            },
            {
              name: "METALWORKS Torsion Spring",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS Torsion Spring.pdf",
            },
            {
              name: "METALWORKS TORSIONSPAN Custom Ceilings",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS TORSIONSPAN Custom Ceilings.pdf",
            },
            {
              name: "METALWORKS VECTOR and Vector Exterior",
              file: "/uploads/Armstrong World Industries/METAL CIELING/METALWORKS VECTOR and Vector Exterior.pdf",
            },
            {
              name: "SERPENTINA Classic",
              file: "/uploads/Armstrong World Industries/METAL CIELING/SERPENTINA Classic.pdf",
            },
            {
              name: "SERPENTINA Components",
              file: "/uploads/Armstrong World Industries/METAL CIELING/SERPENTINA Components.pdf",
            },
            {
              name: "SERPENTINA Vault",
              file: "/uploads/Armstrong World Industries/METAL CIELING/SERPENTINA Vault.pdf",
            },
            {
              name: "SERPENTINA Waves",
              file: "/uploads/Armstrong World Industries/METAL CIELING/SERPENTINA Waves.pdf",
            },
            {
              name: "STRATACLEAN IQ Air Filtration System",
              file: "/uploads/Armstrong World Industries/METAL CIELING/STRATACLEAN IQ Air Filtration System.pdf",
            },
          ],
        },
        {
          name: "TECTUM WOOD FIBER Ceilings",
          products: [
            {
              name: "TECTUM Blades and Baffles",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM Blades and Baffles.pdf",
            },
            {
              name: "TECTUM Clouds",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM Clouds.pdf",
            },
            {
              name: "TECTUM CREATE!",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM CREATE!.pdf",
            },
            {
              name: "TECTUM DESIGNAR - Lines Tegular Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM DESIGNAR - Lines Tegular Ceilings.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines Direct-Attach Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM DESIGNART - Lines Direct-Attach Ceilings.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines FINALE PB Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM DESIGNART - Lines FINALE PB Ceilings.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines High NRC Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM DESIGNART - Lines High NRC Ceilings.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines High NRC Tegular Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM DESIGNART - Lines High NRC Tegular Ceilings.pdf",
            },
            {
              name: "TECTUM DESIGNART - Shapes Direct-Attach Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM DESIGNART - Shapes Direct-Attach Ceilings.pdf",
            },
            {
              name: "TECTUM Direct-Attach Ceilings",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM Direct-Attach Ceilings.pdf",
            },
            {
              name: "TECTUM FINALE Ceiling Panels",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM FINALE Ceiling Panels.pdf",
            },
            {
              name: "TECTUM FINALE PB Ceiling Panels",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM FINALE PB Ceiling Panels.pdf",
            },
            {
              name: "TECTUM High NRC Ceiling Panels DIRECT ATTACH",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM High NRC Ceiling Panels DIRECT ATTACH.pdf",
            },
            {
              name: "TECTUM High NRC Ceiling Panels LAY IN",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM High NRC Ceiling Panels LAY IN.pdf",
            },
            {
              name: "TECTUM High NRC Ceiling Panels TEGULAR",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM High NRC Ceiling Panels TEGULAR.pdf",
            },
            {
              name: "TECTUM Lay-In",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM Lay-In.pdf",
            },
            {
              name: "TECTUM Shapes for Acoustical Clouds",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM Shapes for Acoustical Clouds.pdf",
            },
            {
              name: "TECTUM Tegular",
              file: "/uploads/Armstrong World Industries/TECTUM Wood Fiber Ceilings/TECTUM Tegular.pdf",
            },
          ],
        },
        {
          name: "Translucent Ceiling Tiles",
          products: [
            {
              name: "INFUSIONS Accent Canopies",
              file: "/uploads/Armstrong World Industries/Translucent Ceiling Tiles/INFUSIONS Accent Canopies.pdf",
            },
            {
              name: "INFUSIONS Blades - Concepts",
              file: "/uploads/Armstrong World Industries/Translucent Ceiling Tiles/INFUSIONS Blades - Concepts.pdf",
            },
            {
              name: "INFUSIONS Lay-in",
              file: "/uploads/Armstrong World Industries/Translucent Ceiling Tiles/INFUSIONS Lay-in.pdf",
            },
            {
              name: "INFUSIONS Shapes",
              file: "/uploads/Armstrong World Industries/Translucent Ceiling Tiles/INFUSIONS Shapes.pdf",
            },
          ],
        },
        {
          name: "Translucent Ceiling Tiles",
          products: [
            {
              name: "WOODWORKS Channeled Plank",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Channeled Plank.pdf",
            },
            {
              name: "WOODWORKS Channeled Tegular",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Channeled Tegular.pdf",
            },
            {
              name: "WOODWORKS Channeled VECTOR",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Channeled VECTOR.pdf",
            },
            {
              name: "WOODWORKS Concealed",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Concealed.pdf",
            },
            {
              name: "WOODWORKS Grille - Classics Solid Ceiling Panels",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Grille - Classics Solid Ceiling Panels.pdf",
            },
            {
              name: "WOODWORKS Grille - Forté Solid Ceiling Panels",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Grille - Forté Solid Ceiling Panels.pdf",
            },
            {
              name: "WOODWORKS Grille - Forté Veneered Ceiling Panels",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Grille - Forté Veneered Ceiling Panels.pdf",
            },
            {
              name: "WOODWORKS Grille Tegular",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Grille Tegular.pdf",
            },
            {
              name: "WOODWORKS Linear Solid Wood Panels",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Linear Solid Wood Panels.pdf",
            },
            {
              name: "WOODWORKS Linear Tegular",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Linear Tegular.pdf",
            },
            {
              name: "WOODWORKS Linear Veneered Closed",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Linear Veneered Closed.pdf",
            },
            {
              name: "WOODWORKS Linear Veneered Open",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Linear Veneered Open.pdf",
            },
            {
              name: "WOODWORKS Linear Veneered Panels",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Linear Veneered Panels.pdf",
            },
            {
              name: "WOODWORKS Open Cell",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Open Cell.pdf",
            },
            {
              name: "WOODWORKS Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "WOODWORKS Tegular",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Tegular.pdf",
            },
            {
              name: "WOODWORKS Torsion Spring",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS Torsion Spring.pdf",
            },
            {
              name: "WOODWORKS VECTOR",
              file: "/uploads/Armstrong World Industries/WOOD CEILING/WOODWORKS VECTOR.pdf",
            },
          ],
        },
        {
          name: "Custom Ceiling & Wall Capabilities",
          products: [
            {
              name: "ALTITUDES Torsion Spring Custom System",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/ALTITUDES Torsion Spring Custom System.pdf",
            },
            {
              name: "Custom SOUNDSOAK Wall Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/Custom SOUNDSOAK Wall Systems.pdf",
            },
            {
              name: "FASTSIZE Ceiling Panels and Suspension Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/FASTSIZE Ceiling Panels and Suspension Systems.pdf",
            },
            {
              name: "METALWORKS AIRTITE Radiant Ceiling Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS AIRTITE Radiant Ceiling Systems.pdf",
            },
            {
              name: "METALWORKS Clip-On",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS Clip-On.pdf",
            },
            {
              name: "METALWORKS Fastrack Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS Fastrack Systems.pdf",
            },
            {
              name: "METALWORKS RH200 Flat & Curved Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS RH200 Flat & Curved Systems.pdf",
            },
            {
              name: "METALWORKS RH215 Plank and Faceted Custom Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS RH215 Plank and Faceted Custom Systems.pdf",
            },
            {
              name: "METALWORKS SECURELOCK Plus Custom Ceilings",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS SECURELOCK Plus Custom Ceilings.pdf",
            },
            {
              name: "METALWORKS Tartan Custom System",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS Tartan Custom System.pdf",
            },
            {
              name: "METALWORKS Torsion Spring Custom Ceilings",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS Torsion Spring Custom Ceilings.pdf",
            },
            {
              name: "METALWORKS TORSIONSPAN Custom Ceilings",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS TORSIONSPAN Custom Ceilings.pdf",
            },
            {
              name: "METALWORKS Trim & Accessories",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/METALWORKS Trim & Accessories.pdf",
            },
            {
              name: "OPTIMA Radial Custom Ceilings",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/OPTIMA Radial Custom Ceilings.pdf",
            },
            {
              name: "SERPENTINA Classic Curved Metal Clouds",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/SERPENTINA Classic Curved Metal Clouds.pdf",
            },
            {
              name: "WOODWORKS Channeled",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS Channeled.pdf",
            },
            {
              name: "WOODWORKS Radial Custom Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS Radial Custom Systems.pdf",
            },
            {
              name: "WOODWORKS Walls",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS Walls.pdf",
            },
            {
              name: "WOODWORKS® Access™ Flat & Curved Ceiling Systems",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® Access™ Flat & Curved Ceiling Systems.pdf",
            },
            {
              name: "WOODWORKS® ACGI Allegro™ System Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Allegro™ System Series 1.pdf",
            },
            {
              name: "WOODWORKS® ACGI Allegro™ System Series 2",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Allegro™ System Series 2.pdf",
            },
            {
              name: "WOODWORKS® ACGI Allegro™ System Series 3",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Allegro™ System Series 3.pdf",
            },
            {
              name: "WOODWORKS® ACGI Baffle System Series 3 & 4",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Baffle System Series 3 & 4.pdf",
            },
            {
              name: "WOODWORKS® ACGI Coffer System Series 1 & 2",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Coffer System Series 1 & 2.pdf",
            },
            {
              name: "WOODWORKS® ACGI Encore System Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Encore System Series 1.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 1.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 2",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 2.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 3",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 3.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 4",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 4.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 5",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 5.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 6",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 6.pdf",
            },
            {
              name: "WOODWORKS® ACGI Flat Panel Series 7",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Flat Panel Series 7.pdf",
            },
            {
              name: "WOODWORKS® ACGI Grille System Backer Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Grille System Backer Series 1.pdf",
            },
            {
              name: "WOODWORKS® ACGI Grille System Dowel Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Grille System Dowel Series 1.pdf",
            },
            {
              name: "WOODWORKS® ACGI Grille System Micro Grille",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® ACGI Grille System Micro Grille.pdf",
            },
            {
              name: "WOODWORKS® WALLS Standard Accessories",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS® WALLS Standard Accessories.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Baffle System Tremolo",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Baffle System Tremolo.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Beam System Series 1, 2, 3, and 4",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Beam System Series 1, 2, 3, and 4.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Concerto™ Wall System",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Concerto™ Wall System.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Cube System Continuous Cube 2",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Cube System Continuous Cube 2.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Encore System Series 3",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Encore System Series 3.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Encore System Series 5",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Encore System Series 5.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Encore System Series 6",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Encore System Series 6.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Linear System Closed Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Linear System Closed Series 1.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Linear System Open Series 1",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Linear System Open Series 1.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Linear System Open Series 2",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Linear System Open Series 2.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Linear System Open Series 3",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Linear System Open Series 3.pdf",
            },
            {
              name: "WOODWORKS™ ACGI Linear System Open Series 5",
              file: "/uploads/Armstrong World Industries/Custom Ceiling & Wall Capabilities/WOODWORKS™ ACGI Linear System Open Series 5.pdf",
            },
          ],
        },
        {
          name: "Baffles and Blades",
          products: [
            {
              name: "FELTWORKS Blades - HookOn Ebbs & Flows Kits",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/FELTWORKS Blades - HookOn Ebbs & Flows Kits.pdf",
            },
            {
              name: "FELTWORKS Blades - HookOn Peaks & Valleys Kits",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/FELTWORKS Blades - HookOn Peaks & Valleys Kits.pdf",
            },
            {
              name: "FELTWORKS Blades - HookOn Rectangular Panels",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/FELTWORKS Blades - HookOn Rectangular Panels.pdf",
            },
            {
              name: "FELTWORKS Blades - VARAFFIX Reinforced Rectangular",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/FELTWORKS Blades - VARAFFIX Reinforced Rectangular.pdf",
            },
            {
              name: "FELTWORKS Open Cell Wall-to-Wall Ceiling",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/FELTWORKS Open Cell Wall-to-Wall Ceiling.pdf",
            },
            {
              name: "FELTWORKS Open Cell",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/FELTWORKS Open Cell.pdf",
            },
            {
              name: "INFUSIONS Blades - Concepts",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/INFUSIONS Blades - Concepts.pdf",
            },
            {
              name: "METALWORKS Blades - Classics",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/METALWORKS Blades - Classics.pdf",
            },
            {
              name: "SOUNDSCAPES Blades – Wood Looks",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/SOUNDSCAPES Blades – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Blades",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/SOUNDSCAPES Blades.pdf",
            },
            {
              name: "TECTUM Blades and Baffles",
              file: "/uploads/Armstrong World Industries/Baffles and Blades/TECTUM Blades and Baffles.pdf",
            },
          ],
        },
        {
          name: "​Canopy and Cloud Ceiling Options",
          products: [
            {
              name: "ACOUSTIBUILT Seamless Acoustical Ceiling System",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/ACOUSTIBUILT Seamless Acoustical Ceiling System.pdf",
            },
            {
              name: "DESIGNFLEX for FORMATIONS Acoustical Clouds",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/DESIGNFLEX for FORMATIONS Acoustical Clouds.pdf",
            },
            {
              name: "INFUSIONS Accent Canopies",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/INFUSIONS Accent Canopies.pdf",
            },
            {
              name: "INFUSIONS Shapes",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/INFUSIONS Shapes.pdf",
            },
            {
              name: "LYRA CAPZ",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/LYRA CAPZ.pdf",
            },
            {
              name: "METALWORKS Canopies",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/METALWORKS Canopies.pdf",
            },
            {
              name: "METALWORKS CAPZ",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/METALWORKS CAPZ.pdf",
            },
            {
              name: "OPTIMA CAPZ",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/OPTIMA CAPZ.pdf",
            },
            {
              name: "SERPENTINA Classic",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SERPENTINA Classic.pdf",
            },
            {
              name: "SERPENTINA Components",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SERPENTINA Components.pdf",
            },
            {
              name: "SERPENTINA Vault",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SERPENTINA Vault.pdf",
            },
            {
              name: "SERPENTINA Waves",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SERPENTINA Waves.pdf",
            },
            {
              name: "SOUNDSCAPES Acoustical Canopies",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SOUNDSCAPES Acoustical Canopies.pdf",
            },
            {
              name: "SOUNDSCAPES Basics",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SOUNDSCAPES Basics.pdf",
            },
            {
              name: "SOUNDSCAPES Blades – Wood Looks",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SOUNDSCAPES Blades – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Blades",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SOUNDSCAPES Blades.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes – Wood Looks",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SOUNDSCAPES Shapes – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/SOUNDSCAPES Shapes.pdf",
            },
            {
              name: "TECTUM Clouds",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/TECTUM Clouds.pdf",
            },
            {
              name: "TECTUM Shapes for Acoustical Clouds",
              file: "/uploads/Armstrong World Industries/​Canopy and Cloud Ceiling Options/TECTUM Shapes for Acoustical Clouds.pdf",
            },
          ],
        },
        {
          name: "Exposed Structure Ceiling Solutions",
          products: [
            {
              name: "ACOUSTIBUILT Seamless Acoustical Ceiling System",
              file: "/uploads/Armstrong World Industries/Exposed Structure Ceiling Solutions/ACOUSTIBUILT Seamless Acoustical Ceiling System.pdf",
            },
            {
              name: "INVISACOUSTICS",
              file: "/uploads/Armstrong World Industries/Exposed Structure Ceiling Solutions/INVISACOUSTICS.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes – Wood Looks",
              file: "/uploads/Armstrong World Industries/Exposed Structure Ceiling Solutions/SOUNDSCAPES Shapes – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes",
              file: "/uploads/Armstrong World Industries/Exposed Structure Ceiling Solutions/SOUNDSCAPES Shapes.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines Direct-Attach Ceilings",
              file: "/uploads/Armstrong World Industries/Exposed Structure Ceiling Solutions/TECTUM DESIGNART - Lines Direct-Attach Ceilings.pdf",
            },
            {
              name: "TECTUM DESIGNART - Lines Tegular Ceilings",
              file: "/uploads/Armstrong World Industries/Exposed Structure Ceiling Solutions/TECTUM DESIGNART - Lines Tegular Ceilings.pdf",
            },
          ],
        },
        {
          name: "Geometric Ceiling Tiles",
          products: [
            {
              name: "CALLA Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/CALLA Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "LYRA PB Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/LYRA PB Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "METALWORKS Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/METALWORKS Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "METALWORKS Torsion Spring Shapes",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/METALWORKS Torsion Spring Shapes.pdf",
            },
            {
              name: "OPTIMA PB Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/OPTIMA PB Shapes for DESIGNFLEX.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes – Wood Looks",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/SOUNDSCAPES Shapes – Wood Looks.pdf",
            },
            {
              name: "SOUNDSCAPES Shapes",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/SOUNDSCAPES Shapes.pdf",
            },
            {
              name: "TECTUM DESIGNART - Shapes Direct-Attach Ceilings",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/TECTUM DESIGNART - Shapes Direct-Attach Ceilings.pdf",
            },
            {
              name: "TECTUM Shapes for Acoustical Clouds",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/TECTUM Shapes for Acoustical Clouds.pdf",
            },
            {
              name: "ULTIMA Shapes for DESIGNFLEX",
              file: "/uploads/Armstrong World Industries/Geometric Ceiling Tiles/ULTIMA Shapes for DESIGNFLEX.pdf",
            },
          ],
        },

        {
          name: "Linear Visuals",
          products: [
            {
              name: "INFUSIONS Blades - Concepts",
              file: "/uploads/Armstrong World Industries/Linear Visuals/INFUSIONS Blades - Concepts.pdf",
            },
            {
              name: "METALWORKS Blades - Classics",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS Blades - Classics.pdf",
            },

            {
              name: "METALWORKS IMMIX Blades",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS IMMIX Blades.pdf",
            },

            {
              name: "METALWORKS IMMIX Linear",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS IMMIX Linear.pdf",
            },

            {
              name: "METALWORKS Linear - Classics",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS Linear - Classics.pdf",
            },

            {
              name: "METALWORKS Linear - DIVERGE",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS Linear - DIVERGE.pdf",
            },

            {
              name: "METALWORKS Linear - SYNCHRO Ceiling Planks",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS Linear - SYNCHRO Ceiling Planks.pdf",
            },

            {
              name: "METALWORKS Plank",
              file: "/uploads/Armstrong World Industries/Linear Visuals/METALWORKS Plank.pdf",
            },

            {
              name: "SOUNDSCAPES Blades – Wood Looks",
              file: "/uploads/Armstrong World Industries/Linear Visuals/SOUNDSCAPES Blades – Wood Looks.pdf",
            },

            {
              name: "SOUNDSCAPES Blades",
              file: "/uploads/Armstrong World Industries/Linear Visuals/SOUNDSCAPES Blades.pdf",
            },

            {
              name: "WOODWORKS Channeled Plank",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Channeled Plank.pdf",
            },

            {
              name: "WOODWORKS Grille - Classics Solid Ceiling Panels",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Grille - Classics Solid Ceiling Panels.pdf",
            },
            {
              name: "WOODWORKS Grille - Forté Solid Ceiling Panels",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Grille - Forté Solid Ceiling Panels.pdf",
            },

            {
              name: "WOODWORKS Grille Tegular",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Grille Tegular.pdf",
            },

            {
              name: "WOODWORKS Linear Solid Wood Panels",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Linear Solid Wood Panels.pdf",
            },

            {
              name: "WOODWORKS Linear Veneered Closed",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Linear Veneered Closed.pdf",
            },

            {
              name: "WOODWORKS Linear Veneered Open",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Linear Veneered Open.pdf",
            },

            {
              name: "WOODWORKS Linear Veneered Panels",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS Linear Veneered Panels.pdf",
            },

            {
              name: "WOODWORKS® Ceilings Trim and Accessories",
              file: "/uploads/Armstrong World Industries/Linear Visuals/WOODWORKS® Ceilings Trim and Accessories.pdf",
            },
          ],
        },
        {
          name: "Sloped, Faceted, Staggered & Layered Installations",
          products: [
            {
              name: "360 Painted Grid",
              file: "/uploads/Armstrong World Industries/Sloped, Faceted, Staggered & Layered Installations/360 Painted Grid.pdf",
            },
            {
              name: "Accessories",
              file: "/uploads/Armstrong World Industries/Sloped, Faceted, Staggered & Layered Installations/Accessories.pdf",
            },
            {
              name: "AXIOM Slip Joint",
              file: "/uploads/Armstrong World Industries/Sloped, Faceted, Staggered & Layered Installations/AXIOM Slip Joint.pdf",
            },
            {
              name: "Faceted Ceilings",
              file: "/uploads/Armstrong World Industries/Sloped, Faceted, Staggered & Layered Installations/Faceted Ceilings.pdf",
            },
            {
              name: "Sloped Ceilings",
              file: "/uploads/Armstrong World Industries/Sloped, Faceted, Staggered & Layered Installations/Sloped Ceilings.pdf",
            },
            {
              name: "Suspension System Moldings",
              file: "/uploads/Armstrong World Industries/Sloped, Faceted, Staggered & Layered Installations/Suspension System Moldings.pdf",
            },
          ],
        },
        {
          name: "Ceiling Grid",
          products: [
            {
              name: "1 1 2 Co Extruded CLEAN ROOM",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/1 1 2 Co Extruded CLEAN ROOM.pdf",
            },
            {
              name: "360 Painted Grid",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/360 Painted Grid.pdf",
            },
            {
              name: "Continuous Load Path (CLP) For PRELUDE XL",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/Continuous Load Path (CLP) For PRELUDE XL.pdf",
            },
            {
              name: "INTERLUDE XL HRC Dimensional Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/INTERLUDE XL HRC Dimensional Tee.pdf",
            },
            {
              name: "PRELUDE Concealed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE Concealed Tee.pdf",
            },
            {
              name: "PRELUDE Plus XL Aluminum 15 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE Plus XL Aluminum 15 16 Exposed Tee.pdf",
            },
            {
              name: "PRELUDE Plus XL FIRE GUARD 15 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE Plus XL FIRE GUARD 15 16 Exposed Tee.pdf",
            },
            {
              name: "PRELUDE Plus XL Stainless Steel 15 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE Plus XL Stainless Steel 15 16 Exposed Tee.pdf",
            },
            {
              name: "PRELUDE XL 15 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE XL 15 16 Exposed Tee.pdf",
            },
            {
              name: "PRELUDE XL 15 16 for Exterior Applications",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE XL 15 16 for Exterior Applications.pdf",
            },
            {
              name: "PRELUDE XL and PRELUDE XL HRC",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE XL and PRELUDE XL HRC.pdf",
            },
            {
              name: "PRELUDE XL FIRE GUARD 15 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE XL FIRE GUARD 15 16 Exposed Tee.pdf",
            },
            {
              name: "PRELUDE XL High Recycled Content",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE XL High Recycled Content.pdf",
            },
            {
              name: "PRELUDE XL Max",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/PRELUDE XL Max.pdf",
            },
            {
              name: "SILHOUETTE XL 9 16 Bolt Slot  1 4 Reveal",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SILHOUETTE XL 9 16 Bolt Slot  1 4 Reveal.pdf",
            },
            {
              name: "SILHOUETTE XL 9 16 Bolt Slot  1 8 Reveal",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SILHOUETTE XL 9 16 Bolt Slot  1 8 Reveal.pdf",
            },
            {
              name: "SINGLESPAN Acoustical Corridor System",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SINGLESPAN Acoustical Corridor System.pdf",
            },
            {
              name: "SUPRAFINE ML 9 16  Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SUPRAFINE ML 9 16  Exposed Tee.pdf",
            },
            {
              name: "SUPRAFINE XL 9 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SUPRAFINE XL 9 16 Exposed Tee.pdf",
            },
            {
              name: "SUPRAFINE XL FIRE GUARD 9 16 Exposed Tee",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SUPRAFINE XL FIRE GUARD 9 16 Exposed Tee.pdf",
            },
            {
              name: "SUPRAFINE XL High Recycled Content",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SUPRAFINE XL High Recycled Content.pdf",
            },
            {
              name: "SUPRAFINE XM 9 16 Exposed Tee System for Shapes",
              file: "/uploads/Armstrong World Industries/Ceiling Grid/SUPRAFINE XM 9 16 Exposed Tee System for Shapes.pdf",
            },
          ],
        },
        {
          name: "CLEAN ROOM Systems",
          products: [
            {
              name: "1 1 2 Co Extruded CLEAN ROOM",
              file: "/uploads/Armstrong World Industries/Clean Room Systems/1 1 2 Co Extruded CLEAN ROOM.pdf",
            },
            {
              name: "CLEAN ROOM 15 16 and 1 1 2 Exposed Tee Suspension System aluminum",
              file: "/uploads/Armstrong World Industries/Clean Room Systems/CLEAN ROOM 15 16 and 1 1 2 Exposed Tee Suspension System aluminum.pdf",
            },
            {
              name: "CLEAN ROOM 15 16 Exposed Tee Suspension System steel",
              file: "/uploads/Armstrong World Industries/Clean Room Systems/CLEAN ROOM 15 16 Exposed Tee Suspension System steel.pdf",
            },
          ],
        },
        {
          name: "Corridors",
          products: [
            {
              name: "SHORTSPAN Drywall Framing System",
              file: "/uploads/Armstrong World Industries/Corridors/SHORTSPAN Drywall Framing System.pdf",
            },
            {
              name: "SIMPLECURVE AND KAM Knurled Angle Molding",
              file: "/uploads/Armstrong World Industries/Corridors/SIMPLECURVE AND KAM Knurled Angle Molding.pdf",
            },
          ],
        },
        {
          name: "Data Center Ceiling Solutions",
          products: [
            {
              name: "CALLA for DYNAMAX plus",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/CALLA for DYNAMAX plus.pdf",
            },
            {
              name: "CALLA for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/CALLA for DYNAMAX.pdf",
            },
            {
              name: "CANYON for PRELUDE XL Max",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/CANYON for PRELUDE XL Max.pdf",
            },
            {
              name: "CLEAN ROOM FL for PRELUDE XL Max",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/CLEAN ROOM FL for PRELUDE XL Max.pdf",
            },
            {
              name: "DUNE for DYNAMAX plus",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/DUNE for DYNAMAX plus.pdf",
            },
            {
              name: "DUNE for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/DUNE for DYNAMAX.pdf",
            },
            {
              name: "FINE FISSURED for DYNAMAX plus",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/FINE FISSURED for DYNAMAX plus.pdf",
            },
            {
              name: "FINE FISSURED for DYNAMAX",
              file: "/uploads/Armstrong World Industries/Data Center Ceiling Solutions/FINE FISSURED for DYNAMAX.pdf",
            },
          ],
        },
        {
          name: "Structural Grid Ceiling Systems",
          products: [
            {
              name: "Continuous Load Path (CLP) Main Beam Component",
              file: "/uploads/Armstrong World Industries/Structural Grid Ceiling Systems/Continuous Load Path (CLP) Main Beam Component.pdf",
            },
            {
              name: "DYNAMAX Plus Structural Aluminum Suspension System",
              file: "/uploads/Armstrong World Industries/Structural Grid Ceiling Systems/DYNAMAX Plus Structural Aluminum Suspension System.pdf",
            },
            {
              name: "DYNAMAX Structural Aluminum Suspension System",
              file: "/uploads/Armstrong World Industries/Structural Grid Ceiling Systems/DYNAMAX Structural Aluminum Suspension System.pdf",
            },
            {
              name: "PRELUDE XL  and PRELUDE XL High Recycled Content (HRC)",
              file: "/uploads/Armstrong World Industries/Structural Grid Ceiling Systems/PRELUDE XL  and PRELUDE XL High Recycled Content (HRC).pdf",
            },
            {
              name: "PRELUDE XL MAX Exposed Tee System",
              file: "/uploads/Armstrong World Industries/Structural Grid Ceiling Systems/PRELUDE XL MAX Exposed Tee System.pdf",
            },
          ],
        },
        {
          name: "FRAMEALL Flat & Curved Drywall Grid",
          products: [
            {
              name: "FRAMEALL Flat & Curved Drywall Grid/6' DGS Cross Tees",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/6' DGS Cross Tees.pdf",
            },
            {
              name: "FRAMEALL Flat & Curved Drywall Grid/Curved Drywall Ceilings",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/Curved Drywall Ceilings.pdf",
            },
            {
              name: "Drywall Grid Accessories",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/Drywall Grid Accessories.pdf",
            },
            {
              name: "Flat Drywall Stucco Plaster Ceilings",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/Flat Drywall Stucco Plaster Ceilings.pdf",
            },
            {
              name: "IIC Assembly - Impact Isolation Clip",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/IIC Assembly - Impact Isolation Clip.pdf",
            },
            {
              name: "SIMPLECURVE and Knurled Angle Molding (KAM)",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/SIMPLECURVE and Knurled Angle Molding (KAM).pdf",
            },
            {
              name: "Transition Moldings",
              file: "/uploads/Armstrong World Industries/FRAMEALL Flat & Curved Drywall Grid/Transition Moldings.pdf",
            },
          ],
        },
        {
          name: "SHORTSPAN Drywall Framing System",
          products: [
            {
              name: "SHORTSPAN Framing System",
              file: "/uploads/Armstrong World Industries/SHORTSPAN Drywall Framing System/SHORTSPAN Framing System.pdf",
            },
            {
              name: "SIMPLECURVE & Knurled Angle Molding (KAM)",
              file: "/uploads/Armstrong World Industries/SHORTSPAN Drywall Framing System/SIMPLECURVE & Knurled Angle Molding (KAM).pdf",
            },
          ],
        },
        {
          name: "FRAMEALL Drywall Grid",
          products: [
            {
              name: "AXIOM Drywall Trim",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/AXIOM Drywall Trim.pdf",
            },
            {
              name: "FRAMEALL 6' DGS Cross Tees",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/FRAMEALL 6' DGS Cross Tees.pdf",
            },
            {
              name: "FRAMEALL Curved Drywall Ceilings",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/FRAMEALL Curved Drywall Ceilings.pdf",
            },
            {
              name: "FRAMEALL Drywall Grid Accessories",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/FRAMEALL Drywall Grid Accessories.pdf",
            },
            {
              name: "FRAMEALL Flat Drywall Stucco Plaster Ceilings",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/FRAMEALL Flat Drywall Stucco Plaster Ceilings.pdf",
            },
            {
              name: "IIC Assembly - Impact Isolation Clip",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/IIC Assembly - Impact Isolation Clip.pdf",
            },
            {
              name: "QUIKSTIX Drywall Grid System",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/QUIKSTIX Drywall Grid System.pdf",
            },
            {
              name: "QUIKSTIX Locking Pocket Mains",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/QUIKSTIX Locking Pocket Mains.pdf",
            },
            {
              name: "SHORTSPAN Framing System",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/SHORTSPAN Framing System.pdf",
            },
            {
              name: "SIMPLECURVE & Knurled Angle Molding (KAM)",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/SIMPLECURVE & Knurled Angle Molding (KAM).pdf",
            },
            {
              name: "Transition Moldings",
              file: "/uploads/Armstrong World Industries/FRAMEALL Drywall Grid/Transition Moldings.pdf",
            },
          ],
        },
        {
          name: "Trims",
          products: [
            {
              name: "AXIOM Classic - Curved Perimeter Trim",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Classic - Curved Perimeter Trim.pdf",
            },
            {
              name: "AXIOM Classic - Straight Perimeter Trim",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Classic - Straight Perimeter Trim.pdf",
            },
            {
              name: "AXIOM for INTERLUDE",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM for INTERLUDE.pdf",
            },
            {
              name: "AXIOM KNIFE EDGE",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM KNIFE EDGE.pdf",
            },
            {
              name: "AXIOM Moldings & Column Rings",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Moldings & Column Rings.pdf",
            },
            {
              name: "AXIOM Paired",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Paired.pdf",
            },
            {
              name: "AXIOM Trim for Drywall and ACOUSTIBUILT",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Trim for Drywall and ACOUSTIBUILT.pdf",
            },
            {
              name: "AXIOM Vector Curved Perimeter Trim",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Vector Curved Perimeter Trim.pdf",
            },
            {
              name: "AXIOM Vector Straight Perimeter Trim",
              file: "/uploads/Armstrong World Industries/Trims/AXIOM Vector Straight Perimeter Trim.pdf",
            },
            {
              name: "Wall Reveals for Drywall and ACOUSTIBUILT Panels",
              file: "/uploads/Armstrong World Industries/Trims/Wall Reveals for Drywall and ACOUSTIBUILT Panels.pdf",
            },
          ],
        },
        {
          name: "Light Coves",
          products: [
            {
              name: "AXIOM Direct Light Coves",
              file: "/uploads/Armstrong World Industries/Light Coves/AXIOM Direct Light Coves.pdf",
            },
            {
              name: "AXIOM Indirect Light Coves",
              file: "/uploads/Armstrong World Industries/Light Coves/AXIOM Indirect Light Coves.pdf",
            },
          ],
        },
        {
          name: "Window & Shade Pockets",
          products: [
            {
              name: "AXIOM Building Perimeter Pockets for Lutron Shades",
              file: "/uploads/Armstrong World Industries/Window & Shade Pockets/AXIOM Building Perimeter Pockets for Lutron Shades.pdf",
            },
            {
              name: "AXIOM Building Perimeter Shade Pockets",
              file: "/uploads/Armstrong World Industries/Window & Shade Pockets/AXIOM Building Perimeter Shade Pockets.pdf",
            },
          ],
        },
        {
          name: "Transitions",
          products: [
            {
              name: "Acoustical and Drywall Transition Molding Accessories",
              file: "/uploads/Armstrong World Industries/Transitions/Acoustical and Drywall Transition Molding Accessories.pdf",
            },
            {
              name: "Acoustical and Drywall Transition Molding Suspension System Moldings",
              file: "/uploads/Armstrong World Industries/Transitions/Acoustical and Drywall Transition Molding Suspension System Moldings.pdf",
            },
            {
              name: "Acoustical and Drywall Transition Molding Transition Moldings",
              file: "/uploads/Armstrong World Industries/Transitions/Acoustical and Drywall Transition Molding Transition Moldings.pdf",
            },
            {
              name: "AXIOM Transitions",
              file: "/uploads/Armstrong World Industries/Transitions/AXIOM Transitions.pdf",
            },
          ],
        },
        {
          name: "Interior Glass Partitions",
          products: [
            {
              name: "AXIOM Glazing Channel",
              file: "/uploads/Armstrong World Industries/Interior Glass Partitions/AXIOM Glazing Channel.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "CertainTeed",
      subVendors: [
        {
          name: "Acoustical Gypsum Board",
          products: [
            {
              name: "Gyptone Big Curve",
              file: "/uploads/Certainteed/ceiling/Acoustical Gypsum Board/Gyptone Big Curve.pdf",
            },
            {
              name: "GYPTONE BIG",
              file: "/uploads/Certainteed/ceiling/Acoustical Gypsum Board/GYPTONE BIG.pdf",
            },
          ],
        },
        {
          name: "Acoustical Suspension Systems",
          products: [
            {
              name: "1 1 2 Drywall Suspension System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/1 1 2 Drywall Suspension System.pdf",
            },
            {
              name: "9 16 EZ Stab Bolt Slot System - 1 4 Reveal",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/9 16 EZ Stab Bolt Slot System - 1 4 Reveal.pdf",
            },
            {
              name: "9 16 EZ Stab Bolt Slot System - 1 8 Reveal",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/9 16 EZ Stab Bolt Slot System - 1 8 Reveal.pdf",
            },
            {
              name: "9 16 EZ Stab Elite Narrow System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/9 16 EZ Stab Elite Narrow System.pdf",
            },
            {
              name: "15 16 EZ Stab All-Aluminum Cleanroom System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/15 16 EZ Stab All-Aluminum Cleanroom System.pdf",
            },
            {
              name: "15 16 EZ Stab Classic All-Aluminum System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/15 16 EZ Stab Classic All-Aluminum System.pdf",
            },
            {
              name: "15 16 EZ Stab Classic System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/15 16 EZ Stab Classic System.pdf",
            },
            {
              name: "EZ Stab Classic Environmental System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/EZ Stab Classic Environmental System.pdf",
            },
            {
              name: "EZ Stab Cleanroom System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/EZ Stab Cleanroom System.pdf",
            },
            {
              name: "EZ Stab Tier Drop",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/EZ Stab Tier Drop.pdf",
            },
            {
              name: "FireSecure™ Stab System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/FireSecure™ Stab System.pdf",
            },
            {
              name: "Stab Classic Aluminum Capped System",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/Stab Classic Aluminum Capped System.pdf",
            },
            {
              name: "Wall Angle",
              file: "/uploads/Certainteed/ceiling/Acoustical Suspension Systems/Wall Angle.pdf",
            },
          ],
        },
        {
          name: "Beams & Baffles ",
          products: [
            {
              name: "Beams & Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Beams & Baffles.pdf",
            },
            {
              name: "BoldFelt Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/BoldFelt Baffles.pdf",
            },
            {
              name: "BoxFelt Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/BoxFelt Baffles.pdf",
            },
            {
              name: "High Profile Series™ - Frameworks",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/High Profile Series™ - Frameworks.pdf",
            },
            {
              name: "High Profile Series™ - Straight Baffle Ceiling",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/High Profile Series™ - Straight Baffle Ceiling.pdf",
            },
            {
              name: "High Profile Series™ - Vertically Curved Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/High Profile Series™ - Vertically Curved Baffles.pdf",
            },
            {
              name: "LockFelt",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/LockFelt.pdf",
            },
            {
              name: "LumiFelt Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/LumiFelt Baffles.pdf",
            },
            {
              name: "Tavola™ Canted",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Canted.pdf",
            },
            {
              name: "Tavola™ Divergent",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Divergent.pdf",
            },
            {
              name: "Tavola™ Expressions™",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Expressions™.pdf",
            },
            {
              name: "Tavola™ Frames",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Frames.pdf",
            },
            {
              name: "Tavola™ Levels",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Levels.pdf",
            },
            {
              name: "Tavola™ Prime Beams & Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Prime Beams & Baffles.pdf",
            },
            {
              name: "Tavola™ Round Beams & Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Round Beams & Baffles.pdf",
            },
            {
              name: "Tavola™ Tall Beams & Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/Tavola™ Tall Beams & Baffles.pdf",
            },
            {
              name: "ThinFelt Baffles",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/ThinFelt Baffles.pdf",
            },
            {
              name: "V-Baffle Fins",
              file: "/uploads/Certainteed/ceiling/Beams & Baffles/V-Baffle Fins.pdf",
            },
          ],
        },

        {
          name: "Canopies & Clouds ",
          products: [
            {
              name: "Ecophon® Solo™ Baffle",
              file: "client/uploads/Certainteed/ceiling/Canopies & Clouds/Ecophon® Solo™ Baffle.pdf",
            },
            {
              name: "Ecophon® Solo™ Clouds",
              file: "client/uploads/Certainteed/ceiling/Canopies & Clouds/Ecophon® Solo™ Clouds.pdf",
            },
            {
              name: "Felt Nuvola Round",
              file: "client/uploads/Certainteed/ceiling/Canopies & Clouds/Felt Nuvola Round.pdf",
            },
            {
              name: "HeartFelt® Nuvola™",
              file: "client/uploads/Certainteed/ceiling/Canopies & Clouds/HeartFelt® Nuvola™.pdf",
            },
            {
              name: "Petals",
              file: "client/uploads/Certainteed/ceiling/Canopies & Clouds/Petals.pdf",
            },
            {
              name: "Wood Canopies & Diffusers",
              file: "client/uploads/Certainteed/ceiling/Canopies & Clouds/Wood Canopies & Diffusers.pdf",
            },
          ],
        },
        {
          name: "Decoustics ",
          products: [
            {
              name: "Decoustics Architectural Forms",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Architectural Forms.pdf",
            },
            {
              name: "Decoustics Baffles Claro",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Baffles Claro.pdf",
            },
            {
              name: "Decoustics Baffles Fabric",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Baffles Fabric.pdf",
            },
            {
              name: "Decoustics Ceilencio",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Ceilencio.pdf",
            },
            {
              name: "Decoustics Claro",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Claro.pdf",
            },
            {
              name: "Decoustics Clean-Air Claro",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Clean-Air Claro.pdf",
            },
            {
              name: "Decoustics Coffer Ceiling",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Coffer Ceiling.pdf",
            },
            {
              name: "Decoustics Design Return",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Design Return.pdf",
            },

            {
              name: "Decoustics Direct Mount",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Direct Mount.pdf",
            },
            {
              name: "Decoustics Direct Suspended",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Direct Suspended.pdf",
            },
            {
              name: "Decoustics Easy-Clean Claro",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Easy-Clean Claro.pdf",
            },
            {
              name: "Decoustics Fabric finish",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Fabric finish.pdf",
            },
            {
              name: "Decoustics Fori",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Fori.pdf",
            },
            {
              name: "Decoustics Impressions",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Impressions.pdf",
            },
            {
              name: "Decoustics Lay-in",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Lay-in.pdf",
            },
            {
              name: "Decoustics LED Ceilencio",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics LED Ceilencio.pdf",
            },
            {
              name: "Decoustics LightFrame",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics LightFrame.pdf",
            },

            {
              name: "Decoustics Metallo",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Metallo.pdf",
            },
            {
              name: "Decoustics Nuvola",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Nuvola.pdf",
            },

            {
              name: "Decoustics Quadrillo® Wood Ceilings and Walls",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Quadrillo® Wood Ceilings and Walls.pdf",
            },

            {
              name: "Decoustics Rondolo",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Rondolo.pdf",
            },

            {
              name: "Decoustics S-Shaped Ceiling",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics S-Shaped Ceiling.pdf",
            },

            {
              name: "Decoustics Solo M",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Solo M.pdf",
            },

            {
              name: "Decoustics Solo P",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Solo P.pdf",
            },

            {
              name: "Decoustics Span Ceiling",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Span Ceiling.pdf",
            },

            {
              name: "Decoustics Suspended Reveal",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Suspended Reveal.pdf",
            },

            {
              name: "Decoustics Wall Mount",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Wall Mount.pdf",
            },
            {
              name: "Decoustics Wire Suspension",
              file: "/uploads/Certainteed/ceiling/Decoustics/Decoustics Wire Suspension.pdf",
            },
          ],
        },
        {
          name: "Drywall Suspension Systems ",
          products: [
            {
              name: "1 1 2 Drywall Suspension System",
              file: "/uploads/Certainteed/ceiling/Drywall Suspension Systems/1 1 2 Drywall Suspension System.pdf",
            },
            {
              name: "Quickspan™ Locking Drywall Grid System",
              file: "/uploads/Certainteed/ceiling/Drywall Suspension Systems/Quickspan™ Locking Drywall Grid System.pdf",
            },
          ],
        },
        {
          name: "Grid Accessories ",
          products: [
            {
              name: "9 16 EZ Stab Bolt Slot System - 1 4 Reveal",
              file: "/uploads/Certainteed/ceiling/Grid Accessories/9 16 EZ Stab Bolt Slot System - 1 4 Reveal.pdf",
            },
            {
              name: "9 16 EZ Stab Bolt Slot System - 1 8 Reveal",
              file: "/uploads/Certainteed/ceiling/Grid Accessories/9 16 EZ Stab Bolt Slot System - 1 8 Reveal.pdf",
            },
            {
              name: "Grid Accessories",
              file: "/uploads/Certainteed/ceiling/Grid Accessories/Grid Accessories.pdf",
            },
            {
              name: "Wall Angle",
              file: "/uploads/Certainteed/ceiling/Grid Accessories/Wall Angle.pdf",
            },
          ],
        },
        {
          name: "Grille Modules ",
          products: [
            {
              name: "Grille Modules",
              file: "/uploads/Certainteed/ceiling/Grille Modules/Grille Modules.pdf",
            },
            {
              name: "Lay-in Grille and Linear Wood Ceilings",
              file: "/uploads/Certainteed/ceiling/Grille Modules/Lay-in Grille and Linear Wood Ceilings.pdf",
            },
          ],
        },
        {
          name: "Linear ",
          products: [
            {
              name: "84R & 84G – Linear",
              file: "/uploads/Certainteed/ceiling/Linear/84R & 84G – Linear.pdf",
            },
            {
              name: "150F - Linear Metal Soffit System",
              file: "/uploads/Certainteed/ceiling/Linear/150F - Linear Metal Soffit System.pdf",
            },
            {
              name: "300C - Linear Plank – Exterior",
              file: "/uploads/Certainteed/ceiling/Linear/300C - Linear Plank – Exterior.pdf",
            },
            {
              name: "300C - Linear Plank",
              file: "/uploads/Certainteed/ceiling/Linear/300C - Linear Plank.pdf",
            },
            {
              name: "Box Series - Exterior",
              file: "/uploads/Certainteed/ceiling/Linear/Box Series - Exterior.pdf",
            },
            {
              name: "Box Series",
              file: "/uploads/Certainteed/ceiling/Linear/Box Series.pdf",
            },
            {
              name: "Combi-Line",
              file: "/uploads/Certainteed/ceiling/Linear/Combi-Line.pdf",
            },
            {
              name: "Continuous Linear Grille",
              file: "/uploads/Certainteed/ceiling/Linear/Continuous Linear Grille.pdf",
            },
            {
              name: "Deep Box Series – Exterior",
              file: "/uploads/Certainteed/ceiling/Linear/Deep Box Series – Exterior.pdf",
            },
            {
              name: "Deep Box Series",
              file: "/uploads/Certainteed/ceiling/Linear/Deep Box Series.pdf",
            },
            {
              name: "HeartFelt® Linear, Levels & Round",
              file: "/uploads/Certainteed/ceiling/Linear/HeartFelt® Linear, Levels & Round.pdf",
            },
            {
              name: "Multi-Box Continuous - Exterior",
              file: "/uploads/Certainteed/ceiling/Linear/Multi-Box Continuous - Exterior.pdf",
            },
            {
              name: "Multi-Box Continuous",
              file: "/uploads/Certainteed/ceiling/Linear/Multi-Box Continuous.pdf",
            },
            {
              name: "Multi-Box Networks",
              file: "/uploads/Certainteed/ceiling/Linear/Multi-Box Networks.pdf",
            },
          ],
        },
        {
          name: "Spanning Suspension Systems ",
          products: [
            {
              name: "Quickspan™ Locking Drywall Grid System",
              file: "/uploads/Certainteed/ceiling/Spanning Suspension Systems/Quickspan™ Locking Drywall Grid System.pdf",
            },
          ],
        },
        {
          name: "Stretch & Expanded Metal ",
          products: [
            {
              name: "Metalinx™ Ceilings",
              file: "/uploads/Certainteed/ceiling/Stretch & Expanded Metal/Metalinx™ Ceilings.pdf",
            },
          ],
        },
        {
          name: "Trims ",
          products: [
            {
              name: "Terminus Drywall Perimeter Trim",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Drywall Perimeter Trim.pdf",
            },
            {
              name: "Terminus Fin Perimeter Trim",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Fin Perimeter Trim.pdf",
            },
            {
              name: "Terminus Semi-Concealed Perimeter Trim",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Semi-Concealed Perimeter Trim.pdf",
            },
            {
              name: "Terminus Straight Perimeter Trim",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Straight Perimeter Trim.pdf",
            },
            {
              name: "Terminus Transitions - Acoustical to Acoustical",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Acoustical to Acoustical.pdf",
            },
            {
              name: "Terminus Transitions - Acoustical to Drywall",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Acoustical to Drywall.pdf",
            },
            {
              name: "Terminus Transitions - Drywall to Acoustical",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Drywall to Acoustical.pdf",
            },
            {
              name: "Terminus Transitions - Drywall to Drywall",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Drywall to Drywall.pdf",
            },
            {
              name: "Terminus Transitions - Glazing Channels",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Glazing Channels.pdf",
            },
            {
              name: "Terminus Transitions - Semi-Concealed to Acoustical",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Semi-Concealed to Acoustical.pdf",
            },
            {
              name: "Terminus Transitions - Semi-Concealed to Drywall",
              file: "/uploads/Certainteed/ceiling/Trims/Terminus Transitions - Semi-Concealed to Drywall.pdf",
            },
          ],
        },
        {
          name: "Wall Panels ",
          products: [
            {
              name: "BlockFelt",
              file: "/uploads/Certainteed/ceiling/Wall Panels/BlockFelt.pdf",
            },
            {
              name: "Ecophon® Akusto™ One",
              file: "/uploads/Certainteed/ceiling/Wall Panels/Ecophon® Akusto™ One.pdf",
            },
            {
              name: "Ecophon® Akusto™ Wall C Super G™",
              file: "/uploads/Certainteed/ceiling/Wall Panels/Ecophon® Akusto™ Wall C Super G™.pdf",
            },
            {
              name: "Ecophon® Akusto™ Wall C Texona",
              file: "/uploads/Certainteed/ceiling/Wall Panels/Ecophon® Akusto™ Wall C Texona.pdf",
            },
            {
              name: "Ecophon® Hygiene Advance™ Wall Panels",
              file: "/uploads/Certainteed/ceiling/Wall Panels/Ecophon® Hygiene Advance™ Wall Panels.pdf",
            },
            {
              name: "ExpressionsFelt",
              file: "/uploads/Certainteed/ceiling/Wall Panels/ExpressionsFelt.pdf",
            },
            {
              name: "Metal Walls",
              file: "/uploads/Certainteed/ceiling/Wall Panels/Metal Walls.pdf",
            },
            {
              name: "PuzzleFelt",
              file: "/uploads/Certainteed/ceiling/Wall Panels/PuzzleFelt.pdf",
            },
            {
              name: "SheetFelt",
              file: "/uploads/Certainteed/ceiling/Wall Panels/SheetFelt.pdf",
            },
          ],
        },
        {
          name: "Panels, Planks & Tiles ",
          products: [
            {
              name: "Acoustic Plank Wood Ceilings and Walls",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Acoustic Plank Wood Ceilings and Walls.pdf",
            },
            {
              name: "Adagio® & Adagio High CAC",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Adagio® & Adagio High CAC.pdf",
            },
            {
              name: "Aquarock™",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Aquarock™.pdf",
            },
            {
              name: "Baroque™ & Baroque Customline®",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Baroque™ & Baroque Customline®.pdf",
            },
            {
              name: "Cashmere® Collection",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Cashmere® Collection.pdf",
            },
            {
              name: "Continuous Linear Planks",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Continuous Linear Planks.pdf",
            },
            {
              name: "Ecophon® Focus™ A, E",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Ecophon® Focus™ A, E.pdf",
            },
            {
              name: "Ecophon® Focus™ B, F, SQ",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Ecophon® Focus™ B, F, SQ.pdf",
            },
            {
              name: "Ecophon® Focus™ DG",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Ecophon® Focus™ DG.pdf",
            },
            {
              name: "Ecophon® Focus™ DS",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Ecophon® Focus™ DS.pdf",
            },
            {
              name: "Envirogard™",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Envirogard™.pdf",
            },
            {
              name: "Fine Fissured Collection",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Fine Fissured Collection.pdf",
            },
            {
              name: "Gladius™ Ceiling Panels",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Gladius™ Ceiling Panels.pdf",
            },
            {
              name: "Gyptone® Acoustical Panels",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Gyptone® Acoustical Panels.pdf",
            },
            {
              name: "Hook-On",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Hook-On.pdf",
            },
            {
              name: "Lay-In Levels",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Lay-In Levels.pdf",
            },
            {
              name: "Lay-in Open Cell Wood Ceilings",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Lay-in Open Cell Wood Ceilings.pdf",
            },
            {
              name: "Lay-In",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Lay-In.pdf",
            },

            {
              name: "Open Cell - Metal",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Open Cell - Metal.pdf",
            },
            {
              name: "Open Plan™",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Open Plan™.pdf",
            },
            {
              name: "Panelized Linear Plank Wood Ceilings and Walls",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Panelized Linear Plank Wood Ceilings and Walls.pdf",
            },
            {
              name: "Panels",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Panels.pdf",
            },
            {
              name: "Sand Micro™ Collection",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Sand Micro™ Collection.pdf",
            },
            {
              name: "School Board®",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/School Board®.pdf",
            },
            {
              name: "Sereno™ Fine Fissured",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Sereno™ Fine Fissured.pdf",
            },
            {
              name: "Snap-In",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Snap-In.pdf",
            },

            {
              name: "Symphony® f Rx",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Symphony® f Rx.pdf",
            },
            {
              name: "Symphony® m 70 Rx & Symphony® m 80 Rx",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Symphony® m 70 Rx & Symphony® m 80 Rx.pdf",
            },
            {
              name: "Symphony® m Collection",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Symphony® m Collection.pdf",
            },
            {
              name: "Theatre® Black f",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Theatre® Black f.pdf",
            },

            {
              name: "Torsion Spring - Curved",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Torsion Spring - Curved.pdf",
            },
            {
              name: "Torsion Spring - Expressions™",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Torsion Spring - Expressions™.pdf",
            },
            {
              name: "Torsion Spring - Exterior",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Torsion Spring - Exterior.pdf",
            },
            {
              name: "Torsion Spring - Geometries",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Torsion Spring - Geometries.pdf",
            },
            {
              name: "Torsion Spring - Segmented",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Torsion Spring - Segmented.pdf",
            },
            {
              name: "Torsion Spring",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Torsion Spring.pdf",
            },
            {
              name: "Versatone™",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Versatone™.pdf",
            },
            {
              name: "Vinylrock™",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Vinylrock™.pdf",
            },
            {
              name: "Vinylshield™ A & C",
              file: "/uploads/Certainteed/ceiling/Panels, Planks & Tiles/Vinylshield™ A & C.pdf",
            },
          ],
        },
      ],
    },
  ]);

  const [insulationVendors, setinsulationlVendors] = useState([
    {
      name: "ROCKWOOL",
      subVendors: [
        {
          name: "Roof Insulation",
          products: [
            {
              name: "ROCKWOOL Comfortbatt®",
              file: "/uploads/ROCKWOOL/insulation/Roof Insulation/ROCKWOOL Comfortbatt®.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard® 80",
              file: "/uploads/ROCKWOOL/insulation/Roof Insulation/ROCKWOOL Comfortboard® 80.pdf",
            },
            {
              name: "ROCKWOOL Multifix™",
              file: "/uploads/ROCKWOOL/insulation/Roof Insulation/ROCKWOOL Multifix™.pdf",
            },
            {
              name: "ROCKWOOL Toprock® DD Plus",
              file: "/uploads/ROCKWOOL/insulation/Roof Insulation/ROCKWOOL Toprock® DD Plus.pdf",
            },
            {
              name: "ROCKWOOL Toprock® Tapered, Flute Filler and Cant Strips",
              file: "/uploads/ROCKWOOL/insulation/Roof Insulation/ROCKWOOL Toprock® Tapered, Flute Filler and Cant Strips.pdf",
            },
            {
              name: "Toprock® DDFlat Roof Insulation",
              file: "/uploads/ROCKWOOL/insulation/Roof Insulation/Toprock® DDFlat Roof Insulation.pdf",
            },
          ],
        },
        {
          name: "Below Grade Insulation",
          products: [
            {
              name: "ROCKWOOL Comfortbatt®",
              file: "/uploads/ROCKWOOL/insulation/Below Grade Insulation/ROCKWOOL Comfortbatt®.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard® 80",
              file: "/uploads/ROCKWOOL/insulation/Below Grade Insulation/ROCKWOOL Comfortboard® 80.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard® 110",
              file: "/uploads/ROCKWOOL/insulation/Below Grade Insulation/ROCKWOOL Comfortboard® 110.pdf",
            },
          ],
        },
        {
          name: "floor Insulation",
          products: [
            {
              name: "ROCKWOOL Comfortbatt®",
              file: "/uploads/ROCKWOOL/insulation/Floor insulation/ROCKWOOL Comfortbatt®.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard® 80",
              file: "/uploads/ROCKWOOL/insulation/Floor insulation/ROCKWOOL Comfortboard® 80.pdf",
            },
            {
              name: "ROCKWOOL Safe'n'Sound®",
              file: "/uploads/ROCKWOOL/insulation/Floor insulation/ROCKWOOL Safe'n'Sound®.pdf",
            },
          ],
        },
        {
          name: "ceiling Insulation",
          products: [
            {
              name: "ROCKWOOL Comfortbatt®",
              file: "/uploads/ROCKWOOL/insulation/ceiling insulation/ROCKWOOL Comfortbatt®.pdf",
            },
            {
              name: "ROCKWOOL Rockboard®",
              file: "/uploads/ROCKWOOL/insulation/ceiling insulation/ROCKWOOL Rockboard®.pdf",
            },
            {
              name: "ROCKWOOL Safe'n'Sound®",
              file: "/uploads/ROCKWOOL/insulation/ceiling insulation/ROCKWOOL Safe'n'Sound®.pdf",
            },
          ],
        },
        {
          name: "Interior Wall Insulation",
          products: [
            {
              name: "ROCKWOOL AFB®",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL AFB®.pdf",
            },
            {
              name: "ROCKWOOL Comfortbatt®",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL Comfortbatt®.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard®",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL Comfortboard® 80.pdf",
            },
            {
              name: "ROCKWOOL Rockboard®",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL Rockboard®.pdf",
            },
            {
              name: "ROCKWOOL ROXUL Safe® 45",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL ROXUL Safe® 45.pdf",
            },
            {
              name: "ROCKWOOL ROXUL Safe®",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL ROXUL Safe®.pdf",
            },
            {
              name: "ROCKWOOL Safe'n'Sound®",
              file: "/uploads/ROCKWOOL/insulation/Interior Wall Insulation/ROCKWOOL Safe'n'Sound®.pdf",
            },
          ],
        },
        {
          name: "Exterior Wall Insulation",
          products: [
            {
              name: "ROCKWOOL Cavityrock®",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Cavityrock®.pdf",
            },
            {
              name: "ROCKWOOL Comfortbatt®",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Comfortbatt®.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard® 80",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Comfortboard® 80.pdf",
            },
            {
              name: "ROCKWOOL Comfortboard® 110",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Comfortboard® 110.pdf",
            },
            {
              name: "ROCKWOOL Curtainrock ®",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Curtainrock ®.pdf",
            },
            {
              name: "ROCKWOOL Frontrock™",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Frontrock™.pdf",
            },
            {
              name: "ROCKWOOL Plus™ MB",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL Plus™ MB.pdf",
            },
            {
              name: "ROCKWOOL ROXUL Safe®  65",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL ROXUL Safe®  65.pdf",
            },

            {
              name: "ROCKWOOL ROXUL Safe® 45",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL ROXUL Safe® 45.pdf",
            },

            {
              name: "ROCKWOOL ROXUL Safe® 55",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL ROXUL Safe® 55.pdf",
            },

            {
              name: "ROCKWOOL ROXUL Safe®",
              file: "/uploads/ROCKWOOL/insulation/Exterior Wall Insulation/ROCKWOOL ROXUL Safe®.pdf",
            },
          ],
        },
        {
          name: "OEM Insulation",
          products: [
            {
              name: "Fabrock™ Series",
              file: "/uploads/ROCKWOOL/insulation/OEM Insulation/Fabrock™ Series.pdf",
            },
            {
              name: "ROCKWOOL Conrock® 60",
              file: "/uploads/ROCKWOOL/insulation/OEM Insulation/ROCKWOOL Conrock® 60.pdf",
            },
            {
              name: "ROCKWOOL Conrock®",
              file: "/uploads/ROCKWOOL/insulation/OEM Insulation/ROCKWOOL Conrock®.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "OWENSCORNING",
      subVendors: [
        {
          name: "Industrial Insulation Products",
          products: [
            {
              name: "Fiberglas™ FLEXWRAP®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Fiberglas™ FLEXWRAP®.pdf",
            },
            {
              name: "Fiberglas™ Insul-Quick® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Fiberglas™ Insul-Quick® Insulation.pdf",
            },
            {
              name: "Fiberglas™ Thermal Insulating Wool (TIW)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Fiberglas™ Thermal Insulating Wool (TIW).pdf",
            },
            {
              name: "Fiberglas™ UtiliCore® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Fiberglas™ UtiliCore® Insulation.pdf",
            },
            {
              name: "FOAMGLAS® HLB 800 Insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® HLB 800 Insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® HLB 1000 Insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® HLB 1000 Insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® HLB 1200 Insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® HLB 1200 Insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® HLB 1400 Insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® HLB 1400 Insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® HLB 1600 insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® HLB 1600 insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® HLB 2400 insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® HLB 2400 insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® ONE™ insulation (ASTM)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® ONE™ insulation (ASTM).pdf",
            },
            {
              name: "FOAMGLAS® PFS™ SYSTEM POOL FIRE SUPPRESSANT GENERATION 2",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® PFS™ SYSTEM POOL FIRE SUPPRESSANT GENERATION 2.pdf",
            },
            {
              name: "FOAMGLAS® StrataFab® System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMGLAS® StrataFab® System.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® HALF-INCH",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMULAR® & FOAMULAR® NGX® HALF-INCH.pdf",
            },
            {
              name: "FOAMULAR® XPS Pipe Insulation Fabrication Billets",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/FOAMULAR® XPS Pipe Insulation Fabrication Billets.pdf",
            },
            {
              name: "Large Diameter Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Large Diameter Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "Metric Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Metric Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "No-Wrap Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/No-Wrap Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "PureSolution® Technology (TRS-PST & GEM®) Range Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/PureSolution® Technology (TRS-PST & GEM®) Range Insulation.pdf",
            },
            {
              name: "SelectSound® Black Acoustic Blanket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/SelectSound® Black Acoustic Blanket.pdf",
            },
            {
              name: "SelectSound® Black Acoustic Board",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/SelectSound® Black Acoustic Board.pdf",
            },
            {
              name: "SSL II® with ASJ Max Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/SSL II® with ASJ Max Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "Thermafiber® Industrial Board",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Thermafiber® Industrial Board.pdf",
            },
            {
              name: "Type 703 & Type 705 Series Fiberglas™ Insulation Boards",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Type 703 & Type 705 Series Fiberglas™ Insulation Boards.pdf",
            },
            {
              name: "Type 706 & Type 707 Series Fiberglas™ Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Industrial Insulation Products/Type 706 & Type 707 Series Fiberglas™ Insulation.pdf",
            },
          ],
        },
        {
          name: "home Insulation Products",
          products: [
            {
              name: "Attic Stairway Fiberglass Insulation Kit",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Attic Stairway Fiberglass Insulation Kit.pdf",
            },
            {
              name: "AttiCat® PINK® Blown-In Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/AttiCat® PINK® Blown-In Insulation.pdf",
            },
            {
              name: "EcoTouch® Certified R Metal Building Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/EcoTouch® Certified R Metal Building Insulation.pdf",
            },
            {
              name: "EcoTouch® Insulation for Flexible Duct",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/EcoTouch® Insulation for Flexible Duct.pdf",
            },
            {
              name: "EcoTouch® Insulation for Metal Building Utility Blanket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/EcoTouch® Insulation for Metal Building Utility Blanket.pdf",
            },
            {
              name: "EcoTouch® MBI Plus Filler Blanket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/EcoTouch® MBI Plus Filler Blanket.pdf",
            },
            {
              name: "FOAMGLAS® Perinsul® SIB",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMGLAS® Perinsul® SIB.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 150",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® 150.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 250",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® 250.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 400 600 1000",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® 400 600 1000.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® CW25",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® CW25.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® HALF-INCH",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® HALF-INCH.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® INSUL-DRAIN",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® INSUL-DRAIN.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® Insulating Sheathing (IS)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® Insulating Sheathing (IS).pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® LT30 LT40",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® LT30 LT40.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® THERMAPINK® 25 XPS",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® & FOAMULAR® NGX® THERMAPINK® 25 XPS.pdf",
            },
            {
              name: "FOAMULAR® Fanfold",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® Fanfold.pdf",
            },
            {
              name: "FOAMULAR® FlashSealR",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® FlashSealR.pdf",
            },
            {
              name: "FOAMULAR® Project Wall Panels",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/FOAMULAR® Project Wall Panels.pdf",
            },
            {
              name: "Garage Door Fiberglass Insulation Kit",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Garage Door Fiberglass Insulation Kit.pdf",
            },
            {
              name: "HOMESEALR®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/HOMESEALR®.pdf",
            },
            {
              name: "Multipurpose Insulation Roll",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Multipurpose Insulation Roll.pdf",
            },
            {
              name: "Owens Corning PINK Next Gen™ Fiberglas™ FSK Faced",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Owens Corning PINK Next Gen™ Fiberglas™ FSK Faced.pdf",
            },
            {
              name: "Owens Corning PINK Next Gen™ Fiberglas™ Kraft Faced",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Owens Corning PINK Next Gen™ Fiberglas™ Kraft Faced.pdf",
            },
            {
              name: "Owens Corning PINK Next Gen™ Fiberglas™ Unfaced",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Owens Corning PINK Next Gen™ Fiberglas™ Unfaced.pdf",
            },
            {
              name: "PINK Next Gen™ Fiberglas™ Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PINK Next Gen™ Fiberglas™ Insulation.pdf",
            },
            {
              name: "PINK Next Gen™ Sound Attenuation Batts (SAB)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PINK Next Gen™ Sound Attenuation Batts (SAB).pdf",
            },
            {
              name: "PINK® Fiberglas™ Sonobatts®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PINK® Fiberglas™ Sonobatts®.pdf",
            },
            {
              name: "ProCat® Professional Loosefill Insulation System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/ProCat® Professional Loosefill Insulation System.pdf",
            },
            {
              name: "PROPINK COMFORTSEAL™ GUN FOAM ALL SEASON",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PROPINK COMFORTSEAL™ GUN FOAM ALL SEASON.pdf",
            },
            {
              name: "ProPink ComfortSeal™ Gun Foam",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/ProPink ComfortSeal™ Gun Foam.pdf",
            },
            {
              name: "PROPINK®  COMFORTSEAL™ FRAMING  GASKET",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PROPINK®  COMFORTSEAL™ FRAMING  GASKET.pdf",
            },
            {
              name: "PROPINK® COMFORTSEAL™ SILL GASKET",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PROPINK® COMFORTSEAL™ SILL GASKET.pdf",
            },
            {
              name: "PROPINK® L77 PINK® Fiberglas™",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/PROPINK® L77 PINK® Fiberglas™.pdf",
            },
            {
              name: "QuietR® Duct Board",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/QuietR® Duct Board.pdf",
            },
            {
              name: "Raft-R-Mate®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Raft-R-Mate®.pdf",
            },
            {
              name: "SOFTR® Duct Wrap FRK",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/SOFTR® Duct Wrap FRK.pdf",
            },
            {
              name: "Thermafiber® Fire & Sound Guard® Plus",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Thermafiber® Fire & Sound Guard® Plus.pdf",
            },
            {
              name: "Thermafiber® SAFB™ (Sound Attenuation Fire Blanket)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Home Insulation Products/Thermafiber® SAFB™ (Sound Attenuation Fire Blanket).pdf",
            },
          ],
        },
        {
          name: "Commercial Building Insulation Products",
          products: [
            {
              name: "EcoTouch® Certified R Metal Building Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/EcoTouch® Certified R Metal Building Insulation.pdf",
            },
            {
              name: "EcoTouch® Insulation for Flexible Duct",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/EcoTouch® Insulation for Flexible Duct.pdf",
            },
            {
              name: "EcoTouch® Insulation for Metal Building Utility Blanket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/EcoTouch® Insulation for Metal Building Utility Blanket.pdf",
            },
            {
              name: "EcoTouch® MBI Plus Filler Blanket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/EcoTouch® MBI Plus Filler Blanket.pdf",
            },
            {
              name: "ELAMINATOR® Insulation System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/ELAMINATOR® Insulation System.pdf",
            },
            {
              name: "Fiberglas™ FLEXWRAP®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Fiberglas™ FLEXWRAP®.pdf",
            },
            {
              name: "Fiberglas™ Insul-Quick® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Fiberglas™ Insul-Quick® Insulation.pdf",
            },
            {
              name: "Fiberglas™ Thermal Insulating Wool (TIW)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Fiberglas™ Thermal Insulating Wool (TIW).pdf",
            },
            {
              name: "Fiberglas™ UtiliCore® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Fiberglas™ UtiliCore® Insulation.pdf",
            },
            {
              name: "FOAMGLAS® Perinsul® SIB",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMGLAS® Perinsul® SIB.pdf",
            },
            {
              name: "FOAMGLAS® T3+T4+S3+F Cellular Glass",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMGLAS® T3+T4+S3+F Cellular Glass.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 150",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® 150.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 250",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® 250.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 400 600 1000 TAPERED",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® 400 600 1000 TAPERED.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 400 600 1000",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® 400 600 1000.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 404 604",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® 404 604.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® 404RB 604RB",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® 404RB 604RB.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® CW25",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® CW25.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® INSUL-DRAIN®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® INSUL-DRAIN®.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® LT30 LT40",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® LT30 LT40.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® THERMAPINK® 25  TAPERED",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® THERMAPINK® 25  TAPERED.pdf",
            },
            {
              name: "FOAMULAR® & FOAMULAR® NGX® THERMAPINK® 25 XPS",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® & FOAMULAR® NGX® THERMAPINK® 25 XPS.pdf",
            },
            {
              name: "FOAMULAR® FlashSealR®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® FlashSealR®.pdf",
            },
            {
              name: "FOAMULAR® NGX® Edgelock®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® NGX® Edgelock®.pdf",
            },
            {
              name: "FOAMULAR® XPS Pipe Insulation Fabrication Billets",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/FOAMULAR® XPS Pipe Insulation Fabrication Billets.pdf",
            },
            {
              name: "JointSealR®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/JointSealR®.pdf",
            },
            {
              name: "Large Diameter Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Large Diameter Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "Metric Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Metric Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "No-Wrap Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/No-Wrap Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "OptiLiner® Banded Liner System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/OptiLiner® Banded Liner System.pdf",
            },
            {
              name: "Owens Corning PINK Next Gen™ Fiberglas™ FSK Faced",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Owens Corning PINK Next Gen™ Fiberglas™ FSK Faced.pdf",
            },
            {
              name: "Owens Corning PINK Next Gen™ Fiberglas™ Kraft Faced",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Owens Corning PINK Next Gen™ Fiberglas™ Kraft Faced.pdf",
            },
            {
              name: "Owens Corning PINK Next Gen™ Fiberglas™ Unfaced",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Owens Corning PINK Next Gen™ Fiberglas™ Unfaced.pdf",
            },
            {
              name: "PINK Next Gen™ Fiberglas™ Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PINK Next Gen™ Fiberglas™ Insulation.pdf",
            },
            {
              name: "PINK Next Gen™ Sound Attenuation Batts (SAB)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PINK Next Gen™ Sound Attenuation Batts (SAB).pdf",
            },
            {
              name: "PINK® Fiberglas™ Sonobatts®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PINK® Fiberglas™ Sonobatts®.pdf",
            },
            {
              name: "PLIATEMP™ SERIES INSULATION",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PLIATEMP™ SERIES INSULATION.pdf",
            },
            {
              name: "PROPINK COMFORTSEAL™ GUN FOAM ALL SEASON",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PROPINK COMFORTSEAL™ GUN FOAM ALL SEASON.pdf",
            },
            {
              name: "ProPink ComfortSeal™ Gun Foam",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/ProPink ComfortSeal™ Gun Foam.pdf",
            },
            {
              name: "PROPINK®  COMFORTSEAL™ FRAMING  GASKET",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PROPINK®  COMFORTSEAL™ FRAMING  GASKET.pdf",
            },
            {
              name: "PROPINK® COMFORTSEAL™ SILL GASKET",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PROPINK® COMFORTSEAL™ SILL GASKET.pdf",
            },
            {
              name: "PureSolution® Technology (TRS-PST & GEM®) Range Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/PureSolution® Technology (TRS-PST & GEM®) Range Insulation.pdf",
            },
            {
              name: "QuietR® Duct Board",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/QuietR® Duct Board.pdf",
            },
            {
              name: "QuietR® Duct Liner Board",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/QuietR® Duct Liner Board.pdf",
            },
            {
              name: "QuietR® Duct Liner HD-Roll",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/QuietR® Duct Liner HD-Roll.pdf",
            },
            {
              name: "QuietR® Rotary Duct Liner",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/QuietR® Rotary Duct Liner.pdf",
            },
            {
              name: "QuietR® Spiral Duct Liner",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/QuietR® Spiral Duct Liner.pdf",
            },
            {
              name: "RA Series EcoTouch® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/RA Series EcoTouch® Insulation.pdf",
            },
            {
              name: "Rotary Duct Liner for OEMs",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Rotary Duct Liner for OEMs.pdf",
            },
            {
              name: "SelectSound® Black Acoustic Blanket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/SelectSound® Black Acoustic Blanket.pdf",
            },
            {
              name: "SelectSound® Black Acoustic Board",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/SelectSound® Black Acoustic Board.pdf",
            },
            {
              name: "SOFTR® Duct Wrap FRK",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/SOFTR® Duct Wrap FRK.pdf",
            },
            {
              name: "SSL II® with ASJ Max Fiberglas™ Pipe Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/SSL II® with ASJ Max Fiberglas™ Pipe Insulation.pdf",
            },
            {
              name: "Thermafiber® Aluminum Foil & FSK Tape",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Aluminum Foil & FSK Tape.pdf",
            },
            {
              name: "Thermafiber® Fire & Sound Guard® Plus",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Fire & Sound Guard® Plus.pdf",
            },
            {
              name: "Thermafiber® FireLedge®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® FireLedge®.pdf",
            },
            {
              name: "Thermafiber® FireSpan®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® FireSpan®.pdf",
            },
            {
              name: "Thermafiber® Impasse® 2.0 Hangers",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Impasse® 2.0 Hangers.pdf",
            },
            {
              name: "Thermafiber® Impasse® Hangers",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Impasse® Hangers.pdf",
            },
            {
              name: "Thermafiber® Impasse® No Backer Bar™ System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Impasse® No Backer Bar™ System.pdf",
            },
            {
              name: "Thermafiber® Impasse® System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Impasse® System.pdf",
            },
            {
              name: "Thermafiber® Impasse® Zero Spandrel System",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Impasse® Zero Spandrel System.pdf",
            },
            {
              name: "Thermafiber® Insulation Knives",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Insulation Knives.pdf",
            },
            {
              name: "Thermafiber® Mullion Cover Bracket",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Mullion Cover Bracket.pdf",
            },

            {
              name: "Thermafiber® RainBarrier® ci High Compressive Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® RainBarrier® ci High Compressive Insulation.pdf",
            },
            {
              name: "THERMAFIBER® RAINBARRIER® CLIP",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/THERMAFIBER® RAINBARRIER® CLIP.pdf",
            },
            {
              name: "Thermafiber® RainBarrier® Dark™",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® RainBarrier® Dark™.pdf",
            },
            {
              name: "Thermafiber® RainBarrier® Semi-Rigid Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® RainBarrier® Semi-Rigid Insulation.pdf",
            },
            {
              name: "Thermafiber® SAFB™ (Sound Attenuation Fire Blanket)",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® SAFB™ (Sound Attenuation Fire Blanket).pdf",
            },
            {
              name: "Thermafiber® Safing",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Safing.pdf",
            },
            {
              name: "Thermafiber® Spiral Anchors",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® Spiral Anchors.pdf",
            },
            {
              name: "Thermafiber® TopStop®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® TopStop®.pdf",
            },

            {
              name: "Thermafiber® VersaBoard®",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Thermafiber® VersaBoard®.pdf",
            },
            {
              name: "ThermoRange System® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/ThermoRange System® Insulation.pdf",
            },
            {
              name: "Type 703 & Type 705 Series Fiberglas™ Insulation Boards",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Type 703 & Type 705 Series Fiberglas™ Insulation Boards.pdf",
            },
            {
              name: "Type 706 & Type 707 Series Fiberglas™ Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/Type 706 & Type 707 Series Fiberglas™ Insulation.pdf",
            },
            {
              name: "VersaMat® Insulation",
              file: "/uploads/owenscorning/THERMAL INSULATION/Commercial Building Insulation Products/VersaMat® Insulation.pdf",
            },
          ],
        },
      ],
    },
  ]);
  const [metalVendors, setmetalVendors] = useState([
    {
      name: "IRENE",
      subVendors: [
        {
          name: "IRENE  ",
          products: [
            {
              name: "IRENE SUBMITTAL",
              file: "/uploads/IRENE ENGINETA/Irene Steel by Engineta Submittal 2024.08.02.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "MRI Steel Framing LLCE",
      subVendors: [
        {
          name: "Framing - Drywall - Non Structural",
          products: [
            {
              name: "162S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/162S125-30.pdf",
            },
            {
              name: "250S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/250S125-30.pdf",
            },
            {
              name: "350S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/350S125-30.pdf",
            },
            {
              name: "362S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/362S125-30.pdf",
            },
            {
              name: "400S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/400S125-30.pdf",
            },
            {
              name: "550S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/550S125-30.pdf",
            },
            {
              name: "600S125-30",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge 30 mil/600S125-30.pdf",
            },
            {
              name: "162S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/162S125-33.pdf",
            },
            {
              name: "250S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/250S125-33.pdf",
            },
            {
              name: "350S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/350S125-33.pdf",
            },
            {
              name: "400S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/400S125-33.pdf",
            },
            {
              name: "550S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/550S125-33.pdf",
            },
            {
              name: "550S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/550S125-33.pdf",
            },
            {
              name: "600S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/600S125-33.pdf",
            },
            {
              name: "800S125-33",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/20 Gauge ST 33 mil/800S125-33.pdf",
            },
            {
              name: "50S125-18",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/50S125-18.pdf",
            },
            {
              name: "162S125-18",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/162S125-18.pdf",
            },{
              name: "250S125-18",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/250S125-18.pdf",
            },{
              name: "350S125-1",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/350S125-18.pdf",
            },{
              name: "362S125-18",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/362S125-18.pdf",
            },{
              name: "400S125-18",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/400S125-18.pdf",
            },{
              name: "600S125-18",
              file: "/uploads/MRI Technologies/Framing - Drywall - Non Structural/25 Gauge 18 mil/600S125-18.pdf",
            },
          ],
        },
        {
          name: "Framing - Structural / Curtainwall",
          products: [
            {
              name: "362S350-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/362S350-118.pdf",
            },
            {
              name: "362S400-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/362S400-118.pdf",
            },
            {
              name: "600S162-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/600S162-118.pdf",
            },
            {
              name: "600S200-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/600S200-118.pdf",
            },
            {
              name: "600S250-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/600S250-118.pdf",
            },
            {
              name: "600S300-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/600S300-118.pdf",
            },
            {
              name: "600S350-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/600S350-118.pdf",
            },
            {
              name: "600S400-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/600S400-118.pdf",
            },
            {
              name: "800S162-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/800S162-118.pdf",
            },
            {
              name: "800S200-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/800S200-118.pdf",
            },
            {
              name: "800S250-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/800S250-118.pdf",
            },
            {
              name: "800S300-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/800S300-118.pdf",
            },
            {
              name: "800S350-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/800S350-118.pdf",
            },
            {
              name: "800S400-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/800S400-118.pdf",
            },
            {
              name: "1000S162-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1000S162-118.pdf",
            },
            {
              name: "1000S200-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1000S200-118.pdf",
            },
            {
              name: "1000S250-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1000S250-118.pdf",
            },
            {
              name: "1000S300-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1000S300-118.pdf",
            },
            {
              name: "1000S350-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1000S350-118.pdf",
            },
            {
              name: "1400S400-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1400S400-118.pdf",
            },
            {
              name: "1600S200-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1600S200-118.pdf",
            },
            {
              name: "1600S250-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1600S250-118.pdf",
            },
            {
              name: "1600S300-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1600S300-118.pdf",
            },
            {
              name: "1600S350-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1600S350-118.pdf",
            },
            {
              name: "1600S400-118",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/10 Gauge 118 mil/1600S400-118.pdf",
            },
            {
              name: "350S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/350S162-97.pdf",
            },
            {
              name: "350S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/350S200-97.pdf",
            },
            {
              name: "362S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/362S162-97.pdf",
            },
            {
              name: "362S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/362S200-97.pdf",
            },
            {
              name: "362S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/362S250-97.pdf",
            },
            {
              name: "362S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/362S300-97.pdf",
            },
            {
              name: "362S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/362S350-97.pdf",
            },
            {
              name: "362S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/362S400-97.pdf",
            },
            {
              name: "400S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/400S162-97.pdf",
            },
            {
              name: "400S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/400S200-97.pdf",
            },
            {
              name: "400S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/400S250-97.pdf",
            },
            {
              name: "400S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/400S300-97.pdf",
            },
            {
              name: "550S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/550S162-97.pdf",
            },
            {
              name: "550S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/550S200-97.pdf",
            },
            {
              name: "600S137-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S137-97.pdf",
            },
            {
              name: "600S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S162-97.pdf",
            },
            {
              name: "600S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S250-97.pdf",
            },
            {
              name: "600S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S250-97.pdf",
            },
            {
              name: "600S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S300-97.pdf",
            },
            {
              name: "600S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S350-97.pdf",
            },
            {
              name: "600S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/600S400-97.pdf",
            },
            {
              name: "800S137-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S137-97.pdf",
            },
            {
              name: "800S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S162-97.pdf",
            },
            {
              name: "800S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S200-97.pdf",
            },
            {
              name: "800S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S250-97.pdf",
            },
            {
              name: "800S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S300-97.pdf",
            },
            {
              name: "800S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S350-97.pdf",
            },
            {
              name: "800S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/800S400-97.pdf",
            },
            {
              name: "1000S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1000S162-97.pdf",
            },
            {
              name: "1000S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1000S200-97.pdf",
            },
            {
              name: "1000S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1000S250-97.pdf",
            },
            {
              name: "1000S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1000S300-97.pdf",
            },
            {
              name: "1000S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1000S350-97.pdf",
            },
            {
              name: "1000S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1000S400-97.pdf",
            },
            {
              name: "1200S162-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1200S162-97.pdf",
            },
            {
              name: "1200S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1200S200-97.pdf",
            },
            {
              name: "1200S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1200S250-97.pdf",
            },
            {
              name: "1200S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1200S300-97.pdf",
            },
            {
              name: "1200S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1200S350-97.pdf",
            },
            {
              name: "1200S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1200S400-97.pdf",
            },
            {
              name: "1400S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1400S200-97.pdf",
            },
            {
              name: "1400S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1400S250-97.pdf",
            },
            {
              name: "1400S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1400S300-97.pdf",
            },
            {
              name: "1400S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1400S350-97.pdf",
            },
            {
              name: "1400S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1400S400-97.pdf",
            },
            {
              name: "1600S200-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1600S200-97.pdf",
            },
            {
              name: "1600S250-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1600S250-97.pdf",
            },
            {
              name: "1600S300-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1600S300-97.pdf",
            },
            {
              name: "1600S350-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1600S350-97.pdff",
            },
            {
              name: "1600S400-97",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/12 Gauge 97 mil/1600S400-97.pdf",
            },
            {
              name: "250S137-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/250S137-68.pdf",
            },
            {
              name: "250S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/250S162-68.pdf",
            },
            {
              name: "350S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/350S162-68.pdf",
            },
            {
              name: "350S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/350S200-68.pdf",
            },
            {
              name: "362S137-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S137-68.pdf",
            },
            {
              name: "362S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S162-68.pdf",
            },
            {
              name: "362S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S200-68.pdf",
            },
            {
              name: "362S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S250-68.pdf",
            },
            {
              name: "362S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S300-68.pdf",
            },
            {
              name: "362S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S350-68.pdf",
            },
            {
              name: "362S400-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/362S400-68.pdf",
            },
            {
              name: "400S137-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/400S137-68.pdf",
            },
            {
              name: "400S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/400S162-68.pdf",
            },
            {
              name: "400S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/400S200-68.pdf",
            },
            {
              name: "400S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/400S250-68.pdf",
            },
            {
              name: "400S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/400S300-68.pdf",
            },
            {
              name: "550S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/550S162-68.pdf",
            },
            {
              name: "550S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/550S200-68.pdf",
            },
            {
              name: "600S137-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S137-68.pdf",
            },
            {
              name: "600S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S162-68.pdf",
            },
            {
              name: "600S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S200-68.pdf",
            },
            {
              name: "600S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S250-68.pdf",
            },
            {
              name: "600S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S300-68.pdf",
            },
            {
              name: "600S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S350-68.pdf",
            },
            {
              name: "600S400-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/600S400-68.pdf",
            },
            {
              name: "800S137-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S137-68.pdf",
            },
            {
              name: "800S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S162-68.pdf",
            },
            {
              name: "800S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S200-68.pdf",
            },
            {
              name: "800S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S250-68.pdf",
            },
            {
              name: "800S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S300-68.pdf",
            },
            {
              name: "800S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S350-68.pdf",
            },
            {
              name: "800S400-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/800S400-68.pdf",
            },
            {
              name: "1000S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1000S162-68.pdf",
            },
            {
              name: "1000S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1000S200-68.pdf",
            },
            {
              name: "1000S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1000S250-68.pdf",
            },
            {
              name: "1000S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1000S300-68.pdf",
            },
            {
              name: "1000S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1000S350-68.pdf",
            },
            {
              name: "1000S400-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1000S400-68.pdf",
            },
            {
              name: "1200S162-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1200S162-68.pdf",
            },
            {
              name: "1200S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1200S200-68.pdf",
            },
            {
              name: "1200S250-6",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1200S250-68.pdf",
            },
            {
              name: "1200S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1200S300-68.pdf",
            },
            {
              name: "1200S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1200S350-68.pdf",
            },
            {
              name: "1200S400-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1200S400-68.pdf",
            },
            {
              name: "1400S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1400S200-68.pdf",
            },
            {
              name: "1400S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1400S250-68.pdf",
            },
            {
              name: "1400S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1400S300-68.pdf",
            },
            {
              name: "1400S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1400S350-68.pdf",
            },
            {
              name: "1400S400-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1400S400-68.pdf",
            },
            {
              name: "1600S200-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1600S200-68.pdf",
            },
             {
              name: "1600S250-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1600S250-68.pdf",
            },
            {
              name: "1600S300-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1600S300-68.pdf",
            },
            {
              name: "1600S350-68",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/14 Gauge 68 mil/1600S350-68.pdf",
            },
            {
              name: "250S137-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/250S137-54.pdf",
            },
            {
              name: "250S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/250S162-54.pdf",
            },
            {
              name: "350S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/350S162-54.pdf",
            },
            {
              name: "350S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/350S200-54.pdf",
            },
            {
              name: "362S137-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S137-54.pdf",
            },
            {
              name: "362S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S162-54.pdf",
            },
            {
              name: "362S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S200-54.pdf",
            },
            {
              name: "362S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S250-54.pdf",
            },
            {
              name: "362S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S300-54.pdf",
            },
            {
              name: "362S350-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S350-54.pdf",
            },
            {
              name: "362S400-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/362S400-54.pdf",
            },
            {
              name: "400S137-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/400S137-54.pdf",
            },
            {
              name: "400S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/400S162-54.pdf",
            },
            {
              name: "400S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/400S200-54.pdf",
            },
            {
              name: "400S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/400S250-54.pdf",
            },
            {
              name: "400S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/400S300-54.pdf",
            },
            {
              name: "550S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/550S162-54.pdf",
            },
            {
              name: "550S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/550S200-54.pdf",
            },
            {
              name: "600S137-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S137-54.pdf",
            },
            {
              name: "600S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S162-54.pdf",
            },
            {
              name: "600S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S200-54.pdf",
            },
            {
              name: "600S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S250-54.pdf",
            },
            {
              name: "600S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S300-54.pdf",
            },
            {
              name: "600S350-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S350-54.pdf",
            },
            {
              name: "600S400-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/600S400-54.pdf",
            },
            {
              name: "800S137-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S137-54.pdf",
            },
            {
              name: "800S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S162-54.pdf",
            },
            {
              name: "800S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S200-54.pdf",
            },
            {
              name: "800S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S250-54.pdf",
            },
            {
              name: "800S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S300-54.pdf",
            },
            {
              name: "800S350-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S350-54.pdf",
            },
            {
              name: "800S400-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/800S400-54.pdf",
            },
            {
              name: "1000S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1000S162-54.pdf",
            },
            {
              name: "1000S200-5",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1000S200-54.pdf",
            },
            {
              name: "1000S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1000S250-54.pdf",
            },
            {
              name: "1000S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1000S300-54.pdf",
            },
            {
              name: "1000S350-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1000S350-54.pdf",
            },
            {
              name: "1000S400-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1000S400-54.pdf",
            },
            {
              name: "1200S162-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1200S162-54.pdf",
            },
            {
              name: "1200S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1200S200-54.pdf",
            },
            {
              name: "1200S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1200S250-54.pdf",
            },
            {
              name: "1200S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1200S300-54.pdf",
            },
            {
              name: "1200S350-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1200S350-54.pdf",
            },
            {
              name: "1400S200-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1400S200-54.pdf",
            },
            {
              name: "1400S250-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1400S250-54.pdf",
            },
            {
              name: "1400S300-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1400S300-54.pdf",
            },
            {
              name: "1400S350-54",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/16 Gauge 54 mil/1400S350-54.pdf",
            },
            {
              name: "250S137-43 33 ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/250S137-43 33 ksi.pdf",
            },
            {
              name: "250S137-43 50 ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/250S137-43 50 ksi.pdf",
            },
            {
              name: "250S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/250S162-43 33ksi.pdf",
            },
            {
              name: "350S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/350S162-43 50ksi.pdf",
            },
            {
              name: "350S200-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/350S200-43 33ksi.pdf",
            },
            {
              name: "350S200-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/350S200-43 50ksi.pdf",
            },
            {
              name: "362S137-43 33 ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S137-43 33 ksi.pdf",
            },
            {
              name: "362S137-43 50 ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S137-43 50 ksi.pdf",
            },
            {
              name: "362S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S162-43 33ksi.pdf",
            },
            {
              name: "362S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S162-43 50ksi.pdf",
            },
            {
              name: "362S200-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S200-43 33ksi.pdf",
            },
            {
              name: "362S200-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S200-43 50ksi.pdf",
            },
            {
              name: "362S250-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S250-43 33ksi.pdf",
            },
            {
              name: "362S250-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S250-43 50ksi.pdf",
            },
            {
              name: "362S300-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S300-43 33ksi.pdf",
            },
            {
              name: "362S300-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S300-43 50ksi.pdf",
            },
            {
              name: "362S350-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S350-43 33ksi.pdf",
            },
            {
              name: "362S350-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S350-43 50ksi.pdf",
            },
            {
              name: "362S400-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S400-43 33ksi.pdf",
            },
            {
              name: "362S400-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/362S400-43 50ksi.pdf",
            },
            {
              name: "400S137-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S137-43 33ksi.pdf",
            },
            {
              name: "400S137-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S137-43 50ksi.pdf",
            },
            {
              name: "400S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S162-43 33ksi.pdf",
            },
            {
              name: "400S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S162-43 50ksi.pdf",
            },
            {
              name: "400S200-43 33ks",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S200-43 33ksi.pdf",
            },
            {
              name: "400S200-43 50ks",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S200-43 50ksi.pdf",
            },
            {
              name: "400S250-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S250-43 33ksi.pdf",
            },
            {
              name: "400S250-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S250-43 50ksi.pdf",
            },
            {
              name: "400S300-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S300-43 33ksi.pdf",
            },
            {
              name: "400S300-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/400S300-43 50ksi.pdf",
            },
            {
              name: "550S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/550S162-43 33ksi.pdf",
            },
            {
              name: "550S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/550S162-43 50ksi.pdf",
            },
            {
              name: "550S200-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/550S200-43 33ksi.pdf",
            },
            {
              name: "550S200-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/550S200-43 50ksi.pdf",
            },
            {
              name: "600S137-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S137-43 33ksi.pdf",
            },
            {
              name: "600S137-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S137-43 50ksi.pdf",
            },
            {
              name: "600S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S162-43 33ksi.pdf",
            },
            {
              name: "600S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S162-43 50ksi.pdf",
            },
            {
              name: "600S200-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S200-43 33ksi.pdf",
            },
            {
              name: "600S200-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S200-43 50ksi.pdf",
            },
            {
              name: "600S250-43 33ks",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S250-43 33ksi.pdf",
            },
            {
              name: "600S250-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S250-43 50ksi.pdf",
            },
            {
              name: "600S400-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S400-43 33ksi.pdf",
            },
            {
              name: "600S400-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/600S400-43 50ksi.pdf",
            },
            {
              name: "800S137-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S137-43 33ksi.pdf",
            },
            {
              name: "800S137-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S137-43 50ksi.pdf",
            },
            {
              name: "800S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S162-43 33ksi.pdf",
            },
            {
              name: "800S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S162-43 50ksi.pdf",
            },
            {
              name: "800S200-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S200-43 33ksi.pdf",
            },
            {
              name: "800S200-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S200-43 50ksi.pdf",
            },
            {
              name: "800S250-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S250-43 33ksi.pdf",
            },
            {
              name: "800S250-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S250-43 50ksi.pdf",
            },
            {
              name: "800S400-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S400-43 33ksi.pdf",
            },
            {
              name: "800S400-43 50ks",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/800S400-43 50ksi.pdf",
            },
            {
              name: "1000S162-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/1000S162-43 33ksi.pdf",
            },
            {
              name: "1000S162-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/1000S162-43 50ksi.pdf",
            },
            {
              name: "1000S200-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/1000S200-43 33ksi.pdf",
            },
            {
              name: "1000S200-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/1000S200-43 50ksi.pdf",
            },
            {
              name: "1000S250-43 33ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/1000S250-43 33ksi.pdf",
            },
            {
              name: "1000S250-43 50ksi",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/18 Gauge 43 mil/1000S250-43 50ksi.pdf",
            },
            {
              name: "250S137-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/250S137-33.pdf",
            },
            {
              name: "250S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/250S162-33.pdf",
            },
            {
              name: "350S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/350S162-33.pdf",
            },
            {
              name: "362S137-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S137-33.pdf",
            },
            {
              name: "362S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S162-33.pdf",
            },
            {
              name: "362S200-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S200-33.pdf",
            },
            {
              name: "362S250-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S250-33.pdf",
            },
            {
              name: "362S300-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S300-33.pdf",
            },
            {
              name: "362S350-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S350-33.pdf",
            },
            {
              name: "362S400-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/362S400-33.pdf",
            },
            {
              name: "400S137-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/400S137-33.pdf",
            },
            {
              name: "400S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/400S162-33.pdf",
            },
            {
              name: "400S200-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/400S200-33.pdf",
            },
            {
              name: "400S250-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/400S250-33.pdf",
            },
            {
              name: "400S300-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/400S300-33.pdf",
            },
            {
              name: "550S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/550S162-33.pdf",
            },
            {
              name: "550S200-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/550S200-33.pdf",
            },
            {
              name: "600S137-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/600S137-33.pdf",
            },
            {
              name: "600S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/600S162-33.pdf",
            },
            {
              name: "600S400-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/600S400-33.pdf",
            },
            {
              name: "800S137-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/800S137-33.pdf",
            },
            {
              name: "800S162-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/800S162-33.pdf",
            },
            {
              name: "800S200-33",
              file: "/uploads/MRI Technologies/Framing - Structural  Curtainwall/20 Gauge ST 33 mil/800S200-33.pdf",
            },
          ],
        },
        {
          name: "Standard Tracks",
          products: [
            {
              name: "362T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/362T400-118.pdf",
            },
            {
              name: "600T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/600T400-118.pdf",
            },
            {
              name: "800T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/800T400-118.pdf",
            },
            {
              name: "1000T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/1000T400-118.pdf",
            },
            {
              name: "1200T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/1200T400-118.pdf",
            },
            {
              name: "1400T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/1400T400-118.pdf",
            },
            {
              name: "1600T400-118",
              file: "/uploads/MRI Technologies/Standard Tracks/10 Gauge 118 mil/1600T400-118.pdf",
            },
            {
              name: "350T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/350T125-97.pdf",
            },
            {
              name: "350T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/350T150-97.pdf",
            },
            {
              name: "350T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/350T200-97.pdf",
            },
            {
              name: "362T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/362T125-97.pdf",
            },
            {
              name: "362T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/362T150-97.pdf",
            },
            {
              name: "362T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/362T200-97.pdf",
            },
            {
              name: "362T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/362T400-97.pdf",
            },
            {
              name: "400T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/400T125-97.pdf",
            },
            {
              name: "400T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/400T150-97.pdf",
            },
            {
              name: "400T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/400T200-97.pdf",
            },
            {
              name: "550T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/550T125-97.pdf",
            },
            {
              name: "550T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/550T150-97.pdf",
            },
            {
              name: "550T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/550T200-97.pdf",
            },
            {
              name: "600T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/600T125-97.pdf",
            },
            {
              name: "600T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/600T150-97.pdf",
            },
            {
              name: "600T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/600T200-97.pdf",
            },
            {
              name: "600T300-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/600T300-97.pdf",
            },
            {
              name: "600T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/600T400-97.pdf",
            },
            {
              name: "800T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/800T125-97.pdf",
            },
            {
              name: "800T150-9",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/800T150-97.pdf",
            },
            {
              name: "800T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/800T200-97.pdf",
            },
            {
              name: "800T300-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/800T300-97.pdf",
            },
            {
              name: "800T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/800T400-97.pdf",
            },
            {
              name: "1000T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1000T125-97.pdf",
            },
            {
              name: "1000T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1000T150-97.pdf",
            },
            {
              name: "1000T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1000T200-97.pdf",
            },
            {
              name: "1000T300-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1000T300-97.pdf",
            },
            {
              name: "1000T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1000T400-97.pdf",
            },
            {
              name: "1200T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1200T125-97.pdf",
            },
            {
              name: "1200T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1200T150-97.pdf",
            },
            {
              name: "1200T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1200T200-97.pdf",
            },
            {
              name: "1200T300-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1200T300-97.pdf",
            },
            {
              name: "1200T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1200T400-97.pdf",
            },
            {
              name: "1400T125-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1400T125-97.pdf",
            },
            {
              name: "1400T150-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1400T150-97.pdf",
            },
            {
              name: "1400T200-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1400T200-97.pdf",
            },
            {
              name: "1400T300-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1400T300-97.pdf",
            },
            {
              name: "1400T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1400T400-97.pdf",
            },
            {
              name: "1600T400-97",
              file: "/uploads/MRI Technologies/Standard Tracks/12 Gauge 97 mil/1600T400-97.pdf",
            },
            {
              name: "250T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/250T125-68.pdf",
            },
            {
              name: "250T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/250T150-68.pdf",
            },
            {
              name: "250T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/250T200-68.pdf",
            },
            {
              name: "350T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/350T125-68.pdf",
            },
            {
              name: "350T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/350T150-68.pdf",
            },
            {
              name: "350T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/350T200-68.pdf",
            },
            {
              name: "350T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/350T300-68.pdf",
            },
            {
              name: "362T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/362T125-68.pdf",
            },
            {
              name: "362T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/362T150-68.pdf",
            },
            {
              name: "362T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/362T200-68.pdf",
            },
            {
              name: "362T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/362T300-68.pdf",
            },
            {
              name: "362T400-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/362T400-68.pdf",
            },
            {
              name: "400T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/400T125-68.pdf",
            },
            {
              name: "400T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/400T150-68.pdf",
            },
            {
              name: "400T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/400T200-68.pdf",
            },
            {
              name: "400T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/400T300-68.pdf",
            },
            {
              name: "550T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/550T125-68.pdf",
            },
            {
              name: "550T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/550T150-68.pdf",
            },
            {
              name: "550T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/550T200-68.pdf",
            },
            {
              name: "550T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/550T300-68.pdf",
            },
            {
              name: "550T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/550T300-68.pdf",
            },
            {
              name: "600T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/600T125-68.pdf",
            },
            {
              name: "600T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/600T150-68.pdf",
            },
            {
              name: "600T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/600T200-68.pdf",
            },
            {
              name: "600T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/600T300-68.pdf",
            },
            {
              name: "600T400-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/600T400-68.pdf",
            },
            {
              name: "800T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/800T125-68.pdf",
            },
            {
              name: "800T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/800T150-68.pdf",
            },
            {
              name: "800T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/800T200-68.pdf",
            },
            {
              name: "800T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/800T300-68.pdf",
            },
            {
              name: "800T400-6",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/800T400-68.pdf",
            },
            {
              name: "1000T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1000T125-68.pdf",
            },
            {
              name: "1000T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1000T150-68.pdf",
            },
            {
              name: "1000T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1000T200-68.pdf",
            },
            {
              name: "1000T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1000T300-68.pdf",
            },
            {
              name: "1000T400-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1000T400-68.pdf",
            },
            {
              name: "1200T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1200T125-68.pdf",
            },
            {
              name: "1200T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1200T150-68.pdf",
            },
            {
              name: "1200T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1200T200-68.pdf",
            },
            {
              name: "1200T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1200T300-68.pdf",
            },
            {
              name: "1200T400-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1200T400-68.pdf",
            },
            {
              name: "1400T125-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1400T125-68.pdf",
            },
            {
              name: "1400T150-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1400T150-68.pdf",
            },
            {
              name: "1400T200-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1400T200-68.pdf",
            },
            {
              name: "1400T300-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1400T300-68.pdf",
            },
            {
              name: "1400T400-68",
              file: "/uploads/MRI Technologies/Standard Tracks/14 Gauge 68 mil/1400T400-68.pdf",
            },
            {
              name: "250T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/250T125-54.pdf",
            },
            {
              name: "250T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/250T150-54.pdf",
            },
            {
              name: "250T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/250T200-54.pdf",
            },
            {
              name: "350T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/350T125-54.pdf",
            },
            {
              name: "350T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/350T150-54.pdf",
            },
            {
              name: "350T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/350T200-54.pdf",
            },
            {
              name: "350T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/350T300-54.pdf",
            },
            {
              name: "362T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/362T125-54.pdf",
            },
            {
              name: "362T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/362T150-54.pdf",
            },
            {
              name: "362T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/362T200-54.pdf",
            },
            {
              name: "362T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/362T300-54.pdf",
            },
            {
              name: "400T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/400T125-54.pdf",
            },
            {
              name: "400T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/400T150-54.pdf",
            },
            {
              name: "400T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/400T200-54.pdf",
            },
            {
              name: "400T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/400T300-54.pdf",
            },
            {
              name: "550T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/550T125-54.pdf",
            },
            {
              name: "550T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/550T150-54.pdf",
            },
            {
              name: "550T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/550T200-54.pdf",
            },
            {
              name: "550T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/550T300-54.pdf",
            },
            {
              name: "600T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/600T125-54.pdf",
            },
            {
              name: "600T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/600T150-54.pdf",
            },
            {
              name: "600T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/600T200-54.pdf",
            },
            {
              name: "600T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/600T300-54.pdf",
            },
            {
              name: "600T400-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/600T400-54.pdf",
            },
            {
              name: "800T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/800T125-54.pdf",
            },
            {
              name: "800T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/800T150-54.pdf",
            },
            {
              name: "800T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/800T200-54.pdf",
            },
            {
              name: "800T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/800T300-54.pdf",
            },
            {
              name: "800T400-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/800T400-54.pdf",
            },
            {
              name: "1000T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1000T125-54.pdf",
            },
            {
              name: "1000T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1000T150-54.pdf",
            },
            {
              name: "1200T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1200T200-54.pdf",
            },
            {
              name: "1200T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1200T300-54.pdf",
            },
            {
              name: "1400T125-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1400T125-54.pdf",
            },
            {
              name: "1400T150-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1400T150-54.pdf",
            },
            {
              name: "1400T200-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1400T200-54.pdf",
            },
            {
              name: "1400T300-54",
              file: "/uploads/MRI Technologies/Standard Tracks/16 Gauge 54 mil/1400T300-54.pdf",
            },
            {
              name: "250T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/250T125-43 33ksi.pdf",
            },
            {
              name: "250T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/250T125-43 50ksi.pdf",
            },
            {
              name: "250T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/250T150-43 33ksi.pdf",
            },
            {
              name: "250T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/250T150-43 50ksi.pdf",
            },
            {
              name: "250T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/250T200-43 33ksi.pdf",
            },
            {
              name: "250T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/250T200-43 50ksi.pdf",
            },
            {
              name: "350T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T125-43 33ksi.pdf",
            },
            {
              name: "350T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T125-43 50ksi.pdf",
            },
            {
              name: "350T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T150-43 33ksi.pdf",
            },
            {
              name: "350T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T150-43 50ksi.pdf",
            },
            {
              name: "350T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T200-43 33ksi.pdf",
            },
            {
              name: "350T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T200-43 50ksi.pdf",
            },
            {
              name: "350T300-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T300-43 33ksi.pdf",
            },
            {
              name: "350T300-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/350T300-43 50ksi.pdf",
            },
            {
              name: "362T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T125-43 33ksi.pdf",
            },
            {
              name: "362T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T125-43 50ksi.pdf",
            },
            {
              name: "362T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T150-43 33ksi.pdf",
            },
            {
              name: "362T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T150-43 50ksi.pdf",
            },
            {
              name: "362T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T200-43 33ksi.pdf",
            },
            {
              name: "362T200-43 50ks",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T200-43 50ksi.pdf",
            },
            {
              name: "362T300-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T300-43 33ksi.pdf",
            },
            {
              name: "362T300-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T300-43 50ksi.pdf",
            },
            {
              name: "362T400-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T400-43 33ksi.pdf",
            },
            {
              name: "362T400-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/362T400-43 50ksi.pdf",
            },
            {
              name: "400T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T125-43 33ksi.pdf",
            },
            {
              name: "400T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T125-43 50ksi.pdf",
            },
            {
              name: "400T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T150-43 33ksi.pdf",
            },
            {
              name: "400T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T150-43 50ksi.pdf",
            },
            {
              name: "400T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T200-43 33ksi.pdf",
            },
            {
              name: "400T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T200-43 50ksi.pdf",
            },
            {
              name: "400T300-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T300-43 33ksi.pdf",
            },
            {
              name: "400T300-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/400T300-43 50ksi.pdf",
            },
            {
              name: "550T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T125-43 33ksi.pdf",
            },
            {
              name: "550T125-43 50ks",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T125-43 50ksi.pdf",
            },
            {
              name: "550T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T150-43 33ksi.pdf",
            },
            {
              name: "550T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T150-43 50ksi.pdf",
            },
            {
              name: "550T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T200-43 33ksi.pdf",
            },
            {
              name: "550T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T200-43 50ksi.pdf",
            },
            {
              name: "550T300-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T300-43 33ksi.pdf",
            },
            {
              name: "550T300-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/550T300-43 50ksi.pdf",
            },
            {
              name: "600T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T125-43 33ksi.pdf",
            },
            {
              name: "600T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T125-43 50ksi.pdf",
            },
            {
              name: "600T150-43 33ks",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T150-43 33ksi.pdf",
            },
            {
              name: "600T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T150-43 50ksi.pdf",
            },
            {
              name: "600T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T200-43 33ksi.pdf",
            },
            {
              name: "600T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T200-43 50ksi.pdf",
            },
            {
              name: "600T300-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T300-43 33ksi.pdf",
            },
            {
              name: "600T300-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T300-43 50ksi.pdf",
            },
            {
              name: "600T400-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T400-43 33ksi.pdf",
            },
            {
              name: "600T400-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/600T400-43 50ksi.pdf",
            },
            {
              name: "800T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T125-43 33ksi.pdf",
            },
            {
              name: "800T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T125-43 50ksi.pdf",
            },
            {
              name: "800T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T150-43 33ksi.pdf",
            },
            {
              name: "800T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T150-43 50ksi.pdf",
            },
            {
              name: "800T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T200-43 33ksi.pdf",
            },
            {
              name: "800T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T200-43 50ksi.pdf",
            },
            {
              name: "800T300-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T300-43 33ksi.pdf",
            },
            {
              name: "800T300-43 50ks",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T300-43 50ksi.pdf",
            },
            {
              name: "800T400-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T400-43 33ksi.pdf",
            },
            {
              name: "800T400-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/800T400-43 50ksi.pdf",
            },
            {
              name: "1000T125-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T125-43 33ksi.pdf",
            },
            {
              name: "1000T125-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T125-43 50ksi.pdf",
            },
            {
              name: "1000T150-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T150-43 33ksi.pdf",
            },
            {
              name: "1000T150-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T150-43 50ksi.pdf",
            },
            {
              name: "1000T200-43 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T200-43 33ksi.pdf",
            },
            {
              name: "1000T200-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T200-43 50ksi.pdf",
            },
            {
              name: "1000T300-43 50ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T300-43 50ksi.pdf",
            },
            {
              name: "1000T300-433 33ksi",
              file: "/uploads/MRI Technologies/Standard Tracks/18 Gauge 43 mil/1000T300-433 33ksi.pdf",
            },
            {
              name: "162T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/162T125-30.pdf",
            },
            {
              name: "162T200-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/162T200-30.pdf",
            },
            {
              name: "250T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/250T125-30.pdf",
            },
            {
              name: "250T150-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/250T150-30.pdf",
            },
            {
              name: "250T200-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/250T200-30.pdf",
            },
            {
              name: "250T300-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/250T300-30.pdf",
            },
            {
              name: "350T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/350T125-30.pdf",
            },
            {
              name: "350T150-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/350T150-30.pdf",
            },
            {
              name: "362T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/362T125-30.pdf",
            },
            {
              name: "362T150-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/362T150-30.pdf",
            },
            {
              name: "362T200-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/362T200-30.pdf",
            },
            {
              name: "362T300-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/362T300-30.pdf",
            },
            {
              name: "400T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/400T125-30.pdf",
            },
            {
              name: "400T150-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/400T150-30.pdf",
            },
            {
              name: "400T200-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/400T200-30.pdf",
            },
            {
              name: "400T300-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/400T300-30.pdf",
            },
            {
              name: "550T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/550T125-30.pdf",
            },
            {
              name: "550T150-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/550T150-30.pdf",
            },
            {
              name: "600T125-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/600T125-30.pdf",
            },
            {
              name: "600T150-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/600T150-30.pdf",
            },
            {
              name: "600T200-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/600T200-30.pdf",
            },
            {
              name: "600T300-30",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge 30 mil/600T300-30.pdf",
            },
            {
              name: "162T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/162T125-33.pdf",
            },
            {
              name: "250T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/250T125-33.pdf",
            },
            {
              name: "250T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/250T150-33.pdf",
            },
            {
              name: "250T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/250T200-33.pdf",
            },
            {
              name: "350T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/350T125-33.pdf",
            },
            {
              name: "350T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/350T150-33.pdf",
            },
            {
              name: "350T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/350T200-33.pdf",
            },
            {
              name: "350T300-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/350T300-33.pdf",
            },
            {
              name: "362T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/362T125-33.pdf",
            },
            {
              name: "362T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/362T150-33.pdf",
            },
            {
              name: "362T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/362T200-33.pdf",
            },
            {
              name: "362T300-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/362T300-33.pdf",
            },
            {
              name: "362T400-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/362T400-33.pdf",
            },
            {
              name: "400T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/400T125-33.pdf",
            },
            {
              name: "400T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/400T150-33.pdf",
            },
            {
              name: "400T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/400T200-33.pdf",
            },
            {
              name: "400T300-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/400T300-33.pdf",
            },
            {
              name: "550T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/550T125-33.pdf",
            },
            {
              name: "550T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/550T150-33.pdf",
            },
            {
              name: "550T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/550T200-33.pdf",
            },
            {
              name: "550T300-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/550T300-33.pdf",
            },
            {
              name: "600T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/600T125-33.pdf",
            },
            {
              name: "600T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/600T150-33.pdf",
            },
            {
              name: "600T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/600T200-33.pdf",
            },
            {
              name: "600T300-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/600T300-33.pdf",
            },
            {
              name: "600T400-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/600T400-33.pdf",
            },
            {
              name: "800T125-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/800T125-33.pdf",
            },
            {
              name: "800T150-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/800T150-33.pdf",
            },
            {
              name: "800T200-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/800T200-33.pdf",
            },
            {
              name: "800T300-33",
              file: "/uploads/MRI Technologies/Standard Tracks/20 Gauge ST 33 mil/800T300-33.pdf",
            },
            {
              name: "162T125-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/162T125-18.pdf",
            },
            {
              name: "162T200-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/162T200-18.pdf",
            },
            {
              name: "250T125-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/250T125-18.pdf",
            },
            {
              name: "250T200-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/250T200-18.pdf",
            },
            {
              name: "350T125-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/350T125-18.pdf",
            },
            {
              name: "362T125-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/362T125-18.pdf",
            },
            {
              name: "362T200-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/362T200-18.pdf",
            },
            {
              name: "362T300-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/362T300-18.pdf",
            },
            {
              name: "400T125-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/400T125-18.pdf",
            },
            {
              name: "400T200-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/400T200-18.pdf",
            },
            {
              name: "400T300-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/400T300-18.pdf",
            },
            {
              name: "600T125-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/600T125-18.pdf",
            },
            {
              name: "600T200-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/600T200-18.pdf",
            },
            {
              name: "600T300-18",
              file: "/uploads/MRI Technologies/Standard Tracks/25 Gauge 18 mil/600T300-18.pdf",
            },
          ],
        },
        {
          name: "Slotted Tracks",
          products: [
            {
              name: "250SLT250-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/250SLT250-68.pdf",
            },
            {
              name: "250SLT300-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/250SLT300-68.pdf",
            },
            {
              name: "250SLT350-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/250SLT350-68.pdf",
            },
            {
              name: "362SLT250-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/362SLT250-68.pdf",
            },
            {
              name: "362SLT300-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/362SLT300-68.pdf",
            },
            {
              name: "362SLT350-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/362SLT350-68.pdf",
            },
            {
              name: "400SLT250-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/400SLT250-68.pdf",
            },
            {
              name: "400SLT300-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/400SLT300-68.pdf",
            },
            {
              name: "400SLT350-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/400SLT350-68.pdf",
            },
            {
              name: "600SLT250-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/600SLT250-68.pdf",
            },
            {
              name: "600SLT300-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/600SLT300-68.pdf",
            },
            {
              name: "600SLT350-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/600SLT350-68.pdf",
            },
            {
              name: "800SLT250-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/800SLT250-68.pdf",
            },
            {
              name: "800SLT300-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/800SLT300-68.pdf",
            },
            {
              name: "800SLT350-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/800SLT350-68.pdf",
            },
            {
              name: "1000SLT250-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/1000SLT250-68.pdf",
            },
            {
              name: "1000SLT300-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/1000SLT300-68.pdf",
            },
            {
              name: "1000SLT350-68",
              file: "/uploads/MRI Technologies/Slotted Tracks/14 Gauge 68 mil/1000SLT350-68.pdf",
            },
            {
              name: "250SLT250-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/250SLT250-54.pdf",
            },
            {
              name: "250SLT300-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/250SLT300-54.pdf",
            },
            {
              name: "250SLT350-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/250SLT350-54.pdf",
            },
            {
              name: "362SLT250-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/362SLT250-54.pdf",
            },
            {
              name: "362SLT300-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/362SLT300-54.pdf",
            },
            {
              name: "362SLT350-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/362SLT350-54.pdf",
            },
            {
              name: "400SLT250-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/400SLT250-54.pdf",
            },
            {
              name: "400SLT300-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/400SLT300-54.pdf",
            },
            {
              name: "400SLT350-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/400SLT350-54.pdf",
            },
            {
              name: "600SLT250-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/600SLT250-54.pdf",
            },
            {
              name: "600SLT300-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/600SLT300-54.pdf",
            },
            {
              name: "600SLT350-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/600SLT350-54.pdf",
            },
            {
              name: "800SLT250-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/800SLT250-54.pdf",
            },
            {
              name: "800SLT300-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/800SLT300-54.pdf",
            },
            {
              name: "800SLT350-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/800SLT350-54.pdf",
            },
            {
              name: "1000SLT250-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/1000SLT250-54.pdf",
            },
            {
              name: "1000SLT300-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/1000SLT300-54.pdf",
            },
            {
              name: "1000SLT350-54",
              file: "/uploads/MRI Technologies/Slotted Tracks/16 Gauge 54 mil/1000SLT350-54.pdf",
            },
            {
              name: "250SLT250-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/250SLT250-43 33ksi.pdf",
            },
            {
              name: "250SLT250-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/250SLT250-43 50ksi.pdf",
            },
            {
              name: "250SLT300-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/250SLT300-43 33ksi.pdf",
            },
            {
              name: "250SLT300-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/250SLT300-43 50ksi.pdf",
            },
            {
              name: "250SLT350-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/250SLT350-43 33ksi.pdf",
            },
            {
              name: "250SLT350-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/250SLT350-43 50ksi.pdf",
            },
            {
              name: "362SLT250-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/362SLT250-43 33ksi.pdf",
            },
            {
              name: "362SLT250-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/362SLT250-43 50ksi.pdf",
            },
            {
              name: "362SLT300-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/362SLT300-43 33ksi.pdf",
            },
            {
              name: "362SLT300-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/362SLT300-43 50ksi.pdf",
            },
            {
              name: "362SLT350-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/362SLT350-43 33ksi.pdf",
            },
            {
              name: "362SLT350-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/362SLT350-43 50ksi.pdf",
            },
            {
              name: "400SLT250-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/400SLT250-43 33ksi.pdf",
            },
            {
              name: "400SLT250-43 50ks",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/400SLT250-43 50ksi.pdf",
            },
            {
              name: "400SLT300-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/400SLT300-43 33ksi.pdf",
            },
            {
              name: "400SLT300-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/400SLT300-43 50ksi.pdf",
            },
            {
              name: "400SLT350-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/400SLT350-43 33ksi.pdf",
            },
            {
              name: "400SLT350-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/400SLT350-43 50ksi.pdf",
            },
            {
              name: "600SLT250-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/600SLT250-43 33ksi.pdf",
            },
            {
              name: "600SLT250-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/600SLT250-43 50ksi.pdf",
            },
            {
              name: "600SLT300-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/600SLT300-43 33ksi.pdf",
            },
            {
              name: "600SLT300-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/600SLT300-43 50ksi.pdf",
            },
            {
              name: "600SLT350-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/600SLT350-43 33ksi.pdf",
            },
            {
              name: "600SLT350-43 50ks",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/600SLT350-43 50ksi.pdf",
            },
            {
              name: "800SLT250-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/800SLT250-43 33ksi.pdf",
            },
            {
              name: "800SLT250-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/800SLT250-43 50ksi.pdf",
            },
            {
              name: "800SLT300-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/800SLT300-43 33ksi.pdf",
            },
            {
              name: "800SLT300-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/800SLT300-43 50ksi.pdf",
            },
            {
              name: "800SLT350-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/800SLT350-43 33ksi.pdf",
            },
            {
              name: "800SLT350-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/800SLT350-43 50ksi.pdf",
            },
            {
              name: "1000SLT250-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/1000SLT250-43 33ksi.pdf",
            },
            {
              name: "1000SLT250-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/1000SLT250-43 50ksi.pdf",
            },
            {
              name: "1000SLT300-43 33ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/1000SLT300-43 33ksi.pdf",
            },
            {
              name: "1000SLT300-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/1000SLT300-43 50ksi.pdf",
            },
            {
              name: "1000SLT350-43 33ks",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/1000SLT350-43 33ksi.pdf",
            },
            {
              name: "1000SLT350-43 50ksi",
              file: "/uploads/MRI Technologies/Slotted Tracks/18 Gauge 43 mil/1000SLT350-43 50ksi.pdf",
            },
            {
              name: "250SLT250-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/250SLT250-30.pdf",
            },
            {
              name: "250SLT300-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/250SLT300-30.pdf",
            },
            {
              name: "250SLT350-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/250SLT350-30.pdf",
            },
            {
              name: "362SLT250-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/362SLT250-30.pdf",
            },
            {
              name: "362SLT300-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/362SLT300-30.pdf",
            },
            {
              name: "362SLT350-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/362SLT350-30.pdf",
            },
            {
              name: "400SLT250-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/400SLT250-30.pdf",
            },
            {
              name: "400SLT300-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/400SLT300-30.pdf",
            },
            {
              name: "400SLT350-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/400SLT350-30.pdf",
            },
            {
              name: "600SLT250-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/600SLT250-30.pdf",
            },
            {
              name: "600SLT300-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/600SLT300-30.pdf",
            },
            {
              name: "600SLT350-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/600SLT350-30.pdf",
            },
            {
              name: "800SLT250-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/800SLT250-30.pdf",
            },
            {
              name: "800SLT300-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/800SLT300-30.pdf",
            },
            {
              name: "800SLT350-30",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge 30 mil/800SLT350-30.pdf",
            },
            {
              name: "250SLT250-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/250SLT250-33.pdf",
            },
            {
              name: "250SLT300-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/250SLT300-33.pdf",
            },
            {
              name: "250SLT350-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/250SLT350-33.pdf",
            },
            {
              name: "362SLT250-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/362SLT250-33.pdf",
            },
            {
              name: "362SLT300-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/362SLT300-33.pdf",
            },
            {
              name: "362SLT350-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/362SLT350-33.pdf",
            },
            {
              name: "400SLT250-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/400SLT250-33.pdf",
            },
            {
              name: "400SLT300-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/400SLT300-33.pdf",
            },
            {
              name: "400SLT350-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/400SLT350-33.pdf",
            },
            {
              name: "600SLT250-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/600SLT250-33.pdf",
            },
            {
              name: "600SLT300-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/600SLT300-33.pdf",
            },
            {
              name: "600SLT350-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/600SLT350-33.pdf",
            },
            {
              name: "800SLT250-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/800SLT250-33.pdf",
            },
            {
              name: "800SLT300-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/800SLT300-33.pdf",
            },
            {
              name: "800SLT350-33",
              file: "/uploads/MRI Technologies/Slotted Tracks/20 Gauge ST 33 mil/800SLT350-33.pdf",
            },
            {
              name: "250SLT250-18",
              file: "/uploads/MRI Technologies/Slotted Tracks/25 Gauge 18 mil/250SLT250-18.pdf",
            },
            {
              name: "362SLT250-18",
              file: "/uploads/MRI Technologies/Slotted Tracks/25 Gauge 18 mil/362SLT250-18.pdf",
            },
            {
              name: "400SLT250-18",
              file: "/uploads/MRI Technologies/Slotted Tracks/25 Gauge 18 mil/400SLT250-18.pdf",
            },
            {
              name: "600SLT250-18",
              file: "/uploads/MRI Technologies/Slotted Tracks/25 Gauge 18 mil/600SLT250-18.pdf",
            }, 
          ],
        },
        {
          name: "EQ Studs",
          products: [
            {
              name: "162PWS134-21",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ PrimeWall Stud/162PWS134-21.pdf",
            },
            {
              name: "250PWS134-19",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ PrimeWall Stud/250PWS134-19.pdf",
            },
            {
              name: "362PWS134-19",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ PrimeWall Stud/362PWS134-19.pdf",
            },
            {
              name: "400PWS134-19",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ PrimeWall Stud/400PWS134-19.pdf",
            },
            {
              name: "600PWS134-21",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ PrimeWall Stud/600PWS134-21.pdf",
            },
            {
              name: "162SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/162SES125-27.pdf",
            },
            {
              name: "250SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/250SES125-27.pdf",
            },
            {
              name: "350SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/350SES125-27.pdf",
            },
            {
              name: "362SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/362SES125-27.pdf",
            },
            {
              name: "400SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/400SES125-27.pdf",
            },
            {
              name: "550SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/550SES125-27.pdf",
            },
            {
              name: "600SES125-27",
              file: "/uploads/MRI Technologies/EQ Studs/20 EQ Smart Stud 27 mil/600SES125-27.pdf",
            },
            
          ],
        },
        {
          name: "EQ Tracks",
          products: [
            {
              name: "162PWT125-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/162PWT125-19.pdf",
            },
            {
              name: "162PWT150-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/162PWT150-19.pdf",
            },
            {
              name: "162PWT200-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/162PWT200-19.pdf",
            },
            {
              name: "250PWT125-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/250PWT125-19.pdf",
            },
            {
              name: "250PWT150-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/250PWT150-19.pdf",
            },
            {
              name: "250PWT200-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/250PWT200-19.pdf",
            },
            {
              name: "250PWT300-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/250PWT300-19.pdf",
            },
            {
              name: "362PWT125-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/362PWT125-19.pdf",
            },
            {
              name: "362PWT150-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/362PWT150-19.pdf",
            },
            {
              name: "362PWT200-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/362PWT200-19.pdf",
            },
            {
              name: "362PWT300-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/362PWT300-19.pdf",
            },
            {
              name: "400PWT125-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/400PWT125-19.pdf",
            },
            {
              name: "400PWT150-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/400PWT150-19.pdf",
            },
            {
              name: "400PWT200-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/400PWT200-19.pdf",
            },
            {
              name: "400PWT300-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/400PWT300-19.pdf",
            },
            {
              name: "600PWT125-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/600PWT125-19.pdf",
            },
            {
              name: "600PWT150-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/600PWT150-19.pdf",
            },
            {
              name: "600PWT200-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/600PWT200-19.pdf",
            },
            {
              name: "600PWT300-19",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ PrimeWall Track 19 mil/600PWT300-19.pdf",
            },
            {
              name: "162SET125-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/162SET125-27.pdf",
            },
            {
              name: "162SET200-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/162SET200-27.pdf",
            },
            {
              name: "250SET125-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/250SET125-27.pdf",
            },
            {
              name: "250SET200-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/250SET200-27.pdf",
            },
            {
              name: "350SET125-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/350SET125-27.pdf",
            },
            {
              name: "350SET200-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/350SET200-27.pdf",
            },
            {
              name: "362SET300-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/362SET300-27.pdf",
            },
            {
              name: "400SET125-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/400SET125-27.pdf",
            },
            {
              name: "400SET200-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/400SET200-27.pdf",
            },
            {
              name: "400SET300-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/400SET300-27.pdf",
            },
            {
              name: "550SET125-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/550SET125-27.pdf",
            },
            {
              name: "550SET200-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/550SET200-27.pdf",
            },
            {
              name: "550SET300-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/550SET300-27.pdf",
            },
            {
              name: "600SET125-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/600SET125-27.pdf",
            },
            {
              name: "600SET200-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/600SET200-27.pdf",
            },
            {
              name: "600SET300-27",
              file: "/uploads/MRI Technologies/EQ Tracks/20 EQ Smart Track 27 mil/600SET300-27.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "Clark Dietrich",
      subVendors: [
        {
          name: "Track",
          products: [
            {
              name: "2-1 2 Flexible Trac",
              file: "/uploads/Clark Dietrich/Metal/Track/2-1 2 Flexible Track.pdf",
            },
            {
              name: "2-12, 22mils (25ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/2-12, 22mils (25ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "2-12, 33mils (20ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/2-12, 33mils (20ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "2-12, 43mils (18ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/2-12, 43mils (18ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "2hr & 3hr Area Separation Wall Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/2hr & 3hr Area Separation Wall Systems.pdf",
            },
            {
              name: "3-5 8 24mil 20ga EQ TLA TRAKLOC Adjustable Stud",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 24mil 20ga EQ TLA TRAKLOC Adjustable Stud.pdf",
            },
            {
              name: "3-5 8 24mil 20ga EQ TLE TRAKLOC Elevator Stud",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 24mil 20ga EQ TLE TRAKLOC Elevator Stud.pdf",
            },
            {
              name: "3-5 8 30mil 20ga DW TLA TRAKLOC Adjustable Stud",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 30mil 20ga DW TLA TRAKLOC Adjustable Stud.pdf",
            },
            {
              name: "3-5 8 30mil 20ga DW TLE TRAKLOC Elevator Stud",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 30mil 20ga DW TLE TRAKLOC Elevator Stud.pdf",
            },
            {
              name: "3-5 8 Flexible Track",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 Flexible Track.pdf",
            },
            {
              name: "3-5 8 Web w 1-5 8 Flange 43mils (18ga)",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 Web w 1-5 8 Flange 43mils (18ga).pdf",
            },
            {
              name: "3-5 8 Web w 1-5 8 Flange 54mils (16ga)",
              file: "/uploads/Clark Dietrich/Metal/Track/3-5 8 Web w 1-5 8 Flange 54mils (16ga).pdf",
            },
            {
              name: "3-58 Pro 30mil 33ksi",
              file: "/uploads/Clark Dietrich/Metal/Track/3-58 Pro 30mil 33ksi.pdf",
            },
            {
              name: "3-58 Pro 33mil 33ksi",
              file: "/uploads/Clark Dietrich/Metal/Track/3-58 Pro 33mil 33ksi.pdf",
            },
            {
              name: "3-58 Pro20 (18mil 70ksi)",
              file: "/uploads/Clark Dietrich/Metal/Track/3-58 Pro20 (18mil 70ksi).pdf",
            },
            {
              name: "3-58 Pro25 (15mil 50ksi)",
              file: "/uploads/Clark Dietrich/Metal/Track/3-58 Pro25 (15mil 50ksi).pdf",
            },
            {
              name: "4 Flexible Track",
              file: "/uploads/Clark Dietrich/Metal/Track/4 Flexible Track.pdf",
            },
            {
              name: "4, 22mils (25ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/4, 22mils (25ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "4, 33mils (20ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/4, 33mils (20ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "4, 43mils (18ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/4, 43mils (18ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "6 Flexible Track",
              file: "/uploads/Clark Dietrich/Metal/Track/6 Flexible Track.pdf",
            },
            {
              name: "6 Web w 1-5 8  Flange 54mils (16ga",
              file: "/uploads/Clark Dietrich/Metal/Track/6 Web w 1-5 8  Flange 54mils (16ga).pdf",
            },
            {
              name: "6 Web w 1-5 8 Flange 43mils (18ga)",
              file: "/uploads/Clark Dietrich/Metal/Track/6 Web w 1-5 8 Flange 43mils (18ga).pdf",
            },
            {
              name: "6, 33mils (20ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/6, 33mils (20ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "6, 43mils (18ga) C-T Stud Shaftwall Sytem",
              file: "/uploads/Clark Dietrich/Metal/Track/6, 43mils (18ga) C-T Stud Shaftwall Sytem.pdf",
            },
            {
              name: "14ga G-Series Gusset Plate",
              file: "/uploads/Clark Dietrich/Metal/Track/14ga G-Series Gusset Plate.pdf",
            },
            {
              name: "16ga G-Series Gusset Plate",
              file: "/uploads/Clark Dietrich/Metal/Track/16ga G-Series Gusset Plate.pdf",
            },
            {
              name: "18ga G-Series Gusset Plate",
              file: "/uploads/Clark Dietrich/Metal/Track/18ga G-Series Gusset Plate.pdf",
            },
            {
              name: "Aluminum Burn Clip",
              file: "/uploads/Clark Dietrich/Metal/Track/Aluminum Burn Clip.pdf",
            },
            {
              name: "BlazeFrame® (DL 1) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (DL 1) Systems.pdf",
            },
            {
              name: "BlazeFrame® (DL 2) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (DL 2) Systems.pdf",
            },
            {
              name: "BlazeFrame® (DSL 2) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (DSL 2) Systems.pdf",
            },
            {
              name: "BlazeFrame® (JR 1) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (JR 1) Systems.pdf",
            },
            {
              name: "BlazeFrame® (ODL 2) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (ODL 2) Systems.pdf",
            },
            {
              name: "BlazeFrame® (ODSL 2) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (ODSL 2) Systems.pdf",
            },
            {
              name: "BlazeFrame® (SL 1) Systems",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® (SL 1) Systems.pdf",
            },
            {
              name: "BlazeFrame® Perimeter L-Bead with Rip Bead®",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® Perimeter L-Bead with Rip Bead®.pdf",
            },
            {
              name: "BlazeFrame® Perimeter L-Bead",
              file: "/uploads/Clark Dietrich/Metal/Track/BlazeFrame® Perimeter L-Bead.pdf",
            },
            {
              name: "CI Weep Track",
              file: "/uploads/Clark Dietrich/Metal/Track/CI Weep Track.pdf",
            },
            {
              name: "Deep Leg Deflection Track w ProTRAK Liner",
              file: "/uploads/Clark Dietrich/Metal/Track/Deep Leg Deflection Track w ProTRAK Liner.pdf",
            },
            {
              name: "Drift Head-of-Wall DHOW3-HG",
              file: "/uploads/Clark Dietrich/Metal/Track/Drift Head-of-Wall DHOW3-HG.pdf",
            },
            {
              name: "Drift Head-of-Wall DHOW3-LG",
              file: "/uploads/Clark Dietrich/Metal/Track/Drift Head-of-Wall DHOW3-LG.pdf",
            },
            {
              name: "Drift Head-of-Wall DHOW6-HG",
              file: "/uploads/Clark Dietrich/Metal/Track/Drift Head-of-Wall DHOW6-HG.pdf",
            },
            {
              name: "Drift Head-of-Wall DHOW6-LG",
              file: "/uploads/Clark Dietrich/Metal/Track/Drift Head-of-Wall DHOW6-LG.pdf",
            },
            {
              name: "Drift Head-of-Wall DHOW8-HG",
              file: "/uploads/Clark Dietrich/Metal/Track/Drift Head-of-Wall DHOW8-HG.pdf",
            },
            {
              name: "Drift Head-of-Wall DHOW8-LG",
              file: "/uploads/Clark Dietrich/Metal/Track/Drift Head-of-Wall DHOW8-LG.pdf",
            },
            {
              name: "Fast Top™ Clip 3",
              file: "/uploads/Clark Dietrich/Metal/Track/Fast Top™ Clip 3.pdf",
            },
            {
              name: "Fast Top™ Clip 5",
              file: "/uploads/Clark Dietrich/Metal/Track/Fast Top™ Clip 5.pdf",
            },
            {
              name: "Fast Top™ Clip 8",
              file: "/uploads/Clark Dietrich/Metal/Track/Fast Top™ Clip 8.pdf",
            },
            {
              name: "Fast Top™ Clip 10",
              file: "/uploads/Clark Dietrich/Metal/Track/Fast Top™ Clip 10.pdf",
            },
            {
              name: "Fast Top™ Clip 12",
              file: "/uploads/Clark Dietrich/Metal/Track/Fast Top™ Clip 12.pdf",
            },
            {
              name: "FastBack® - 1-14 Flange x 5-18 Tall System for 2X Backing",
              file: "/uploads/Clark Dietrich/Metal/Track/FastBack® - 1-14 Flange x 5-18 Tall System for 2X Backing.pdf",
            },
            {
              name: "FastBack® - 1-14 Flange x 5-18 Tall System for 34 Backing",
              file: "/uploads/Clark Dietrich/Metal/Track/FastBack® - 1-14 Flange x 5-18 Tall System for 34 Backing.pdf",
            },
            {
              name: "FastBack® - 1-14 Flange x 10-14 Tall System for 34 Backing",
              file: "/uploads/Clark Dietrich/Metal/Track/FastBack® - 1-14 Flange x 10-14 Tall System for 34 Backing.pdf",
            },
            {
              name: "FastBack® - 1-58 Flange x 5-18 Tall System for 2X Backing",
              file: "/uploads/Clark Dietrich/Metal/Track/FastBack® - 1-58 Flange x 5-18 Tall System for 2X Backing.pdf",
            },
            {
              name: "FastBack® - 2 Flange x 5-18 Tall System for 2X Backing",
              file: "/uploads/Clark Dietrich/Metal/Track/FastBack® - 2 Flange x 5-18 Tall System for 2X Backing.pdf",
            },
            {
              name: "Flute Cover",
              file: "/uploads/Clark Dietrich/Metal/Track/Flute Cover.pdf",
            },
            {
              name: "Header Weeped Starter Track",
              file: "/uploads/Clark Dietrich/Metal/Track/Header Weeped Starter Track.pdf",
            },
            {
              name: "MaxTrak 2-1 2 Leg Non-Structura",
              file: "/uploads/Clark Dietrich/Metal/Track/MaxTrak 2-1 2 Leg Non-Structural.pdf",
            },
            {
              name: "MaxTrak 2-1 2 Leg Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/MaxTrak 2-1 2 Leg Structural.pdf",
            },
            {
              name: "MaxTrak 2D 2-1 2 Leg Non-Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/MaxTrak 2D 2-1 2 Leg Non-Structural.pdf",
            },
            {
              name: "MaxTrak 2D 2-1 2 Leg Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/MaxTrak 2D 2-1 2 Leg Structural.pdf",
            },
            {
              name: "MaxTrak 2D 3 Leg Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/MaxTrak 2D 3 Leg Structural.pdf",
            },
            {
              name: "MaxTrak 3 Leg Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/MaxTrak 3 Leg Structural.pdf",
            },
            {
              name: "Mega Lath",
              file: "/uploads/Clark Dietrich/Metal/Track/Mega Lath.pdf",
            },
            {
              name: "Non-Structural ProTrak Deep Leg Deflection Track",
              file: "/uploads/Clark Dietrich/Metal/Track/Non-Structural ProTrak Deep Leg Deflection Track.pdf",
            },
            {
              name: "Notched Track",
              file: "/uploads/Clark Dietrich/Metal/Track/Notched Track.pdf",
            },
            {
              name: "Panel Lift Clip 8",
              file: "/uploads/Clark Dietrich/Metal/Track/Panel Lift Clip 8.pdf",
            },
            {
              name: "Panel Lift Clip 12",
              file: "/uploads/Clark Dietrich/Metal/Track/Panel Lift Clip 12.pdf",
            },
            {
              name: "RipTRAK (1HR) for 1 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (1HR) for 1 Total Deflection.pdf",
            },
            {
              name: "RipTRAK (1HR) for 2 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (1HR) for 2 Total Deflection.pdf",
            },
            {
              name: "RipTRAK (1HR) for 3 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (1HR) for 3 Total Deflection.pdf",
            },
            {
              name: "RipTRAK (2HR) for 1 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (2HR) for 1 Total Deflection.pdf",
            },
            {
              name: "RipTRAK (2HR) for 2 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (2HR) for 2 Total Deflection.pdf",
            },
            {
              name: "RipTRAK (2HR) for 3 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (2HR) for 3 Total Deflection.pdf",
            },
            {
              name: "RipTRAK (2HR) for 4 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK (2HR) for 4 Total Deflection.pdf",
            },
            {
              name: "RipTRAK 1HR for 4 Total Deflection",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK 1HR for 4 Total Deflection.pdf",
            },
            {
              name: "RipTRAK Shaftwall (1HR) for 1 Total Deflection - Series 1",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (1HR) for 1 Total Deflection - Series 1.pdf",
            },
            {
              name: "RipTRAK Shaftwall (1HR) for 2 Total Deflection - Series 2",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (1HR) for 2 Total Deflection - Series 2.pdf",
            },
            {
              name: "RipTRAK Shaftwall (1HR) for 3 Total Deflection - Series 3",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (1HR) for 3 Total Deflection - Series 3.pdf",
            },
            {
              name: "RipTRAK Shaftwall (1HR) for 4 Total Deflection - Series 4",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (1HR) for 4 Total Deflection - Series 4.pdf",
            },
            {
              name: "RipTRAK Shaftwall (2HR) for 1 Total Deflection - Series 1",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (2HR) for 1 Total Deflection - Series 1.pdf",
            },
            {
              name: "RipTRAK Shaftwall (2HR) for 2 Total Deflection - Series 2",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (2HR) for 2 Total Deflection - Series 2.pdf",
            },
            {
              name: "RipTRAK Shaftwall (2HR) for 3 Total Deflection - Series 3",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (2HR) for 3 Total Deflection - Series 3.pdf",
            },
            {
              name: "RipTRAK Shaftwall (2HR) for 4 Total Deflection - Series 4",
              file: "/uploads/Clark Dietrich/Metal/Track/RipTRAK Shaftwall (2HR) for 4 Total Deflection - Series 4.pdf",
            },
            {
              name: "Slotted deflection track with UltraBEAD",
              file: "/uploads/Clark Dietrich/Metal/Track/Slotted deflection track with UltraBEAD.pdf",
            },
            {
              name: "Structural Deep Leg Deflection Track",
              file: "/uploads/Clark Dietrich/Metal/Track/Structural Deep Leg Deflection Track.pdf",
            },
            {
              name: "TradeReady® Rim Track Splice Plate",
              file: "/uploads/Clark Dietrich/Metal/Track/TradeReady® Rim Track Splice Plate.pdf",
            },
            {
              name: "Twin Trac 2.5-316 Furr",
              file: "/uploads/Clark Dietrich/Metal/Track/Twin Trac 2.5-316 Furr.pdf",
            },
            {
              name: "win Trac 2.5",
              file: "/uploads/Clark Dietrich/Metal/Track/Twin Trac 2.5.pdf",
            },
            {
              name: "UltraBEAD with Deep Leg Deflection Track System - Non-Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/UltraBEAD with Deep Leg Deflection Track System - Non-Structural.pdf",
            },
            {
              name: "UltraBEAD with Deep Leg Deflection Track System - Structural",
              file: "/uploads/Clark Dietrich/Metal/Track/UltraBEAD with Deep Leg Deflection Track System - Structural.pdf",
            },
            {
              name: "Universal Starter Strip",
              file: "/uploads/Clark Dietrich/Metal/Track/Universal Starter Strip.pdf",
            },
            {
              name: "Vinyl L-Bead with Compressible Foam",
              file: "/uploads/Clark Dietrich/Metal/Track/Vinyl L-Bead with Compressible Foam.pdf",
            },
            {
              name: "Weeped Starter Track",
              file: "/uploads/Clark Dietrich/Metal/Track/Weeped Starter Track.pdf",
            },
          ],
        },
      ],
    },
  ]);
  const [showdrywall, setShowdrywall] = useState(false);
  const [showcieling, setShowcieling] = useState(false);
  const [showmetal, setShowmetal] = useState(false);
  const [showinsulation, setShowinsulation] = useState(false);
  const [showspeciality, setShowspeciality] = useState(false);
  const handledrywallClick = () => {
    setShowdrywall(!showdrywall);
    setShowcieling(false);
    setShowmetal(false);
    setShowinsulation(false);
    setShowspeciality(false);
  };

  const handlecielingClick = () => {
    setShowcieling(!showcieling);
    setShowdrywall(false);
    setShowmetal(false);
    setShowinsulation(false);
    setShowspeciality(false);
  };
  const handlemetalClick = () => {
    setShowmetal(!showmetal);
    setShowdrywall(false);
    setShowcieling(false);
    setShowinsulation(false);
    setShowspeciality(false);
  };
  const handleinsulationClick = () => {
    setShowinsulation(!showinsulation);
    setShowmetal(false);
    setShowdrywall(false);
    setShowcieling(false);
    setShowspeciality(false);
  };
  const handlespecialityClick = () => {
    setShowspeciality(!showspeciality);
    setShowmetal(false);
    setShowdrywall(false);
    setShowcieling(false);
    setShowinsulation(false);
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout", { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          // Clear any user-related data if needed
          localStorage.removeItem("user");
          // Redirect to login page
          navigate("/login");
        } else {
          console.error("Logout failed");
        }
      })
      .catch((err) => {
        console.error("Error during logout:", err);
      });
  };

  const handleSidebarMinimize = () => {
    setSidebarMinimized(!sidebarMinimized);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(`Searching for: ${searchQuery}`);
  };
  const [Contractor, setContractor] = useState("");
  const [Architect, setArchitect] = useState("");
  const [Owner, setOwner] = useState("");

  const [expandedVendor, setExpandedVendor] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleVendorClick = (vendorName) => {
    if (expandedVendor === vendorName) {
      setExpandedVendor(null);
    } else {
      setExpandedVendor(vendorName);
    }
  };
  const [expandedSubVendor, setExpandedSubVendor] = useState(null);
  const handleSubVendorClick = (subVendorName) => {
    setExpandedSubVendor(
      expandedSubVendor === subVendorName ? null : subVendorName
    );
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== value)
      );
    }
    console.log("Selected items:", selectedItems); // Debugging line
  };

  const mergePDFs = async (Date) => {
    try {
      console.log("Starting PDF merge process");
      // Get current date
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getFullYear()}`;

      console.log("Input values:", { Contractor, Architect, Owner, Date });
      console.log("Selected items:", selectedItems);
      const mergedPdf = await PDFDocument.create();

      // Create coversheet page
      console.log("Creating coversheet page");
      const coverPage = mergedPdf.addPage();
      const { width, height } = coverPage.getSize();
      const font = await mergedPdf.embedFont(StandardFonts.Helvetica);
      const regularFont = await mergedPdf.embedFont(StandardFonts.Helvetica);

      // Add company logo
      const logoImageBytes = await fetch(reactLogo).then((res) =>
        res.arrayBuffer()
      );
      const logoImage = await mergedPdf.embedPng(logoImageBytes);
      const logoDims = logoImage.scale(0.5); // Adjust scale as needed
      coverPage.drawImage(logoImage, {
        x: width / 2 - logoDims.width / 2,
        y: height - logoDims.height - 50,
        width: logoDims.width,
        height: logoDims.height,
      });

      // Add coversheet content below the logo
      console.log("Adding coversheet content");
      const startY = height - logoDims.height - 100;
      coverPage.drawText("PROJECT COVERSHEET:", {
        x: 110,
        y: startY,
        size: 30,
        font,
        color: rgb(0, 0, 0),
        textAlign: "center",
      });
      coverPage.drawText(`Contractor: ${Contractor || "N/A"}`, {
        x: 50,
        y: startY - 100,
        size: 16,
        font: regularFont,
        textAlign: "center",
      });
      coverPage.drawText(`Architect: ${Architect || "N/A"}`, {
        x: 50,
        y: startY - 200,
        size: 16,
        font: regularFont,
        textAlign: "center",
      });
      coverPage.drawText(`Owner: ${Owner || "N/A"}`, {
        x: 50,
        y: startY - 300,
        size: 16,
        font: regularFont,
        textAlign: "center",
      });
      coverPage.drawText(`Date: ${formattedDate}`, {
        x: 50,
        y: startY - 400,
        size: 16,
        font: regularFont,
        textAlign: "left",
      });

      // Create index page with improved design
      console.log("Creating index page");
      const indexPage = mergedPdf.addPage();
      const indexWidth = indexPage.getWidth();
      const indexHeight = indexPage.getHeight();
      let yPosition = indexHeight - 50;

      // Add a header bar for index page
      indexPage.drawRectangle({
        x: 0,
        y: indexHeight - 100,
        width: indexWidth,
        height: 100,
        color: rgb(0.3, 0.5, 0.7),
      });
      indexPage.drawText("INDEX", {
        x: 50,
        y: indexHeight - 60,
        size: 50,
        font,
        color: rgb(1, 1, 1),
      });
      yPosition -= 80;

      // Merge selected product PDFs and add index entries
      console.log("Merging selected product PDFs");
      console.log("Selected items:", selectedItems);
      const pageReferences = [];
      for (const item of selectedItems) {
        const product = findProductByName(item);
        if (product) {
          try {
            console.log(`Processing PDF for ${item}`);
            const response = await fetch(product.file);
            const pdfBytes = await response.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const startPageIndex = mergedPdf.getPageCount();
            const copiedPages = await mergedPdf.copyPages(
              pdf,
              pdf.getPageIndices()
            );
            copiedPages.forEach((page) => mergedPdf.addPage(page));
            pageReferences.push({ item, startPageIndex });
            console.log(`Successfully added pages for ${item}`);
          } catch (error) {
            console.error(`Error processing PDF for ${item}:`, error);
          }
        } else {
          console.log(`Product not found for item: ${item}`);
        }
      }

      // Function to measure text width
      const measureTextWidth = (text, font, fontSize) => {
        return font.widthOfTextAtSize(text, fontSize);
      };

      // Add index entries with links
      const annotations = [];
      for (const ref of pageReferences) {
        const text = ref.item;
        const fontSize = 12;
        const textWidth = measureTextWidth(text, font, fontSize);
        const lineLength = Math.min(textWidth + 10, indexWidth - 100); // Add some padding, but don't exceed page width
        indexPage.drawText(`${pageReferences.indexOf(ref) + 1}. ${text}`, {
          x: 50,
          y: yPosition,
          size: fontSize,
          font: regularFont,
          color: rgb(0, 0, 1), // Blue color for the text
        });

        // Draw the line
        indexPage.drawLine({
          start: { x: 50, y: yPosition - 2 },
          end: { x: 50 + lineLength, y: yPosition - 2 },
          thickness: 0.5,
          color: rgb(0, 0, 1), // Blue color for the line
        });
        // Add page number
        const pageNumberText = `Page ${ref.startPageIndex + 1}`;
        const pageNumberWidth = measureTextWidth(
          pageNumberText,
          regularFont,
          fontSize
        );
        indexPage.drawText(pageNumberText, {
          x: indexWidth - 50 - pageNumberWidth,
          y: yPosition,
          size: fontSize,
          font: regularFont,
        });
        const linkAnnotation = {
          Type: "Annot",
          Subtype: "Link",
          Rect: [50, yPosition - 5, 50 + lineLength, yPosition + 10],
          Border: [0, 0, 0],
          C: [0, 0, 1], // Blue color for the border
          A: {
            Type: "Action",
            S: "GoTo",
            D: [mergedPdf.getPage(ref.startPageIndex).ref, "Fit"],
          },
        };
        annotations.push(linkAnnotation);
        yPosition -= 20;
      }
      indexPage.node.set(
        PDFName.of("Annots"),
        indexPage.node.context.obj(annotations)
      );

      console.log("Saving merged PDF");
      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);

      // Create file name using all coversheet input values and current date
      const sanitizeForFilename = (str) =>
        str.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      const fileName = `${sanitizeForFilename(
        Contractor
      )}_${sanitizeForFilename(Architect)}_${sanitizeForFilename(
        Owner
      )}_${sanitizeForFilename(formattedDate)}.pdf`;
      link.download = fileName;
      link.click();
      console.log("PDF download initiated with filename:", fileName);
    } catch (error) {
      console.error("Error in mergePDFs function:", error);
    }
  };

  const findProductByName = (name) => {
    const allSubVendors = [
      ...drywallVendors,
      ...cielingVendors,
      ...metalVendors,
      ...insulationVendors,
      ...specialityVendors,
    ];

    for (const vendor of allSubVendors) {
      for (const subVendor of vendor.subVendors) {
        const product = subVendor.products.find((p) => p.name === name);
        if (product) {
          console.log(`Found product: ${JSON.stringify(product)}`);
          return product;
        }
      }
    }
    console.log(`Product not found: ${name}`);
    return null;
  };
  const handleReset = () => {
    setContractor("");
    setArchitect("");
    setOwner("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Contractor && !Architect && !Owner) {
      alert("Please fill in at least one field before submitting.");
      return;
    }
    mergePDFs();
    console.log("Form submitted with values:", {
      Contractor,
      Architect,
      Owner,
    });
  };
  return (
    <StyledDiv>
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffff",
          padding: "2px",
          color: "#ccc",
        }}
      >
        <h1 style={{ flex: 1, textAlign: "center" }}>
          <img
            src={reactLogo}
            alt=""
            width="370"
            height="180"
            style={{ marginLeft: "300px" }}
          />
        </h1>
        <Dropdown
          title="Account"
          icon={<MenuIcon style={{ color: "red" }} />}
          placement="bottomEnd"
          style={{
            fontSize: "16px",
            padding: "15px",
            width: "300px",
            height: "50px",
          }}
        >
          <Dropdown.Item
            icon={<PageIcon style={{ color: "green" }} />}
            style={{
              fontSize: "16px",
              padding: "15px",
              width: "285px",
              height: "50px",
            }}
            onClick={() => {
              const url =
                "https://netorgft4914988-my.sharepoint.com/:x:/g/personal/asiwach_engineta_com/EQBrB_PAyX5Jk3MgTg98fC4B6Ll7RoWa9IeDwiQLOtvOZg?e=IZh966";
              window.open(url, "_blank");
            }}
          >
            Reference Sheet
          </Dropdown.Item>
          <Dropdown.Item
            icon={<GearIcon style={{ color: "violet" }} />}
            onClick={() => navigate("/profile")}
            style={{
              fontSize: "16px",
              padding: "15px",
              width: "270px",
              height: "50px",
            }}
          >
            Profile
          </Dropdown.Item>
          <Dropdown.Item
            icon={<DetailIcon style={{ color: "yellow" }} />}
            style={{
              fontSize: "16px",
              padding: "15px",
              width: "270px",
              height: "50px",
            }}
          >
            Export PDF
          </Dropdown.Item>
          <Dropdown.Item
            icon={<ExitIcon style={{ color: "pink" }} />}
            style={{
              fontSize: "16px",
              padding: "15px",
              width: "270px",
              height: "50px",
            }}
            onClick={() => navigate("/login")}
          >
            Log Out
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <form onSubmit={handleSearch}>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "600px",
              marginRight: "10px",
              marginTop: "-30px",
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "5px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#3ab8eb",
              color: "white",
              cursor: "pointer",
              width: "100px",
            }}
          >
            SEARCH
          </button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "25px",
        }}
      ></div>
      <div style={{ marginTop: "-70px" }}></div>
      <h1 style={{ textAlign: "left", marginLeft: 30 }}>COVER-SHEET:</h1>
      <div class="form-wrapper">
        <div className="App">
          <fieldset>
            <form action="#" method="get">
              <label for="Contractor">Contractor</label>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Contractor"
                  id="Contractor"
                  value={Contractor}
                  onChange={(e) => setContractor(e.target.value)}
                  placeholder="Enter Contractor Name"
                  required
                />
                <label for="Architect">Architect</label>
                <input
                  type="text"
                  name="Architect"
                  id="Architect"
                  value={Architect}
                  onChange={(e) => setArchitect(e.target.value)}
                  placeholder="Enter Architect Name"
                  required
                />

                <label for="Owner">Owner </label>
                <input
                  type="text"
                  name="Owner"
                  id="Owner"
                  value={Owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="Enter Owner Name"
                  required
                />
                <label for="Date"> </label>
                <input
                  type="text"
                  name="Date"
                  id="DateInput"
                  class="date-field"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="NOTE:'Date Already Included In The PDF'"
                  required
                />
                <div>
                  {/* Other components and elements */}
                  <div
                    style={{
                      marginTop: "10px",
                      marginRight: "0px",
                      padding: "50px",
                      marginLeft: "100px",
                    }}
                  >
                    <div className="custom-button-container">
                      <button
                        onClick={() => mergePDFs(Date)}
                        disabled={selectedItems.length === 0}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </form>
          </fieldset>
        </div>

        <div
          className="selected-container"
          style={{ float: "right", maxHeight: 390, overflowY: "auto" }}
        >
          <h2>CHECK-LIST</h2>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item}
                <button
                  onClick={() => {
                    const newSelectedItems = selectedItems.filter(
                      (i) => i !== item
                    );
                    setSelectedItems(newSelectedItems);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div class="button-wrapper" style={{ display: "flex" }}>
          <button onClick={handledrywallClick} className="drywall-button">
            DRYWALL
          </button>
          <button onClick={handlecielingClick} className="cieling-button">
            CIELING
          </button>
          <button onClick={handlemetalClick} className="metal-button">
            METAL
          </button>
          <button onClick={handleinsulationClick} className="insulation-button">
            INSULATION
          </button>
          <button onClick={handlespecialityClick} className="speciality-button">
            SPECIALITY
          </button>
        </div>

        {showdrywall && (
          <div
            style={{
              marginLeft: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {drywallVendors.map((vendor) => (
              <div key={vendor.name} style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "10px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#FFDAB9", // Light peach background
                    borderRadius: "5px",
                    border: "1px solid #FFA07A", // Peach border
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleVendorClick(vendor.name)}
                >
                  {vendor.name}
                </h3>
                {expandedVendor === vendor.name && vendor.subVendors && (
                  <div>
                    {vendor.subVendors.map((subVendor) => (
                      <div key={subVendor.name}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#555",
                            marginTop: "10px",
                            marginBottom: "5px",
                            cursor: "pointer",
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "2px solid #ddd",
                            backgroundColor: "#e9f5ff",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleSubVendorClick(subVendor.name)}
                        >
                          {subVendor.name}
                        </h4>
                        {expandedSubVendor === subVendor.name && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(250px, 1fr))",
                              gap: "10px",
                            }}
                          >
                            {subVendor.products.map((product) => (
                              <div
                                key={product.name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  backgroundColor: selectedItems.includes(
                                    product.name
                                  )
                                    ? "#f0f0f0"
                                    : "#fff",
                                  cursor: "pointer",
                                  transition: "background-color 0.2s ease",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  value={product.name}
                                  onChange={handleCheckboxChange}
                                  checked={selectedItems.includes(product.name)}
                                  style={{ marginRight: 8 }}
                                />
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: "500",
                                  }}
                                >
                                  {product.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {showspeciality && (
          <div
            style={{
              marginLeft: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {specialityVendors.map((vendor) => (
              <div key={vendor.name} style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "10px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#FFDAB9", // Light peach background
                    borderRadius: "5px",
                    border: "1px solid #FFA07A", // Peach border
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleVendorClick(vendor.name)}
                >
                  {vendor.name}
                </h3>
                {expandedVendor === vendor.name && vendor.subVendors && (
                  <div>
                    {vendor.subVendors.map((subVendor) => (
                      <div key={subVendor.name}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#555",
                            marginTop: "10px",
                            marginBottom: "5px",
                            cursor: "pointer",
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "2px solid #ddd",
                            backgroundColor: "#e9f5ff",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleSubVendorClick(subVendor.name)}
                        >
                          {subVendor.name}
                        </h4>
                        {expandedSubVendor === subVendor.name && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(250px, 1fr))",
                              gap: "10px",
                            }}
                          >
                            {subVendor.products.map((product) => (
                              <div
                                key={product.name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  backgroundColor: selectedItems.includes(
                                    product.name
                                  )
                                    ? "#f0f0f0"
                                    : "#fff",
                                  cursor: "pointer",
                                  transition: "background-color 0.2s ease",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  value={product.name}
                                  onChange={handleCheckboxChange}
                                  checked={selectedItems.includes(product.name)}
                                  style={{ marginRight: 8 }}
                                />
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: "500",
                                  }}
                                >
                                  {product.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {showinsulation && (
          <div
            style={{
              marginLeft: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {insulationVendors.map((vendor) => (
              <div key={vendor.name} style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "10px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#FFDAB9", // Light peach background
                    borderRadius: "5px",
                    border: "1px solid #FFA07A", // Peach border
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleVendorClick(vendor.name)}
                >
                  {vendor.name}
                </h3>
                {expandedVendor === vendor.name && vendor.subVendors && (
                  <div>
                    {vendor.subVendors.map((subVendor) => (
                      <div key={subVendor.name}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#555",
                            marginTop: "10px",
                            marginBottom: "5px",
                            cursor: "pointer",
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "2px solid #ddd",
                            backgroundColor: "#e9f5ff",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleSubVendorClick(subVendor.name)}
                        >
                          {subVendor.name}
                        </h4>
                        {expandedSubVendor === subVendor.name && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(250px, 1fr))",
                              gap: "10px",
                            }}
                          >
                            {subVendor.products.map((product) => (
                              <div
                                key={product.name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  backgroundColor: selectedItems.includes(
                                    product.name
                                  )
                                    ? "#f0f0f0"
                                    : "#fff",
                                  cursor: "pointer",
                                  transition: "background-color 0.2s ease",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  value={product.name}
                                  onChange={handleCheckboxChange}
                                  checked={selectedItems.includes(product.name)}
                                  style={{ marginRight: 8 }}
                                />
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: "500",
                                  }}
                                >
                                  {product.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {showcieling && (
          <div
            style={{
              marginLeft: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {cielingVendors.map((vendor) => (
              <div key={vendor.name} style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "10px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#FFDAB9", // Light peach background
                    borderRadius: "5px",
                    border: "1px solid #FFA07A", // Peach border
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleVendorClick(vendor.name)}
                >
                  {vendor.name}
                </h3>
                {expandedVendor === vendor.name && vendor.subVendors && (
                  <div>
                    {vendor.subVendors.map((subVendor) => (
                      <div key={subVendor.name}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#555",
                            marginTop: "10px",
                            marginBottom: "5px",
                            cursor: "pointer",
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "2px solid #ddd",
                            backgroundColor: "#e9f5ff",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleSubVendorClick(subVendor.name)}
                        >
                          {subVendor.name}
                        </h4>
                        {expandedSubVendor === subVendor.name && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(250px, 1fr))",
                              gap: "10px",
                            }}
                          >
                            {subVendor.products.map((product) => (
                              <div
                                key={product.name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  backgroundColor: selectedItems.includes(
                                    product.name
                                  )
                                    ? "#f0f0f0"
                                    : "#fff",
                                  cursor: "pointer",
                                  transition: "background-color 0.2s ease",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  value={product.name}
                                  onChange={handleCheckboxChange}
                                  checked={selectedItems.includes(product.name)}
                                  style={{ marginRight: 8 }}
                                />
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: "500",
                                  }}
                                >
                                  {product.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {showmetal && (
          <div
            style={{
              marginLeft: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {metalVendors.map((vendor) => (
              <div key={vendor.name} style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "10px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#FFDAB9", // Light peach background
                    borderRadius: "5px",
                    border: "1px solid #FFA07A", // Peach border
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleVendorClick(vendor.name)}
                >
                  {vendor.name}
                </h3>
                {expandedVendor === vendor.name && vendor.subVendors && (
                  <div>
                    {vendor.subVendors.map((subVendor) => (
                      <div key={subVendor.name}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#555",
                            marginTop: "10px",
                            marginBottom: "5px",
                            cursor: "pointer",
                            textAlign: "left",
                            padding: "10px",
                            borderBottom: "2px solid #ddd",
                            backgroundColor: "#e9f5ff",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleSubVendorClick(subVendor.name)}
                        >
                          {subVendor.name}
                        </h4>
                        {expandedSubVendor === subVendor.name && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(250px, 1fr))",
                              gap: "10px",
                            }}
                          >
                            {subVendor.products.map((product) => (
                              <div
                                key={product.name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  backgroundColor: selectedItems.includes(
                                    product.name
                                  )
                                    ? "#f0f0f0"
                                    : "#fff",
                                  cursor: "pointer",
                                  transition: "background-color 0.2s ease",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  value={product.name}
                                  onChange={handleCheckboxChange}
                                  checked={selectedItems.includes(product.name)}
                                  style={{ marginRight: 8 }}
                                />
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: "500",
                                  }}
                                >
                                  {product.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </StyledDiv>
  );
};

export default Home;
