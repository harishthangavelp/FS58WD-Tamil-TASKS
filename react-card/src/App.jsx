import Card from "./Card"

function App() {
  

  return (
    <>
    <div style={{display:"flex"}}>
    <Card name={"FREE"} next= {"$0/month"}
    last1={"✔ Single User"}
    last2={"✔ 50GB Storage"}
    last3={"✔ Unlimited Public Projects"}
    last4={"✔ Community Access"}
    last5={"x Unlimited Private Projects"}
    last6={"x Dedicated Phone Support"}
    last7={"x Free Subdomain"}
    last8={"x Monthly Status Reports"}>
    </Card>
    <Card name={"PLUS"} next={"$9/month"}
    last11={"✔ 5 Users"}
    last22={"✔ 50GB Storage"}
    last33={"✔ Unlimited Public Projects"}
    last44={"✔ Community Access"}
    last55={"✔ Unlimited Private Projects"}
    last66={"✔ Dedicated Phone Support"}
    last77={"✔ Free Subdomain"}
    last88={"x Monthly Status Reports"}>
    </Card>
    <Card name={"PRO"} next={"$49/month"}
    last111={"✔ Unlimited Users"}
    last222={"✔ 50GB Storage"}
    last333={"✔ Unlimited Public Projects"}
    last444={"✔ Community Access"}
    last555={"✔ Unlimited Private Projects"}
    last666={"✔ Dedicated Phone Support"}
    last777={"✔ Free Subdomain"}
    last888={"✔ Monthly Status Reports"}>
    </Card>
    </div>
    </>
  )
}

export default App
