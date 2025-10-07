📁 About the Data
Data Source

The dataset was obtained from the Australian Government Energy Rating Register
, which publicly lists televisions approved for sale under the GEMS Regulations.
Each entry represents a registered TV model with information such as:

-Brand, model, and registration number
-Screen size and technology
-Average power consumption (kWh/year)
-Energy efficiency star ratings and indexes
-Product and manufacturer websites

Data Processing

1. The dataset (tv_2025_09_08.csv) was cleaned by:
    -Removing rows with missing model numbers.
    -Converting numeric columns such as screensize and Labelled energy consumption (kWh/year) to proper numeric types.
    -Filtering out records with invalid or missing star ratings.

2. Derived fields were computed (e.g., energy per screen area).

3. Data was visualised to reveal relationships between brand, technology type, and efficiency rating.

Privacy

This dataset contains no personal or sensitive information — only product-level data. All information is publicly accessible from the energy rating database.

Accuracy and Limitations

-The data reflects registered models, not necessarily current retail availability.
-Some fields (e.g., “Star”, “SRI”) have missing values for older or unlabelled entries.
-Manufacturer-reported data may vary slightly from real-world performance.

Ethics

This project follows ethical data handling practices:
    -The dataset is used solely for educational and analytical purposes.
    -No individual or brand is misrepresented; results are reported in aggregate.
    -Visualisations are designed to inform consumers, not to promote or criticise specific brands.

🤖 AI Declaration

Parts of this README and supporting visualisations were assisted by OpenAI’s GPT-5 model for:

-Structuring and summarising dataset insights.
-Drafting readable documentation.
-Suggesting visualisation narratives and formatting improvements.

All analytical decisions, code, and final edits were reviewed and verified manually by the author (elijah) to ensure accuracy and integrity.