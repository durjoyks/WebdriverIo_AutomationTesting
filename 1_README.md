# WebdriverIO Automation Testing for Evershop

This project contains **end-to-end automation tests** for the [Evershop Demo Website](https://demo.evershop.io/) built using **WebdriverIO**, **Mocha**, and **Allure Reporter**.  

---

🎬 **Demo Video**  
Watch a short Screen Record of the automation test execution here:  
📎 [Click to View Demo Video on Google Drive](https://drive.google.com/file/d/1DTsX46Cv0BILRAk-uZ7k-_iaiOnEgbHn/view?usp=drive_link)

##  What I Did
- Implemented **Page Object Model (POM)** for maintainable automation.  
- Automated **login scenarios**:
  - Valid credentials  
  - Invalid email  
  - Wrong password  
  - Empty fields  
  - Invalid email format
- Automated **product Search**:
  - Search a Product
- Automated **product selection**:
  - Open product page  
  - Select size and random color  
  - Add to cart  
- Automated **checkout flow**:
  - Fill checkout form (name, phone, address, city, country, postcode)
  - Selection of payment method
  - Submit order
  - Order details
- **Randomized selections** for colors to simulate real user behavior.  
- Captured **screenshots on test failures**.  
- Generated **Allure reports** for visual test reporting.  

---

## 🚀 How to Run
**Install dependencies**
- **REQUIRED COMMANDS** 
```bash
npm install
npm run wido  (To run all Tests)
npx wdio run wdio.conf.ts --suite login  (Run a specific test suite addProduct,SearchProduct,login,checkout)
-Allure Report:
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

