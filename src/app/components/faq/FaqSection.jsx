"use client"
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "​​1. What is Zeo Coin (ZEO)?",
      answer: "Zeo Coin (ZEO) is an ERC-20 token on the Ethereum blockchain, designed to power the Zeo ecosystem, reward users, and support utility across the Zeo Super App."
    },
    {
      question: "2. What is an ERC-20 token?",
      answer: "ERC-20 is the most widely used token standard on Ethereum. It ensures Zeo Coins are compatible with most wallets, decentralized applications (dApps), and exchanges, making ZEO highly versatile."
    },
    {
      question: "3. Where can users store Zeo Coin (ZEO)?",
      answer: "ZEO can be stored in any ERC-20 compatible wallet, including MetaMask, Trust Wallet, Coinbase Wallet, and hardware wallets like Ledger or Trezor."
    },
    {
      question: "4. Can Zeo Coins (ZEO) only be purchased?",
      answer: "No, users can also earn ZEO as part of the reward system in the Zeo Super App. Influencers, affiliates, and shoppers can receive ZEO rewards for their participation and activity."
    },
    {
      question: "5. Where can Zeo Coins be purchased?",
      answer: "Seed Sale: 50M ZEO at $0.01 per token (for early believers & strategic investors).\n\nPrivate Sale: 150M ZEO at $0.02 per token (community-driven private sale).\nPurchases during Seed and Private Sale are available directly on this website.\n\nPublic Sale: 100M ZEO at $0.025 per token via launchpads, which will be announced in the coming days.\n\nCEX Listing: 50M ZEO allocated for centralized exchange access at $0.05 per token."
    },
    {
      question: "6. Is there a vesting period for team tokens?",
      answer: "Yes. Team tokens (9% of supply) have a 12-month cliff, followed by release at 5% monthly. This ensures long-term commitment."
    },
    {
      question: "7. What are the vesting schedules for different allocations?",
      answer: "Seed & Private Sale: 7% at TGE (Token Generation Event), 3-month cliff, 7% monthly.\n\nPublic Sale: 7% at TGE, 3-month cliff, 7% monthly.\n\nMarketing: 3-month cliff, 7% monthly.\n\nEcosystem Development & Treasury: 6-month cliff, 5% monthly.\n\nTeam & Advisors: 12-month cliff, 5% monthly.\n\nRewards: Linear vesting over 18 months.\n\nLiquidity, Staking Pool, and CEX listings: No vesting.\n\nAirdrop Fund: 7% at TGE, 3-month cliff, 7% monthly."
    },
    {
      question: "8. Which payment methods will be accepted for Zeo purchases?",
      answer: "Payment methods (e.g., ETH, USDT, or USDC) will be specified on the official website during each sale stage. ZEO will be distributed directly to participants’ ERC-20 wallets."
    },
    {
      question: "9. Is there a KYC process?",
      answer: "Yes. Participants in the Seed and Private Sales may be required to complete a Know Your Customer (KYC) verification to ensure secure and compliant token distribution."
    },
    {
      question: "10. Who can participate in the token sales?",
      answer: "Zeo’s Seed and Private Sales are open globally, except where restricted by local regulations. Public Sale participation will depend on the rules of the launchpads. Users should check eligibility in their jurisdictions."
    },
    {
      question: "11. Why is ZEO unique?",
      answer: "Zeo Coin integrates directly with the Zeo Super App’s economy. A portion of fiat transactions is used to buy back ZEO from exchanges and credit it to users’ wallets, creating consistent demand and reinforcing long-term ecosystem sustainability."
    },
    {
      question: "12. How does ZEO work as a reward token?",
      answer: "ZEO is designed as a utility and rewards token within the Zeo ecosystem. Its progressive allocation model, cashback-style rewards, and integration with real-world transactions make it more sustainable than typical reward tokens."
    },
    {
      question: "13. Will there be a claim portal and staking?",
      answer: "Yes. After purchase, users can claim their ZEO through a dedicated Claim & Staking Portal page on this website as per the vesting schedule and cliff. Users will also be able to stake their ZEO tokens to earn additional rewards and benefits."
    },
    {
      question: "14. What is the total supply of Zeo Coin (ZEO)?",
      answer: "The total supply is 1 billion ZEO Coins, permanently capped with no inflation."
    },
    {
      question: "15. What is the purpose of different token allocations?",
      answer: "Seed & Private Sale: Early believers, strategic investors, and community growth.\n\nPublic Sale: Broader community access via launchpads.\n\nCEX Listing & Liquidity: Smooth market access."
    },
    {
      question: "16. Will there be a buyback or burn mechanism?",
      answer: "Yes. A portion of fiat transactions within the Zeo Super App is allocated to buying back ZEO from exchanges and distributing them to users. "
    },
    {
      question: "17. Can users stake ZEO to earn rewards?",
      answer: "Yes. Zeo’s Claim & Staking Portal allows users to stake ZEO and earn rewards for supporting network stability and liquidity. Details on staking tiers, lock-up periods, and reward rates will be shared after TGE."
    },
    {
      question: "18. What are the utilities of Zeo Coin (ZEO)?",
      answer: "Cashback-style rewards in the Zeo Super App.\n\nCommunity incentives and affiliate programs.\n\nStaking and governance participation (if governance is planned).\n\nAccess to exclusive features and promotions inside the ecosystem."
    },
    {
      question: "19. Is Zeo Coin regulated or licensed?",
      answer: "ZEO is a utility token, not a security. Its purpose is to provide rewards and utility inside the Zeo ecosystem. Regulatory requirements may vary by jurisdiction, so users should check their local laws before participating."
    },
    {
      question: "20. Is there a roadmap for Zeo Coin?",
      answer: "Yes. The Zeo roadmap in the website homepage includes the Zeo Super App features that will be released in the coming days."
    }
  ];

  return (
    <div className="!pt-[98px] px-4 md:px-[135px] max-w-[1440px] mx-auto my-[30px] md:my-[50px]">
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[#191C1D] text-xl md:text-4xl font-bold ">
          Frequently Asked Questions
        </h2>
        <span className="h-1 w-[52px] bg-[#E37100] rounded-full"></span>
        <div className="flex flex-col gap-[10px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E0E0E0] pb-[20px]">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-[#191C1D] text-base font-semibold ">
                  {/* {index + 1}. {faq.question} */}
                  {faq.question}
                </h3>
                <span className="text-[#48464F] text-xl">
                  {openIndex === index ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                {openIndex === index && (
                  <p className="text-[#48464F] text-sm mt-[16px]">
                    {faq.answer.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;