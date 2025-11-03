# WebdriverIO Automation Testing for Evershop

This project contains **end-to-end automation tests** for [Evershop Demo](https://demo.evershop.io/) using **WebdriverIO** with **Mocha** and **Allure Reporter**.  

##  What I Did
- Implemented **Page Object Model (POM)** for maintainable automation.  
- Automated **login scenarios**:
  - Valid credentials  
  - Invalid email  
  - Wrong password  
  - Empty fields  
  - Invalid email format
- Automated **product Search**:
  -Search a Product
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

1. **Install dependencies**:

```bash
npm install
