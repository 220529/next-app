import React from "react";
// import Test from "@/components/test";

export default function Page(props: any) {
  return (
    <div>
      {JSON.stringify(props)}
      {/* <Test /> */}
    </div>
  );
}
Page.getInitialProps = async (context: any) => {
  // console.log("context", context.req.headers);

  // const { cookie } = context.req.headers;
  // const res = await purchaseRecords(cookie);
  return {
    records: [1],
  };
};
