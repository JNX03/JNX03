use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use svg::node::element::{Group, Rectangle, Text};
use svg::Document;

#[derive(Debug, Serialize, Deserialize)]
struct Project {
    name: String,
    url: Option<String>,
    status: Option<String>,
    awards: Option<Vec<String>>,
    links: Option<Vec<String>>,
    urls: Option<Vec<String>>,
}

#[derive(Debug, Serialize, Deserialize)]
struct AwardsData {
    competitions: HashMap<String, Project>,
    personal: HashMap<String, Project>,
    #[serde(rename = "teamArchive")]
    team_archive: HashMap<String, Project>,
    #[serde(rename = "teamOngoing")]
    team_ongoing: HashMap<String, Project>,
    contributions: Vec<String>,
}

fn escape_xml(text: &str) -> String {
    text.replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
        .replace('"', "&quot;")
        .replace('\'', "&#39;")
}

fn create_badge(text: &str, color: &str, x: f32, y: f32) -> Group {
    let escaped_text = escape_xml(text);
    let width = (text.len() as f32 * 6.5 + 12.0).max(45.0);

    let rect = Rectangle::new()
        .set("x", x)
        .set("y", y)
        .set("width", width)
        .set("height", 18)
        .set("rx", 3)
        .set("fill", color);

    let text_elem = Text::new()
        .set("x", x + width / 2.0)
        .set("y", y + 12.0)
        .set("text-anchor", "middle")
        .set("fill", "#ffffff")
        .set("font-family", "Arial,sans-serif")
        .set("font-size", "10")
        .set("font-weight", "bold")
        .add(svg::node::Text::new(escaped_text));

    Group::new().add(rect).add(text_elem)
}

fn get_award_color(award: &str) -> &str {
    if award.contains("1st") {
        "#ffd700" // Gold
    } else if award.contains("2nd") || award.contains("2rd") {
        "#c0c0c0" // Silver
    } else if award.contains("Winner") {
        "#dc3545" // Red
    } else if award.contains("Finalist") {
        "#17a2b8" // Teal
    } else if award.contains("Merit") {
        "#fd7e14" // Orange
    } else {
        "#28a745" // Green
    }
}

fn main() {
    // Define awards data
    let awards_data = r#"{
        "competitions": {
            "INDEXS": {
                "url": "Index.jnx03.xyz",
                "status": "App - Wait for review",
                "awards": ["NSC", "INTEL", "TIA"]
            },
            "MooDong": {
                "awards": ["1st MIT Moodeng AI Challenge"]
            },
            "Syntaxia": {
                "awards": ["Winner WWDC 2025"]
            }
        },
        "personal": {
            "HMO": {
                "name": "Hear me once"
            },
            "SecureNetKit": {
                "links": ["PyPI", "NPM"],
                "urls": ["test.pypi.org/project/jnxbetasec", "npmjs.com/package/jnxbetasec"]
            },
            "Acora": {
                "url": "Acora.jnx03.xyz"
            }
        },
        "teamArchive": {
            "Eibraille": {
                "awards": ["1st ISEF", "1st INTEL", "1st TICTA 2024", "2nd APICTA 2024", "Merit SCI-PROJECT", "2nd NSC 2024", "1st YSC 2024", "1st TIA 2024", "1st AI INNOVATOR CMKL 2024"]
            },
            "PETRA": {
                "awards": ["2nd Samsung Solve for Tomorrow 2024", "Merit MEDCHICK 2025"]
            },
            "ALDS": {
                "awards": ["Samsung Solve for Tomorrow 2024"]
            },
            "PASX+": {
                "awards": ["2nd TICTA 2023", "2nd APICTA 2023"]
            },
            "Kamora": {
                "awards": ["FTC Thailand 2024"]
            },
            "WrPower": {
                "awards": ["FLL 2023"]
            },
            "WasteTD": {
                "awards": ["Finalist GoSoft Hackathon"]
            }
        },
        "teamOngoing": {
            "MalariaX": {
                "awards": ["1st SCI-Project", "Stage 2 INTEL 2025"]
            },
            "CytoScanZ": {
                "awards": ["1st SCI-Project", "1st INTEL 2025"]
            },
            "NeuroSync PlayKit": {
                "status": "On going - Samsung Solve for Tomorrow 2025"
            }
        },
        "contributions": [
            "Monkey Type",
            "ultralytics",
            "THU-MIG(YoloV10)",
            "rigvedrs/YOLO-V12-CAM"
        ]
    }"#;

    let data: AwardsData = serde_json::from_str(awards_data).expect("Failed to parse JSON");

    let mut doc = Document::new().set("width", 800).set("height", 1000);
    let mut current_y = 20.0;

    // Header
    let header_bg = Rectangle::new()
        .set("x", 0)
        .set("y", 0)
        .set("width", 800)
        .set("height", 50)
        .set("fill", "#f6f8fa")
        .set("stroke", "#d0d7de")
        .set("stroke-width", 1);

    let header_text = Text::new()
        .set("x", 400)
        .set("y", 25)
        .set("text-anchor", "middle")
        .set("fill", "#24292f")
        .set("font-family", "Arial,sans-serif")
        .set("font-size", "18")
        .set("font-weight", "bold")
        .add(svg::node::Text::new("🏆 JNX03 Awards & Recognition"));

    let subtitle = Text::new()
        .set("x", 400)
        .set("y", 40)
        .set("text-anchor", "middle")
        .set("fill", "#656d76")
        .set("font-family", "Arial,sans-serif")
        .set("font-size", "12")
        .add(svg::node::Text::new("Competitions • Projects • Open Source"));

    doc = doc.add(header_bg).add(header_text).add(subtitle);

    current_y += 70.0;

    // Write the SVG file
    svg::save("github-awards-metrics.svg", &doc).expect("Failed to save SVG");
    println!("Awards metrics SVG generated successfully with Rust!");
}
