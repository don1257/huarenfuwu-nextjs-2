import { Button } from '@mantine/core';
import Head from 'next/head';


const Donate = () => (
    <>
        <Head>
            <script async src="https://js.stripe.com/v3/buy-button.js" />
        </Head>
        <h1>我们需要您的帮助！</h1>
        {/* eslint-disable-next-line max-len */}
        <ul>作为华人移民在美国生活，我们不得不离开国内最爱的家人和亲友，勇敢来到这里打拼，只为给家人孩子更好的生活。但作为非母语使用者，我们每天都在努力改善自己的语言能力，并支持家庭，这并非易事。我们需要帮助和支持。</ul>
        {/* eslint-disable-next-line max-len */}
        <ul>华人服务中心的使命是为华人社区提供必要的服务，让生活更容易。您的捐款可以帮助我们扩大服务覆盖范围，为更多需要帮助的华人提供支持。并且用于扩大电话与宣传服务，将更多需要帮助的人连接到必要的资源，并支付服务中心员工的薪酬。</ul>
        <ul>请加入我们，为社区做出积极的贡献。请立即捐款，支持华人服务中心，为华人移民在美国的生活做出贡献</ul>
        {/* eslint-disable-next-line react/jsx-no-undef */}

        {/*// @ts-ignore*/}
        <stripe-buy-button
          buy-button-id="buy_btn_1Mz10HFYLySGKhxzK03Wm8nw"
          publishable-key="pk_live_51MwxL3FYLySGKhxzd9GNPJtUiuE9K3thivgAXlbVsNCSwUNgXR81zuXIXyRN1Yacuhmeb1KKAWMFdhQ9fX90BMlB00nSP3scQM"
        />

        <Button
          component="a"
          href="https://account.venmo.com/u/huarenfuwu"
          color="cyan"
          radius="md"
          size="lg"
          w={288}
          h={44}
        >Venmo
        </Button>
    </>
);

export default Donate;
