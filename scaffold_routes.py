import os

routes = {
    "/": "Home",
    "/image-post-production-company-our-company": "About",
    "/image-post-production-service": "ServicesOverview",
    "/gallery": "Gallery",
    "/contact-info": "Contact",
    "/take-free-trial": "TrialPage",
    "/frequently-asked-questions": "FAQ",
    "/privacy-policy": "Legal",
    "/terms-and-conditions": "Legal",
    "/cookies-policy-of-blackfox-limited": "Legal",
}

# The Service pages require ServicePage component
services = [
    ("ecom", "/e-commerce-edit"),
    ("clipping", "/background-removal-clippingpath-service"),
    ("mannequin", "/ghost-mannequin"),
    ("masking", "/image-masking-service"),
    ("shadow", "/shadow-reflection-services"),
    ("beauty", "/beauty-skin"),
    ("model", "/model-retouch"),
    ("product", "/product-retouch"),
    ("jewelry", "/jewelry-retouch"),
]

for route, comp in routes.items():
    if route == "/":
        path = "app"
    else:
        path = os.path.join("app", route.lstrip("/"))
        os.makedirs(path, exist_ok=True)
    
    file_path = os.path.join(path, "page.js")
    
    with open(file_path, "w") as f:
        if comp == "Home":
            f.write('import { Home as HomeComponent } from "@/components/Home";\n\nexport default function Page() {\n  return <HomeComponent />;\n}\n')
        elif comp == "About":
            f.write('import { About as AboutComponent } from "@/components/Pages";\n\nexport default function Page() {\n  return <AboutComponent />;\n}\n')
        elif comp == "ServicesOverview":
            f.write('import { ServicesOverview as ServicesOverviewComponent } from "@/components/Pages";\n\nexport default function Page() {\n  return <ServicesOverviewComponent />;\n}\n')
        elif comp == "Gallery":
            f.write('import { Gallery as GalleryComponent } from "@/components/Pages";\n\nexport default function Page() {\n  return <GalleryComponent />;\n}\n')
        elif comp == "Contact":
            f.write('import { Contact as ContactComponent } from "@/components/Contact";\n\nexport default function Page() {\n  return <ContactComponent />;\n}\n')
        elif comp == "TrialPage":
            f.write('import { TrialPage as TrialPageComponent } from "@/components/Trial";\n\nexport default function Page() {\n  return <TrialPageComponent />;\n}\n')
        elif comp == "FAQ":
            f.write('import { FAQ as FAQComponent } from "@/components/FAQLegal";\n\nexport default function Page() {\n  return <FAQComponent />;\n}\n')
        elif comp == "Legal":
            doc_type = "privacy"
            if "terms" in route: doc_type = "terms"
            if "cookies" in route: doc_type = "cookies"
            f.write(f'import {{ Legal as LegalComponent }} from "@/components/FAQLegal";\n\nexport default function Page() {{\n  return <LegalComponent doc="{doc_type}" />;\n}}\n')

for sid, url in services:
    path = os.path.join("app", url.lstrip("/"))
    os.makedirs(path, exist_ok=True)
    file_path = os.path.join(path, "page.js")
    with open(file_path, "w") as f:
        f.write(f'import {{ ServicePage as ServicePageComponent }} from "@/components/ServicePage";\n\nexport default function Page() {{\n  return <ServicePageComponent serviceId="{sid}" />;\n}}\n')
