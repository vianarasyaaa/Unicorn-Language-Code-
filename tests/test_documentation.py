from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class UnicornOmegaDocumentationTests(unittest.TestCase):
    def test_creator_taught_rules_document_exists(self):
        path = ROOT / "docs/30-unicorn-omega/creator-taught-rules.md"
        self.assertTrue(path.is_file())
        text = path.read_text(encoding="utf-8")
        for token in ("persamaan=", "pencocokan=", "objek::", "kenyataan::a:",
                      "maka#sama#dengan::", "maka#hampir#dengan::",
                      "maka#persis#dengan::"):
            self.assertIn(token, text)

    def test_four_extensions_are_documented_with_roles(self):
        path = ROOT / "docs/30-unicorn-omega/extensions.md"
        self.assertTrue(path.is_file())
        text = path.read_text(encoding="utf-8")
        for extension in (".unml", ".uncs", ".untext", ".unt"):
            self.assertIn(extension, text)
        self.assertIn("belum diajarkan", text.lower())

    def test_single_logic_examples_keep_distinct_points(self):
        same = (ROOT / "examples/06-creator-taught-syntax/01-persamaan-single.un").read_text(encoding="utf-8")
        almost = (ROOT / "examples/06-creator-taught-syntax/02-pencocokan-hampir-single.un").read_text(encoding="utf-8")
        self.assertIn('persamaan= "WhatsApp"', same)
        self.assertIn("maka#sama#dengan::WeChat", same)
        self.assertIn('pencocokan= "WhatsApp"', almost)
        self.assertIn("maka#hampir#dengan::WeChat", almost)
        self.assertNotIn('pencocokan= "WhatsApp"', same)
        self.assertNotIn('persamaan= "WhatsApp"', almost)

    def test_combined_example_uses_object_alias_pattern(self):
        path = ROOT / "examples/06-creator-taught-syntax/03-same-persis-combined.un"
        text = path.read_text(encoding="utf-8")
        self.assertIn('objek= "WhatsApp*:a"', text)
        self.assertIn("kenyataan::a:", text)
        self.assertIn("maka#sama#dengan::WeChat", text)
        self.assertIn("maka#persis#dengan::WeChat", text)
        self.assertNotIn('persamaan= "WhatsApp"', text)

    def test_repo_does_not_claim_maturity_or_compiler_availability(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()
        status = (ROOT / "STATUS.md").read_text(encoding="utf-8").lower()
        self.assertIn("belum dinyatakan matang", readme)
        self.assertIn("belum tersedia", readme)
        self.assertIn("50%", readme)
        self.assertIn("tidak disertakan", status)


if __name__ == "__main__":
    unittest.main()
