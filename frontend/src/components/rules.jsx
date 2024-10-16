import React from "react";

const Rules = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-100 to-gray-200 text-black py-20 px-6 mt-[30px]">
      <div className="container text-lg mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">ProChesser Rules</h1>

        <h2 className="text-xl font-bold mb-2">1. Eligibility</h2>
        <p className="mb-4">
          All ProChesser users must be 18 years or older. Age verification may
          be required.
        </p>

        <h2 className="text-xl font-bold mb-2">2. User Conduct</h2>
        <p className="mb-4">
          Offensive or abusive language is strictly prohibited. Personal
          attacks, harassment, or threats towards other users will not be
          tolerated. Any form of game manipulation or cheating is grounds for
          immediate termination of the account.
        </p>

        <h2 className="text-xl font-bold mb-2">3. Game Play</h2>
        <p className="mb-4">
          The minimum stake amount for a game is $5. Users cannot create or join
          a new game while a current or previous game is in progress. Resigning
          from a game results in a loss, while a draw does not affect the user's
          stake. Winners receive a generous 85% of their total stake as profit,
          while ProChesser retains a 15% commission. A minimum of three games
          must be played before a withdrawal request can be processed.
        </p>

        <h2 className="text-xl font-bold mb-2">
          4. ProChesser Tournaments
        </h2>
        <p className="mb-4">
          Tournaments are hosted exclusively by ProChesser. Team play or group
          participation is not allowed.
        </p>

        <h2 className="text-xl font-bold mb-2">5. Funds Management</h2>
        <p className="mb-4">The minimum deposit and withdrawal amount is $5.</p>

        <h2 className="text-xl font-bold mb-2">6. Reporting Issues</h2>
        <p className="mb-4">
          To report a rule violation or a dispute with another user, please
          reach out to ProChesser support by using the ‘report’ button in your
          account section. Be sure to include the game ID, the name/username of
          the individual involved, and a detailed description of the issue.
        </p>

        <h2 className="text-xl font-bold mb-2">7. Rules Enforcement</h2>
        <p>
          ProChesser reserves the right to modify or amend these rules at any
          time. Violations of these rules may result in temporary or permanent
          account suspension or termination, without refund. By using
          ProChesser, you agree to abide by these rules and regulations.
        </p>
        <h2 className="text-lg font-bold mt-3">
          By using ProChesser, you agree to abide by these rules and
          regulations.
        </h2>
      </div>
    </div>
  );
};

export default Rules;
