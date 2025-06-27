function sideBar_() {
    document.querySelector('.sidebar-').innerHTML = `
    <div class="close-" onclick="close_()" id="close_">&times;</div>
    <div>
        <input type="checkbox" id="side_sub1_" class="side-checkbox-">
        <label for="side_sub1_">
            MTH 101 <span class="arw- mth101-arw-"></span>
            <ol class="subj-ol- mth101-ol-">
                <a href="../BS-mth101/l1.html"><li>Elemental set theory</li></a>
                <a href="../BS-mth101/l2.html"><li>Real numbers</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub2_" class="side-checkbox-">
        <label for="side_sub2_">
            PHY 101 <span class="arw- phy101-arw-"></span>
            <ol class="subj-ol- phy101-ol-">
                <a href="../BS-phy101/l1.html"><li>Measurements, quantities, dimensions </li></a>
                <a href="../BS-phy101/l2.html"><li>Space, time, units and dimensions</li></a>
                <a href="../BS-phy101/l3.html"><li>Newton's laws of motion</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub3_" class="side-checkbox-">
        <label for="side_sub3_">
            COS 101 <span class="arw- cos101-arw-"></span>
            <ol class="subj-ol- cos101-ol-">
                <a href="../BS-cos101/l1.html"><li>Computer</li></a>
                <a href="../BS-cos101/l2.html"><li>Structure of the computer</li></a>
                <a href="../BS-cos101/l3.html"><li>Computing history</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub4_" class="side-checkbox-">
        <label for="side_sub4_">
            GST 106 <span class="arw- gst106-arw-"></span>
            <ol class="subj-ol- gst106-ol-">
                <a href="../BS-gst106/l1.html"><li>Health</li></a>
                <a href="../BS-gst106/l2.html"><li>Alcoholism</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub5_" class="side-checkbox-">
        <label for="side_sub5_">
            GST 107 <span class="arw- gst107-arw-"></span>
            <ol class="subj-ol- gst107-ol-">
                <a href="../BS-gst107/l1.html"><li>Word formation</li></a>
                <a href="../BS-gst107/l2.html"><li>Communication</li></a>
                <a href="../BS-gst107/l3.html"><li>Spoken English</li></a>
                <a href="../BS-gst107/l4.html"><li>Reading, listening skills, listening skills</li></a>
                <a href="../BS-gst107/l5.html"><li>Word formation</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub6_" class="side-checkbox-">
        <label for="side_sub6_">
            CHM 101 <span class="arw- chm101-arw-"></span>
            <ol class="subj-ol- chm101-ol-">
                <a href="../BS-chm101/l1.html"><li>Atoms, molecules and compounds</li></a>
                <a href="../BS-chm101/l2.html"><li>Elements, Atomic numbers, Mass numbers and Isotopes</li></a>
                <a href="../BS-chm101/l3.html"><li>Still under elements, atomic number</li></a>
                <a href="../BS-chm101/l4.html"><li>German obj</li></a>
                <a href="../BS-chm101/l5.html"><li>German obj part 2</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub7_" class="side-checkbox-">
        <label for="side_sub7_">
            BIO 101 <span class="arw- bio101-arw-"></span>
            <ol class="subj-ol- bio101-ol-">
                <a href="../BS-bio101/l1.html"><li>Ecology</li></a>
                <a href="../BS-bio101/l2.html"><li>Cell structure</li></a>
                <a href="../BS-bio101/l3.html"><li>Kingdom plantae</li></a>
                <a href="../BS-bio101/l4.html"><li>Bio Doc</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub8_" class="side-checkbox-">
        <label for="side_sub8_">
            General <span class="arw- general-arw-"></span>
            <ol class="subj-ol- general-ol-">
                <a href="../BS-general/l1.html"><li>Random questions</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub9_" class="side-checkbox-">
        <label for="side_sub9_">
            CHM 111 <span class="arw- chm111-arw-"></span>
            <ol class="subj-ol- chm111-ol-">
                <a href="../BS-chm111/l1.html"><li>Introduction to organic chemistry</li></a>
                <a href="../BS-chm111/l2.html"><li>Classification of organic compounds</li></a>
                <a href="../BS-chm111/l3.html"><li>Functional groups and homologous series</li></a>
                <a href="../BS-chm111/l4.html"><li>Naming organic compounds</li></a>
                <a href="../BS-chm111/l5.html"><li>Naming organic compounds part 2</li></a>
                <a href="../BS-chm111/l6.html"><li>Hydrocarbons</li></a>
                <a href="../BS-chm111/l7.html"><li>Alkane</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub10_" class="side-checkbox-">
        <label for="side_sub10_">
            BIO 112 <span class="arw- bio112-arw-"></span>
            <ol class="subj-ol- bio112-ol-">
                <a href="../BS-bio112/l1.html"><li>Diversity of living organisms</li></a>
                <a href="../BS-bio112/l2.html"><li>Class Pisces</li></a>
                <a href="../BS-bio112/l3.html"><li>Amphibians</li></a>
                <a href="../BS-bio112/l4.html"><li>Class Aves</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub11_" class="side-checkbox-">
        <label for="side_sub11_">
            PHY 111 <span class="arw-"></span>
            <ol class="subj-ol-">
                <a href="../BS-phy111/l1.html"><li>Coulomb's law</li></a>
                <a href="../BS-phy111/l2.html"><li>Electricity 1</li></a>
                <a href="../BS-phy111/l3.html"><li>Energy</li></a>
                <a href="../BS-phy111/l4.html"><li>Charge</li></a>
                <a href="../BS-phy111/l5.html"><li>Light Waves</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub12_" class="side-checkbox-">
        <label for="side_sub12_">
            MTH 111 <span class="arw-"></span>
            <ol class="subj-ol-">
                <a href="../BS-mth111/l1.html"><li>Limits & Functions</li></a>
                <a href="../BS-mth111/l2.html"><li>Integration</li></a>
            </ol>
        </label>
    </div>

    <div>
        <input type="checkbox" id="side_sub13_" class="side-checkbox-">
        <label for="side_sub13_">
            GST 115 <span class="arw-"></span>
            <ol class="subj-ol-">
                <a href="../BS-gst115/l1.html"><li>Physical features of Nigeria</li></a>
                <a href="../BS-gst115/l2.html"><li>Major ethnic groups</li></a>
                <a href="../BS-gst115/l3.html"><li>Origins of ethinc groups</li></a>
                <a href="../BS-gst115/l4.html"><li>Nigeria as a political unit</li></a>
            </ol>
        </label>
    </div>
    `
}
sideBar_()
