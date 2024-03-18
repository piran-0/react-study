export default function UserInput({ valueChangeHandler, userValue }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial">INITIAL INVESTMENT</label>
                    <input
                        type="number"
                        value={userValue.initialInvestment}
                        required
                        id="initial"
                        onChange={(e) =>
                            valueChangeHandler("initialInvestment", e.target.value)
                        }
                    />
                </p>

                <p>
                    <label htmlFor="annual">ANNUAL INVESTMENT</label>
                    <input
                        type="number"
                        value={userValue.annualInvestment}
                        required
                        id="annual"
                        onChange={(e) =>
                            valueChangeHandler("annualInvestment", e.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected">EXPECTED RETURN</label>
                    <input
                        type="number"
                        value={userValue.expectedReturn}
                        required
                        id="expected"
                        onChange={(e) =>
                            valueChangeHandler("expectedReturn", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input
                        type="number"
                        value={userValue.duration}
                        required
                        id="duration"
                        onChange={(e) => valueChangeHandler("duration", e.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
