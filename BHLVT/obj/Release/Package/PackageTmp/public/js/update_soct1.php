<?php
include("includes/connect.php");
if (isset($_REQUEST['stt_rec'])) {
    global $conn;
    //var_dump($_REQUEST);
    $ngay_lap_1 = date('Y-m-d', time());
    // echo $ngay_lap_1;
    $stt_rec = $_REQUEST['stt_rec'];
    // $sql_query = "select * into temptable from soct1 where soct1.$stt_rec";
    $query = "select soct1.so_luong,soct1.stt_rec,soct1.stt_rec0, sosaleplan.ma_KH, "
            . "sosaleplan.Ten_KH, sosaleplan.Ma_nhvt, sosaleplan.Ten_nhvt, sosaleplan.ma_vt,"
            . " sosaleplan.Ten_vt, soct1.dvt, soct1.gia2, soct1.tien2,soct1.tl_ck,soct1.tien_ck,sosaleplan.he_so ,soph1.ngay_ct,soct1.khuyen_mai"
            . " from soph1 join soct1 on soct1.stt_rec = soph1.stt_rec join sosaleplan on "
            . "sosaleplan.ma_vt = soct1.ma_vt WHERE soct1.stt_rec='" . $stt_rec . "' and sosaleplan.ngay_hl like '%$ngay_lap_1%'";
    // echo '<br/>'.$query;
    //echo "<script>alert($query)</script>";
    $result = mysqli_query($conn, $query) or die('Không thể lấy dữ liệu sản phẩm ...asdsa');
    //die("thhục hiện xong..");
    //$mData = array();
    /* function sxlaidl($query) {
      if (mysqli_num_rows($query) > 0) {
      while ($row_3 = mysql_fetch_assoc($query)) {
      /// if(){}
      }
      }
      } */

    $i = 0;
    $mData_temp = array();
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            //Thực hiện cập nhật lại số lượng sản phẩm trong ngày 
            $a['stt_rec'] = $row['stt_rec'];
            $a['stt_rec0'] = $row['stt_rec0'];
            $a['so_luong'] = $row['so_luong'];
            array_push($mData_temp, $a);
            $ten_hang = $row['ma_vt'];
            $so_luong_temp = intval($row['so_luong']);
            $ngay_check = $row['ngay_ct'];
            //echo 'so luong' . $so_luong_temp;

            $sql3 = "select soct1.dvt,sum(soct1.so_luong)as sl,sosaleplan.he_so from soct1 JOIN "
                    . "sosaleplan on soct1.ma_vt=sosaleplan.ma_vt JOIN soph1 on soph1.stt_rec=soct1.stt_rec "
                    . "where soct1.ma_vt='$ten_hang' and sosaleplan.ngay_hl LIKE '%$ngay_lap_1%' "
                    . "and soph1.ngay_ct LIKE '%$ngay_check%' group by soct1.dvt ";
            $result_3 = mysqli_query($conn, $sql3)or die('Không thể cập nhật số lượng của sản phẩm có mã' + $ten_hang);
            $sodong = mysqli_num_rows($result_3);
            $tongsoluong_3 = 0;
            $so_luongsp = 0;
            if ($row['dvt'] == 'DVT2') {
                $so_luongsp = intval($row['so_luong']) * $row['he_so'];
            } else {
                $so_luongsp = intval($row['so_luong']);
            }
            if ($sodong > 0) {
                while ($row_ = mysqli_fetch_array($result_3)) {

                    $sl = 0;
                    // var_dump($row);
                    if ($row_['dvt'] == 'DVT2') {
                        $sl = intval($row_['sl']) * intval($row_['he_so']);
                        $tongsoluong_3+=$sl;
                    } else {
                        $sl = intval($row_['sl']);
                        $tongsoluong_3+=$sl;
                    }
                }
                $tongsoluong_3 = $tongsoluong_3 - $so_luongsp;

                $sql_update = "update soct1 set so_luong=0 where stt_rec='" . $row['stt_rec'] . "' and stt_rec0='" . $row['stt_rec0'] . "'";
                // echo " update soct1 set so_luong=0 where stt_rec='" . $row['stt_rec'] . "' and stt_rec='" . $row['stt_rec0'] . "'";

                $sql_4 = "update sosaleplan set sosaleplan.soluong_3=$tongsoluong_3 where sosaleplan.ma_vt='$ten_hang' and sosaleplan.ngay_hl like '%$ngay_lap_1%'";
                $result_5 = mysqli_query($conn, $sql_update) or die('Không thể thực hiện cập nhật số liệu...');
                $result_4 = mysqli_query($conn, $sql_4) or die('Không thể cấp nhật số lượng sản phẩm mua....');
                // echo 'Xong việc thêm mới...';
            }
            ?>
            <tr>
                <td>
                    <input type="checkbox" name="chk" />
                </td>
                <td>
                    <input type="hidden" id="ccheso<?= $i ?>" value=""/>
                    <input type="hidden" id="ccsup_hiden<?= $i ?>" data-sup="<?= $row['ma_KH'] ?>"/>
                    <input id="ccsup<?= $i ?>" onblur="onChangeSup(<?= $i ?>)" name="ccsup[]"  class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Tên NCC"style="height:30px;width: 80px;" />
                </td>

                <td >
                    <input type="hidden" id="ccnhomhang_hiden<?= $i ?>" data-nhom="<?= $row['Ma_nhvt'] ?>"/>
                    <input id="ccnhomhang<?= $i ?>" name="ccnhomhang[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Nhóm Hàng" style="height:30px;width: 100px;" />
                </td>
                <td>
                    <input type="hidden" id="cctenhang_hiden<?= $i ?>" data-hang="<?= $row['ma_vt'] ?>"/>
                    <input id="cctenhang<?= $i ?>" name="cctenhang[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Tên Hàng" style="height:30px;" />
                </td>
                <td>
                    <input type="hidden" id="ccdvt_hiden<?= $i ?>" data-dvt="<?= $row['dvt'] ?>"/>
                    <input id="ccdvt<?= $i ?>" name="ccdvt[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Đơn VT" style="width: 80px;height: 30px;" />
                </td>
                <td> 
                    <input type="text" maxlength="3" size="3" class="form-control" onblur="onChangeSoLuong('soluong' +<?= $i ?>, <?= $i ?>)" onkeyup="onChangeSoLuong('soluong' +<?= $i ?>, <?= $i ?>)" name="soluong[]" id="soluong<?= $i ?>" value="<?= $so_luong_temp ?>" style="text-align:center; width:50px;"/>
                </td>
                <td>
                     <input type="checkbox" class="check-box-km" name="check_km<?=$i?>" value="check" style="width: 50px;" id="check_km<?=$i?>" <?=$row['khuyen_mai']==1 ? "checked":"" ?>/>
                </td>
                <td> 
                    <input type="text"  class="form-control" onkeyup="onChangeGia('dongia' +<?= $i ?>, <?= $i ?>)" name="dongia[]" id="dongia<?= $i ?>"  style="text-align:right;width:100px;"/>
                </td>
                <td> 
                    <input  required onkeyup="changeCK(chietkhau<?= $i ?>, <?= $i ?>)" onclick="changeCK(chietkhau<?= $i ?>, <?= $i ?>)" onblur="changeCK(chietkhau<?= $i ?>, <?= $i ?>)" name="chietkhau[]" id="chietkhau<?= $i ?>" value="<?= $row['tl_ck'] ?>"  style="text-align:right;width:60px;height: 34px"/>
                </td>
                <td> 
                    <input type="text"  class="form-control"  readonly onclick="" onblur="" onkeyup="" name="tienck[]" id="tienck<?= $i ?>" value="<?= $row['tien_ck'] ?>"  style="text-align:right;width:100px;"/>
                </td>
                <td>
                    <input type="text" class="form-control" readonly name="thanhtoan[]" id="thanhtoan<?= $i ?>" style="text-align:right;width:130px;"/>
                </td>
            </tr>

            <script>
                $(document).ready(function () {

                    // lấy dữ liệu 
                    var supcc = $('#ccsup_hiden' +<?= $i ?>).data('sup');
                    var nhomhang = $('#ccnhomhang_hiden' +<?= $i ?>).data('nhom');
                    var tenhang = $('#cctenhang_hiden' +<?= $i ?>).data('hang');
                    var dvt = $('#ccdvt_hiden' +<?= $i ?>).data('dvt');
                    var data = {sup: supcc, nhom: nhomhang, ten: tenhang, donvi: dvt};
                    // $('#soluong'+<?= $i ?>).val(<?= $row['so_luong'] ?>);

                    // var data=JSON.parse(x);
                    //alert(data.nhom);
                    onInitSup('ccsup' +<?= $i ?>,<?= $i ?>, data);
                    initCombo('ccnhomhang' +<?= $i ?>);
                    initComboTenHang('cctenhang' +<?= $i ?>);
                    initComboDVT('ccdvt' +<?= $i ?>);
                    initNumberCK('chietkhau' +<?= $i ?>,<?= $i ?>);
                    init_checkbox_km();

                });
            </script>
            <?php
            //echo '<tr><td>'.$row_rs.'</td></tr>';
            // $sql_update="update soct1 set so_luong=$so_luong_temp where stt_rec='".$row['stt_rec']."' and stt_rec='".$row['stt_rec0']."'";

            $i++;
        }
        foreach ($mData_temp as $key => $value) {
            // var_dump($value['stt_rec']);
            $sql_6 = "update soct1 set so_luong=" . $value['so_luong'] . " where stt_rec='" . $value['stt_rec'] . "' and stt_rec0='" . $value['stt_rec0'] . "'";
            mysqli_query($conn, $sql_6) or die('Lỗi không thể cập nhật lại số lượng sản phẩm');
        }

        /* $sql_8="delete from soct2 where soct2.stt_rec='$stt_rec'";
          mysqli_query($conn, $sql_8) or die("Không thể xoá dữ liệu tạm trong "); */
    } else {
        // die("Không có dữ liệu");
        ?>
        <tr>

            <td>
                <input type="checkbox" name="chk" style="/*width: 80px;*/"/>
            </td>
            <td>
                <input type="hidden" value="" id="ccheso0" />
                <input id="ccsup0" onblur="onChangeSup(0)" name="ccsup[]"  class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Tên NCC" style="height:30px;width: 80px;" />
            </td>

            <td >
                <input id="ccnhomhang0" name="ccnhomhang[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Nhóm Hàng" style="height:30px;width: 100px;" />
            </td>
            <td>
                <input id="cctenhang0" name="cctenhang[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Tên Hàng" style="height:30px;" />
            </td>
            <td>
                <input id="ccdvt0" name="ccdvt[]" class="easyui-combobox" data-options="valueField:'id',textField:'text'" value="Đơn VT" style="width: 80px;height: 30px;" />
            </td>
            <td> 
                <input type="text" class="form-control" onblur="onChangeSoLuong(soluong0, 0)" onkeyup="onChangeSoLuong(soluong0, 0)" name="soluong[]" id="soluong0" style="text-align:right; width:80px;"/>
            </td>
            <td>
                <input type="checkbox" class="check-box-km" name="check_km<?=$i?>" value="<?=$i?>" style="width: 50px;" id="check_km<?=$i?>"/>
            </td>
            <td> 
                <input type="text"  class="form-control" onkeyup="onChangeGia(dongia0, 0)" name="dongia[]" id="dongia0"  style="text-align:right;width:100px;"/>
            </td>
            
            <td> 
                <input  required onclick="changeCK(chietkhau0, 0)" onblur="changeCK(chietkhau0, 0)" onkeyup="changeCK(chietkhau0, 0)" name="chietkhau[]" id="chietkhau0" value="0"  style="text-align:right;width:100px;height: 34px"/>
            </td>
            <td> 
                <input type="text"  class="form-control"  readonly onclick="" onblur="" onkeyup="" name="tienck[]" id="tienck0" value="0"  style="text-align:right;width:100px;"/>
            </td>
            <td>
                <input type="text" class="form-control" name="thanhtoan[]" id="thanhtoan0" style="text-align:right;width:130px;"/>
            </td>
        </tr>
        <script>
            initCombo('ccnhomhang0');
            onInitSup('ccsup0', 0);
            initComboTenHang('cctenhang0');
            initComboDVT('ccdvt0');
            initNumberCK('chietkhau0', 0);
        </script>
        <?php
    }
    //echo (json_encode($mData));
    // exit;
} else {
    die('Lỗi thiếu dữ liệu...');
}
?>

